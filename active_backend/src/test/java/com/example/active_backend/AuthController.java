import com.example.active_backend.model.USER_ROLE;
import com.example.active_backend.model.User;
import com.example.active_backend.repository.UserRepository;
import com.example.active_backend.requests.LoginRequests;
import com.example.active_backend.response.AuthResponse;
import com.example.active_backend.service.CustomUserDetailsService;
import com.example.active_backend.config.JwtProvider;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

class AuthController {

    @Mock
    private UserRepository userRepository;

    @Mock
    private JwtProvider jwtProvider;

    @Mock
    private CustomUserDetailsService customUserDetailsService;

    @InjectMocks
    private AuthController authController;

    @Test
    void testCreateUserHandler() throws Exception {
        // Mocking the required data
        User user = new User();
        AuthResponse authResponse = new AuthResponse();

        // Mocking userRepository, jwtProvider, and customUserDetailsService methods
        when(userRepository.findByEmail(anyString())).thenReturn(null);
        when(userRepository.save(any())).thenReturn(user);
        when(jwtProvider.generateToken(any())).thenReturn("jwt-token");

        // Testing the controller method
        ResponseEntity<AuthResponse> response = authController.createUserHandler(user);

        // Verifying the expected behavior
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(authResponse.getJwt(), response.getBody().getJwt());
        assertEquals(authResponse.getMessage(), response.getBody().getMessage());
        assertEquals(authResponse.getRole(), response.getBody().getRole());
    }

}
