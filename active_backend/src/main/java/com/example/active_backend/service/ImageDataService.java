package com.example.active_backend.service;

import com.example.active_backend.dto.ImageUploadDTO;
import com.example.active_backend.model.ImageData;
import com.example.active_backend.model.ImageUpload;
import com.example.active_backend.repository.ImageDataRepository;
import com.example.active_backend.repository.ImageUploadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ImageDataService {

    private final ImageUploadRepository imageUploadRepository;
    private final ImageDataRepository imageDataRepository;

    @Autowired
    public ImageDataService(ImageUploadRepository imageUploadRepository, ImageDataRepository imageDataRepository) {
        this.imageUploadRepository = imageUploadRepository;
        this.imageDataRepository = imageDataRepository;
    }

    @Transactional
    public Long saveImageUpload(ImageUploadDTO imageUploadDTO) {
        ImageUpload imageUpload = new ImageUpload();

        // Convert byte[] data to ImageData entities
        for (byte[] imageDataBytes : imageUploadDTO.getImagesData()) {
            ImageData imageData = new ImageData();
            imageData.setImageData(imageDataBytes);
            imageData.setImageUpload(imageUpload);
            imageUpload.getImages().add(imageData);
        }

        return imageUploadRepository.save(imageUpload).getId();
    }

}
