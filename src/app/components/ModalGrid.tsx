import { Photo } from "@/app/types/photo";
import Image from "next/image";
import { useEffect } from "react";

interface ModalViewProps {
  photo: Photo;
  onClose: () => void;
}

const ModalView: React.FC<ModalViewProps> = ({ photo, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 transition-colors duration-300 ease-in-out">
      <div
        className="custom-overlay"
        style={{
          backgroundColor: photo.color,
        }}
      ></div>
      <div className="relative">
        <Image
          src={photo.urls.regular}
          alt={photo.description || "Unsplash Image"}
          className="w-full h-auto cursor-pointer"
          width={photo.width}
          height={photo.height}
        />
        <button
          onClick={onClose}
          className="fixed top-2 right-2 bg-gray-950 text-white text-xl rounded-full custom-icon-button"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ModalView;
