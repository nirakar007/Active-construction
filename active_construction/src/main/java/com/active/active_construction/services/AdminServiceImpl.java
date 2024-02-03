package com.active.active_construction.services;

import com.active.active_construction.model.Admin;
import com.active.active_construction.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService{
    @Autowired
    private AdminRepository adminRepository;
    @Override
    public Admin saveAdmin(Admin admin){
        return adminRepository.save(admin);
    }

    @Override
    public Admin getAdminById(Long adminId) {
        return adminRepository.findById(adminId).orElse(null);
    }
}
