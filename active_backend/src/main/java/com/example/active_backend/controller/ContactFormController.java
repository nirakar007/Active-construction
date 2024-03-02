package com.example.active_backend.controller;

import com.example.active_backend.dto.ContactFormDTO;
import com.example.active_backend.service.ContactFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/contact")
public class ContactFormController {
    private final ContactFormService contactFormService;

    @Autowired
    public ContactFormController(ContactFormService contactFormService){
        this.contactFormService = contactFormService;
    }

    @PostMapping("/submit")
    public ResponseEntity<Long> submitContactForm(@RequestBody ContactFormDTO contactFormDTO){
        Long savedFormId = contactFormService.submitContactForm(contactFormDTO);
        return new ResponseEntity<>(savedFormId, HttpStatus.CREATED);
    }
}
