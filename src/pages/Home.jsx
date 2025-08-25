import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

import PageHead from "../components/PageHead";
import Hero from "../components/Hero";
import RoomCard from "../components/RoomCard";
import Testimonials from "../components/Testimonials";
import MapLocation from "../components/MapLocation";
import SpecialOfferModal from "../components/SpecialOfferModal";
import AboutUs from "../components/AboutUs";
import OurStory from "../components/OurStory";
// import Newsletter from "../components/Newsletter";
import Newsletter from "../components/NewsLetter";
import ContactUs from "../components/ContactUs";

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [showOffer, setShowOffer] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5005/api/rooms")
      .then((res) => {
        const data = res.data;
        if (Array.isArray(data)) {
          setRooms(data.slice(0, 6));
        } else {
          console.warn("Rooms API did not return an array:", data);
          setRooms([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching rooms:", err);
        setRooms([]);
      });
  }, []);

  return (
    <>
      <PageHead
        title="InstaNest | Home"
        description="Book cozy rooms & enjoy your stay."
      />

      <Hero />

      <AboutUs />

      <OurStory />

      <main className="space-y-20 pb-20">
        {/* 🏨 Featured Rooms */}
        <section className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-primary mb-2">
              Featured Rooms
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our most popular rooms, carefully designed for your
              comfort.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room._id} room={room} />
            ))}
          </div>
        </section>

        {/* Customers Testimonials */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              What Our Guests Say
            </h2>
            <p className="text-gray-600 mb-10">
              Real reviews from our valued guests.
            </p>
            <Testimonials />
          </div>
        </section>

        {/* 🗺️ Map Location */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary">Find Us</h2>
            <p className="text-gray-600">
              Our beautiful location awaits your visit
            </p>
          </div>
          <MapLocation />
        </section>

        {/* 🎉 Special Offer Modal */}
        {showOffer && (
          <SpecialOfferModal
            offer="🔥 Get 20% off all summer bookings!"
            onClose={() => setShowOffer(false)}
          />
        )}

        <ContactUs></ContactUs>
        {/* 📬 Newsletter */}
        <Newsletter />
      </main>
    </>
  );
};

export default Home;
