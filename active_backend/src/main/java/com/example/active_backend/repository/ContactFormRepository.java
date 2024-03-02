package com.example.active_backend.repository;

import com.example.active_backend.dto.ContactFormDTO;
import com.example.active_backend.model.ContactForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactFormRepository extends JpaRepository<ContactForm, Long> {
}
