import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    // Add form submission logic
  };

  return (
    <div className="container mx-auto py-10 px-6 space-y-16">
      {/* Heading and Banner */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <img
          src="https://images.pexels.com/photos/1069754/pexels-photo-1069754.jpeg"
          alt="Hotel Location"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-lg text-gray-600">
          We’re here to assist you! Reach out for any inquiries, bookings, or
          feedback.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Our Contact Information
          </h2>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> contact@ourhotel.com
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p className="text-gray-600 mb-6">
            <strong>Address:</strong> 123 Hotel Street, Cityville
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
            width="100%"
            height="250"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>

        {/* Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            ></textarea>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Why Contact Us Section */}
      <div className="bg-gray-50 py-12 px-4 rounded-lg shadow-sm text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">
          Why Contact Us?
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          We don’t just take bookings — we build relationships. Here’s why you
          might reach out:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold text-lg mb-2">🛎 Booking Assistance</h4>
            <p>
              Need help with dates or room types? We're just a message away.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold text-lg mb-2">🎉 Event Planning</h4>
            <p>
              Planning a wedding, party or business meeting? Let’s make it
              memorable.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold text-lg mb-2">💬 Feedback</h4>
            <p>Share your experience so we can continue to serve better.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">
          Meet Our Support Team
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Support Agent"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-2"
            />
            <h4 className="font-semibold">Emily</h4>
            <p className="text-sm text-gray-600">Guest Relations</p>
          </div>
          <div>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Support Agent"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-2"
            />
            <h4 className="font-semibold">James</h4>
            <p className="text-sm text-gray-600">Booking Support</p>
          </div>
          <div>
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Support Agent"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-2"
            />
            <h4 className="font-semibold">Sophia</h4>
            <p className="text-sm text-gray-600">Events Coordinator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
