import com.example.active_backend.dto.ContactFormDTO;
import com.example.active_backend.service.ContactFormService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ContactFormController {

    @Mock
    private ContactFormService contactFormService;

    @InjectMocks
    private ContactFormController contactFormController;

    @Test
    void testSubmitContactForm() {
        // Mocking the required data
        ContactFormDTO contactFormDTO = new ContactFormDTO();

        // Mocking contactFormService method
        when(contactFormService.submitContactForm(any())).thenReturn(1L);

        // Testing the controller method
        ResponseEntity<Long> response = contactFormController.submitContactForm(contactFormDTO);

        // Verifying the expected behavior
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(1L, response.getBody());
    }
}
