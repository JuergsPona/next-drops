"use client";

import { useState } from "react";
import DarkModeToggle from "@/app/components/DarkModeToggle";
import ImageGrid from "@/app/components/ImageGrid";
import ModalView from "@/app/components/ModalGrid";
import { useRecentPhotos } from "@/app/hooks/useRecentPhotos";
import { Photo } from "@/app/types/photo";

const HomePage: React.FC = () => {
  const { photos, loading, error } = useRecentPhotos();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handleSelectPhoto = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen p-4 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-4">
          <DarkModeToggle />
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {typeof window !== "undefined" && photos && (
          <ImageGrid photos={photos} onSelectPhoto={handleSelectPhoto} />
        )}
        {selectedPhoto && (
          <ModalView photo={selectedPhoto} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
