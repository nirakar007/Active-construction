package com.example.active_backend.dto;

import com.example.active_backend.model.USER_ROLE;
import lombok.Data;

@Data
public class UserDTO {
    private Long id;
    private String email;
    private String phone;
    private USER_ROLE role;
}
