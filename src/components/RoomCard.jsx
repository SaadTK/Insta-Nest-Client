import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ room }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = room.images || [];

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      onClick={() => navigate(`/rooms/${room._id}`)}
      className="cursor-pointer bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden border border-gray-200 group"
    >
      {/* Image Section */}
      <div className="relative h-56 w-full">
        {images.length > 0 ? (
          <>
            <img
              src={images[currentImageIndex]}
              alt={room.name}
              className="w-full h-full object-cover transition-opacity duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            {/* Text over Image */}
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-xl font-bold">{room.name}</h3>
              <p className="text-sm">${room.price} / night</p>
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm">
            No Image Available
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-4 space-y-2">
        <p className="text-gray-600 text-sm line-clamp-2">{room.description}</p>

        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>🛏 Capacity: {room.capacity || "N/A"}</span>
          <span>⭐ {room.rating || "No rating"}</span>
        </div>

        <button
          onClick={() => navigate(`/rooms/${room._id}`)}
          className="mt-3 w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-primary-dark transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
