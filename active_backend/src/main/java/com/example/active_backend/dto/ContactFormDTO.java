package com.example.active_backend.dto;

import lombok.Data;

@Data
public class ContactFormDTO {
    private String fullname;
    private String email;
    private String phone;
    private String message;
    private String dateTime;
}
