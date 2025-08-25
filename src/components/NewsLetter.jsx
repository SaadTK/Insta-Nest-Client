// src/components/Newsletter.jsx
import { FaEnvelopeOpenText } from "react-icons/fa";
import { BsSend } from "react-icons/bs";

const Newsletter = () => {
  return (
    <section className="bg-background py-16 px-4 md:px-10 text-textPrimary">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <FaEnvelopeOpenText className="text-4xl text-primary" />
        </div>
        <h4 className="text-2xl font-bold mb-2">Join Our Newsletter</h4>
        <p className="text-gray-600 mb-6">
          Get exclusive offers, hotel updates, and travel inspiration in your
          inbox.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-2/3"
            required
          />
          <button
            type="submit"
            className="btn btn-primary flex items-center gap-2"
          >
            <BsSend className="text-lg" /> Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
