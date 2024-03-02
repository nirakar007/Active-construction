package com.example.active_backend.service;

import com.example.active_backend.dto.ContactFormDTO;
import com.example.active_backend.model.ContactForm;
import com.example.active_backend.repository.ContactFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactFormService {

    private final ContactFormRepository contactFormRepository;

    @Autowired
    public ContactFormService(ContactFormRepository contactFormRepository) {
        this.contactFormRepository = contactFormRepository;
    }

    public Long submitContactForm(ContactFormDTO contactFormDTO) {
        ContactForm contactForm = new ContactForm();
        contactForm.setFullname(contactFormDTO.getFullname());
        contactForm.setEmail(contactFormDTO.getEmail());
        contactForm.setPhone(contactFormDTO.getPhone());
        contactForm.setMessage(contactFormDTO.getMessage());
        contactForm.setDateTime(contactFormDTO.getDateTime());

        return contactFormRepository.save(contactForm).getId();
    }
}
