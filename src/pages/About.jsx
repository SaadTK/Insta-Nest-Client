import React from "react";

const About = () => {
  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>

      <div className="text-center mb-12">
        <img
          src="https://images.pexels.com/photos/33140/pexels-photo-33140.jpeg"
          alt="Hotel Team"
          className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
        />
        <h2 className="text-2xl font-semibold">Welcome to Our Hotel</h2>
        <p className="mt-4 text-lg text-gray-600">
          Our hotel offers a blend of luxury, comfort, and warmth. We are
          committed to providing exceptional service and making your stay
          memorable. From beautiful rooms to world-class amenities, everything
          is designed with your comfort in mind.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-600">
            To provide our guests with a luxurious stay, offering world-class
            amenities, exceptional service, and a welcoming environment.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Values</h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Excellence</li>
            <li>Comfort</li>
            <li>Integrity</li>
            <li>Innovation</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Our History</h3>
          <p className="text-gray-600">
            Founded in 1990, we have been serving our guests with passion and
            dedication. Over the years, we have built a reputation for being one
            of the top hotels in the region.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
