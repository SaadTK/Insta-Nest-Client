const ContactUs = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-10 text-textPrimary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold font-heading text-primary">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            Have questions or want to book directly? Reach out — we’re happy to
            help!
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-700">📞 Phone</h4>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700">✉️ Email</h4>
              <p className="text-gray-600">contact@instanesthotel.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700">
                📍 Address
              </h4>
              <p className="text-gray-600">
                123 Luxury Lane, Downtown City, NY 10001
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows="5"
              required
              placeholder="Write your message here..."
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-yellow-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
