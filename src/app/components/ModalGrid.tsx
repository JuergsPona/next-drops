"use client";

import Image from "next/image";
import { Photo } from "../types/photo";

interface ModalViewProps {
  photo: Photo;
  onClose: () => void;
}

const ModalView: React.FC<ModalViewProps> = ({ photo, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative">
        <Image
          src={photo.urls.small}
          alt={photo.description || "Unsplash Image"}
          layout="responsive"
          className="w-full h-auto cursor-pointer"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ModalView;
