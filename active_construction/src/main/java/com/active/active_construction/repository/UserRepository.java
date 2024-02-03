package com.active.active_construction.repository;

import com.active.active_construction.model.User;
import com.active.active_construction.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByRole(UserRole role);
}
