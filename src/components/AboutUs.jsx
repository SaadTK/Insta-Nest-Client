const AboutUs = () => {
  return (
    <section className="bg-background py-20 px-4 md:px-10 text-textPrimary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold font-heading text-primary">
            About InstaNest
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nestled in the heart of the city,{" "}
            <span className="text-primary font-semibold">InstaNest</span> offers
            a perfect blend of elegance, comfort, and modern luxury. Whether
            you're traveling for business or pleasure, our warm hospitality and
            thoughtfully designed rooms ensure a stay you'll never forget.
          </p>
          <p className="text-lg text-gray-600">
            With top-notch amenities, gourmet dining, and a calming ambiance,
            InstaNest is your home away from home. Discover a new standard of
            boutique hospitality.
          </p>
        </div>

        {/* Image Section */}
        <div>
          <img
            src="https://images.pexels.com/photos/2284169/pexels-photo-2284169.jpeg?_gl=1*1nx9i69*_ga*MTg5NDM1ODEyMy4xNzU2MTA1MTc0*_ga_8JE65Q40S6*czE3NTYxMDUxNzMkbzEkZzEkdDE3NTYxMDUyNDMkajUwJGwwJGgw"
            alt="About our hotel"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
