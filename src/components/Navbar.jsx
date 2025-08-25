import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { FiLogOut } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/I.png";
import defaultAvatar from "../assets/avatar-default.svg";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    logout().catch((err) => console.error(err));
  };

  const navLinks = [
    { path: "/rooms", label: "Rooms" },
    { path: "/gallery", label: "Gallery" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  if (user) navLinks.push({ path: "/bookings", label: "My Bookings" });

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Hotel Logo" className="w-10" />
          <span className="text-2xl font-bold text-primary tracking-tight">
            InstaNest
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`transition duration-200 hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary font-semibold"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Section */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="relative group">
              <img
                src={user.photoURL || defaultAvatar}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-primary cursor-pointer"
              />
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-4 w-48 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 z-50">
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  {user.displayName || "User"}
                </p>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition text-sm"
                >
                  <FiLogOut /> Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex gap-3">
              <Link
                to="/login"
                className="px-4 py-2 rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col p-4 space-y-4 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="block text-gray-700 hover:text-primary transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {!user && (
              <>
                <li>
                  <Link
                    to="/login"
                    className="block text-primary hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="block text-primary hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
