package com.example.active_backend.requests;

import lombok.Data;


@Data
public class CreateProjectReq {
    private Long id;
    private String name;
    private String date;
    private String leader;
    private String description;

}
