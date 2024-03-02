package com.example.active_backend.dto;

import lombok.Data;

import java.util.List;

@Data
public class ImageUploadDTO {
    private List<byte[]> imagesData;
}