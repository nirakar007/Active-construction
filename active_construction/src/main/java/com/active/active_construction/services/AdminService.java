package com.active.active_construction.services;

import com.active.active_construction.model.Admin;


public interface AdminService {
    Admin saveAdmin(Admin admin);
    Admin getAdminById(Long adminId);
}
