import React from "react";

const Gallery = () => {
  const galleryImages = [
    // Hotel exterior
    "https://images.pexels.com/photos/12238319/pexels-photo-12238319.jpeg?_gl=1*1k4l0da*_ga*MTQ3Mjc3OTg3OC4xNzU1Nzc1MDYw*_ga_8JE65Q40S6*czE3NTYxMDU1MTUkbzIkZzEkdDE3NTYxMDU3MzEkajMxJGwwJGgw",
    "https://images.pexels.com/photos/33514286/pexels-photo-33514286.jpeg?_gl=1*11rhpxf*_ga*MTQ3Mjc3OTg3OC4xNzU1Nzc1MDYw*_ga_8JE65Q40S6*czE3NTYxMDU1MTUkbzIkZzEkdDE3NTYxMDU3NDIkajIwJGwwJGgw",
    "https://images.pexels.com/photos/9988747/pexels-photo-9988747.jpeg?_gl=1*m10ca7*_ga*MTQ3Mjc3OTg3OC4xNzU1Nzc1MDYw*_ga_8JE65Q40S6*czE3NTYxMDU1MTUkbzIkZzEkdDE3NTYxMDU3NDkkajEzJGwwJGgw",
    "https://images.pexels.com/photos/33583899/pexels-photo-33583899.jpeg?_gl=1*1hvd7da*_ga*MTQ3Mjc3OTg3OC4xNzU1Nzc1MDYw*_ga_8JE65Q40S6*czE3NTYxMDU1MTUkbzIkZzEkdDE3NTYxMDU3NzUkajYwJGwwJGgw",
    "https://images.pexels.com/photos/33596742/pexels-photo-33596742.jpeg?_gl=1*12tf05z*_ga*MTQ3Mjc3OTg3OC4xNzU1Nzc1MDYw*_ga_8JE65Q40S6*czE3NTYxMDU1MTUkbzIkZzEkdDE3NTYxMDU3ODEkajU0JGwwJGgw",

    
    // Room interior
    "https://images.pexels.com/photos/4916279/pexels-photo-4916279.jpeg?_gl=1*4l4vuv*_ga*MTQ3Mjc3OTg3OC4xNzU1Nzc1MDYw*_ga_8JE65Q40S6*czE3NTYxMDU1MTUkbzIkZzEkdDE3NTYxMDU5NzQkajMzJGwwJGgw",
    "https://images.pexels.com/photos/5712137/pexels-photo-5712137.jpeg",
    "https://images.pexels.com/photos/9566051/pexels-photo-9566051.jpeg",
    "https://images.pexels.com/photos/8092391/pexels-photo-8092391.jpeg",
    "https://images.pexels.com/photos/8210499/pexels-photo-8210499.jpeg",
    "https://images.pexels.com/photos/4740485/pexels-photo-4740485.jpeg",
    "https://images.pexels.com/photos/13707990/pexels-photo-13707990.jpeg",
    "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
    "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg",
    "https://images.pexels.com/photos/33569784/pexels-photo-33569784.jpeg",
    "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg",
    "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
    "https://images.pexels.com/photos/33559217/pexels-photo-33559217.jpeg",

    // Pool area
    "https://images.pexels.com/photos/5746250/pexels-photo-5746250.jpeg",
    "https://images.pexels.com/photos/756099/pexels-photo-756099.jpeg",
    "https://images.pexels.com/photos/78126/pexels-photo-78126.jpeg",
    "https://images.pexels.com/photos/9119726/pexels-photo-9119726.jpeg",
    "https://images.pexels.com/photos/2540726/pexels-photo-2540726.jpeg",
    "https://images.pexels.com/photos/261108/pexels-photo-261108.jpeg",
    "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg",
    "https://images.pexels.com/photos/751268/pexels-photo-751268.jpeg",
    "https://images.pexels.com/photos/6126939/pexels-photo-6126939.jpeg",
    "https://images.pexels.com/photos/7902912/pexels-photo-7902912.jpeg",
    "https://images.pexels.com/photos/31974890/pexels-photo-31974890.jpeg",
    
    // Hotel amenities
    "https://images.pexels.com/photos/31234756/pexels-photo-31234756.jpeg",
    "https://images.pexels.com/photos/6466284/pexels-photo-6466284.jpeg",
    "https://images.pexels.com/photos/11109428/pexels-photo-11109428.jpeg",
    "https://images.pexels.com/photos/6466282/pexels-photo-6466282.jpeg",
    "https://images.pexels.com/photos/5371573/pexels-photo-5371573.jpeg",
    "https://images.pexels.com/photos/8092391/pexels-photo-8092391.jpeg",
    "https://images.pexels.com/photos/33534276/pexels-photo-33534276.jpeg",
    
    // Restaurant area
    "https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg",
    "https://images.pexels.com/photos/12391807/pexels-photo-12391807.jpeg",
    "https://images.pexels.com/photos/27923189/pexels-photo-27923189.jpeg",
    "https://images.pexels.com/photos/3770883/pexels-photo-3770883.jpeg",
    "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg",
    "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
    "https://images.pexels.com/photos/2291624/pexels-photo-2291624.jpeg"
    
  
  ];

  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
