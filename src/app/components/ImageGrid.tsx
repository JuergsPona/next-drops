import { Photo } from "@/app/types/photo";
import Image from "next/image";

interface ImageGridProps {
  photos: Photo[];
  onSelectPhoto: (photo: Photo) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ photos, onSelectPhoto }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {photos.map((photo) => (
        <div key={photo.id} onClick={() => onSelectPhoto(photo)}>
          <Image
            src={photo.urls.small}
            alt={photo.description || "Unsplash Image"}
            className="cursor-pointer rounded"
            width={photo.width}
            height={photo.height}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
