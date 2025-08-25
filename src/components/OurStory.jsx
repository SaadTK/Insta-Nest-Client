// src/components/OurStory.jsx
const OurStory = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 text-textPrimary">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src="https://images.pexels.com/photos/2611028/pexels-photo-2611028.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Hotel story"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-3xl font-semibold mb-4">Our Story</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Founded in 2025, InstaNest was created to blend the warmth of a home
            with the luxury of a hotel. What began as a small family-run
            property is now a top-rated destination known for comfort, class,
            and heartfelt service. Our guests are not just visitors — they're
            part of our story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
