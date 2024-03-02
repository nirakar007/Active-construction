import React, { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';

function GalleryManagement() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    // Fetch gallery images on component mount
    fetchGalleryImages();

    // Retrieve selected images from local storage
    const storedImages = JSON.parse(localStorage.getItem('selectedImages')) || [];
    console.log('Retrieved from local storage:', storedImages);
    setSelectedImages(storedImages);
  }, []);

  useEffect(() => {
    // Save selected images to local storage whenever it changes
    localStorage.setItem('selectedImages', JSON.stringify(selectedImages));
    console.log('Saved to local storage:', selectedImages);
  }, [selectedImages]);

  const fetchGalleryImages = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/gallery');
      if (response.ok) {
        const data = await response.json();
        setGalleryImages(data);
      } else {
        console.error('Failed to fetch gallery images');
      }
    } catch (error) {
      console.error('Error fetching gallery images:', error);
    }
  };

  const handleImageUpload = async (event) => {
    const files = event.target.files;

    // Convert FileList to an array
    const newImages = Array.from(files).map((file) => {
      return {
        id: Date.now(), // Use a unique identifier, in this case, timestamp
        file,
        url: URL.createObjectURL(file), // Create a temporary URL for preview
        title: '',
      };
    });

    // Update selected images
    setSelectedImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleImageDelete = (imageId) => {
    // Update selected images by removing the specified image
    setSelectedImages((prevImages) => prevImages.filter((image) => image.id !== imageId));
  };

  const handleImageEdit = (imageId, newDetails) => {
    // Update selected images with the new details
    setSelectedImages((prevImages) =>
      prevImages.map((image) =>
        image.id === imageId ? { ...image, ...newDetails } : image
      )
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-jost mb-4">Gallery Management</h2>

      {/* Image Upload Section */}
      <div className="mb-4 font-jost">
        <input type="file" onChange={handleImageUpload} multiple />
      </div>

      {/* Display Selected Images */}
      <div className="grid grid-cols-5 gap-4">
        {selectedImages.map((image) => (
          <div key={image.id} className="relative">
            <img src={image.url} alt={image.title} className="w-full h-40 object-cover mb-2" />
            <div className="absolute top-0 right-0 p-2">
              <button onClick={() => handleImageDelete(image.id)} className="bg-white rounded-full p-2 text-2xl text-neutral-600 hover:text-red-600">
                <MdDelete />
              </button>
            </div>
            <div className="p-2">
              <input
                type="text"
                value={image.title}
                onChange={(e) => handleImageEdit(image.id, { title: e.target.value })}
                className="border-b-2 w-full focus:outline-none"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryManagement;
