import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="fixed inset-0 bg-darkGray/80 flex items-center justify-center z-50 px-5 pt-4 pb-10">
        <button className="absolute top-4 right-8 text-white hover:text-softGreen" onClick={onClose}>
          <X size={35} />
        </button>
        <button className="absolute left-4 text-white hover:text-softGreen" onClick={handlePrev}>
          <ChevronLeft size={40} />
        </button>
        <img
          src={images[currentIndex]}
          alt="Lightbox"
          className="max-w-full max-h-full rounded-lg"
        />
        <button className="absolute right-4 text-white hover:text-softGreen" onClick={handleNext}>
          <ChevronRight size={40} />
        </button>
        <p className="font-medium text-xl text-white z-50 text-center align-middle absolute bottom-1">{`${currentIndex+1} / ${images.length}`}</p>
      </div>
    </>
  );
};

export default Lightbox;