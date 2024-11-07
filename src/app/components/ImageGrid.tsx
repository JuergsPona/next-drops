"use client";

import Image from "next/image";
import { Photo } from "../types/photo";

interface ImageGridProps {
  photos: Photo[];
  onSelectPhoto: (photo: Photo) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ photos, onSelectPhoto }) => {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {photos.map((photo) => (
        <div key={photo.id} onClick={() => onSelectPhoto(photo)}>
          <Image
            src={photo.urls.small}
            alt={photo.description || "Unsplash Image"}
            layout="responsive"
            className="w-full h-auto cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
