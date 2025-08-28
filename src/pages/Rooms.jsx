import React, { useEffect, useState } from "react";
import axios from "axios";
import RoomCard from "../components/RoomCard";
import PageHead from "../components/PageHead";

const priceRanges = [
  { label: "$10 - $50", min: 10, max: 50 },
  { label: "$51 - $100", min: 51, max: 100 },
  { label: "$101 - $200", min: 101, max: 200 },
  { label: "$201 - $500", min: 201, max: 500 },
];

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRanges, setSelectedRanges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load all rooms initially
  const fetchAllRooms = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("https://insta-nest-server-production.up.railway.app/api/rooms", {
        withCredentials: true,
      });
      setRooms(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load rooms.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch filtered rooms
  const fetchFilteredRooms = async () => {
    setLoading(true);
    setError("");

    if (selectedRanges.length === 0) {
      // No filters selected, fetch all
      fetchAllRooms();
      return;
    }

    // Prepare comma separated ranges string: e.g. "10-50,51-100"
    const rangesParam = selectedRanges
      .map((range) => `${range.min}-${range.max}`)
      .join(",");

    try {
      const res = await axios.get("https://insta-nest-server-production.up.railway.app/api/rooms/filter", {
        params: { ranges: rangesParam },
        withCredentials: true,
      });
      setRooms(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to apply filters.");
    } finally {
      setLoading(false);
    }
  };

  // Handle checkbox change
  const handleCheckboxChange = (range) => {
    setSelectedRanges((prev) => {
      const exists = prev.find(
        (r) => r.min === range.min && r.max === range.max
      );
      if (exists) {
        // Remove range if already selected
        return prev.filter((r) => r.min !== range.min || r.max !== range.max);
      } else {
        // Add new selected range
        return [...prev, range];
      }
    });
  };

  useEffect(() => {
    fetchAllRooms(); // Load all rooms on mount
  }, []);

  return (
    <>
      <PageHead
        title="All Rooms"
        description="Book cozy rooms & enjoy your stay."
      />

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          🏨 Available Rooms
        </h2>

        {/* Price Range Filters */}
        <div className="flex flex-wrap gap-6 justify-center mb-6">
          {priceRanges.map((range) => (
            <label
              key={range.min}
              className="inline-flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedRanges.some(
                  (r) => r.min === range.min && r.max === range.max
                )}
                onChange={() => handleCheckboxChange(range)}
                className="checkbox checkbox-primary"
              />
              <span>{range.label}</span>
            </label>
          ))}

          <button
            className="btn btn-primary px-6 py-2 rounded-lg font-semibold transition hover:scale-105"
            onClick={fetchFilteredRooms}
          >
            Apply Filters
          </button>
        </div>

        {/* Rooms Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array(6)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="h-72 bg-gray-200 animate-pulse rounded-lg"
                />
              ))
          ) : error ? (
            <p className="col-span-full text-center text-red-600 font-semibold">
              {error}
            </p>
          ) : rooms.length ? (
            rooms.map((room) => <RoomCard key={room._id} room={room} />)
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No rooms found for the selected filters.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Rooms;
