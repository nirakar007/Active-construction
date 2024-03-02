import com.example.active_backend.model.Project;
import com.example.active_backend.model.USER_ROLE;
import com.example.active_backend.model.User;
import com.example.active_backend.requests.CreateProjectReq;
import com.example.active_backend.response.MessageResponse;
import com.example.active_backend.service.ProjectService;
import com.example.active_backend.service.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

class AdminProjectController {

    @Mock
    private ProjectService projectService;

    @Mock
    private UserService userService;

    @InjectMocks
    private AdminProjectController adminProjectController;

    @Test
    void testCreateProject() throws Exception {
        // Mocking the required data
        CreateProjectReq req = new CreateProjectReq();
        User user = new User();
        Project project = new Project();

        // Mocking userService and projectService methods
        when(userService.findUserByJwtToken(anyString())).thenReturn(user);
        when(projectService.createProject(eq(req), eq(user))).thenReturn(project);

        // Testing the controller method
        ResponseEntity<Project> response = adminProjectController.createProject(req, "jwt-token");

        // Verifying the expected behavior
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(project, response.getBody());
    }

}
