import com.example.active_backend.model.User;
import com.example.active_backend.service.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

class UserControllerTest {

    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;

    @Test
    void testFindUserByJwtToken() throws Exception {
        // Mocking the required data
        User user = new User();

        // Mocking userService method
        when(userService.findUserByJwtToken(anyString())).thenReturn(user);

        // Testing the controller method
        ResponseEntity<User> response = userController.findUserByJwtToken("jwt-token");

        // Verifying the expected behavior
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(user, response.getBody());
    }
}
