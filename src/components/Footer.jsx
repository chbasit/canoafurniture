import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#343437] text-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2">
          {/* Left Side */}
          <div className="px-6 md:px-12 lg:px-16 py-16 lg:border-r border-white/20">
            {/* Logo */}
          {/* Logo */}
<h2 className="font-fustat text-4xl font-light tracking-[8px] mb-12">
  Home آرٹس Studio
</h2>

{/* Heading */}
<h3 className="text-3xl md:text-4xl font-light leading-tight max-w-lg">
  Furniture • Interior • Corian
</h3>

<p className="mt-6 text-white/80 text-lg leading-8 max-w-md">
  Premium Furniture, Interior Solutions & Corian Designs
  <br />
  Shanghai Road, Near Punjab Society, Lahore
</p>

            {/* Newsletter */}
            <form className="mt-12 max-w-md">
              <div className="border border-white/40 flex items-center justify-between">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent px-6 py-5 flex-1 outline-none placeholder:text-white/60"
                />

                <button
                  type="submit"
                  className="m-2 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#d4b78f] transition"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>

            {/* Copyright */}
            <p className="mt-14 text-sm text-white/70">
  © {new Date().getFullYear()} Home آرٹس Studio. All rights reserved.
</p>

            {/* Social Icons */}
            <div className="flex items-center gap-7 mt-16 text-2xl">
              <a
                href="#"
                className="hover:text-[#d4b78f] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/canoafurniture_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d4b78f] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="hover:text-[#d4b78f] transition"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="hover:text-[#d4b78f] transition"
              >
                <FaPinterestP />
              </a>

              <a
                href="#"
                className="hover:text-[#d4b78f] transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="px-6 md:px-12 lg:px-16 py-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              {/* Collections */}
              <div>
             <h4 className="text-lg mb-8 font-medium">
  Products
</h4>

<ul className="space-y-4 text-white/75">
  <li><a href="#" className="hover:text-white">Furniture</a></li>
  <li><a href="#" className="hover:text-white">Interior</a></li>
  <li><a href="#" className="hover:text-white">Corian</a></li>
  <li><a href="#" className="hover:text-white">Custom Designs</a></li>
  <li><a href="#" className="hover:text-white">Home Decor</a></li>
</ul>
              </div>

              {/* Services */}
              <div>
              <h4 className="text-lg mb-8 font-medium">
  Services
</h4>

<ul className="space-y-4 text-white/75">
  <li><a href="#" className="hover:text-white">Furniture Design</a></li>
  <li><a href="#" className="hover:text-white">Interior Designing</a></li>
  <li><a href="#" className="hover:text-white">Corian Installation</a></li>
  <li><a href="#" className="hover:text-white">Site Consultation</a></li>
  <li><a href="#" className="hover:text-white">Project Execution</a></li>
</ul>
              </div>

              {/* Company */}
              <div>
               <h4 className="text-lg mb-8 font-medium">
  Contact
</h4>

<ul className="space-y-4 text-white/75">
  <li><a href="#" className="hover:text-white">About Us</a></li>
  <li><a href="#" className="hover:text-white">Our Projects</a></li>
  <li><a href="#" className="hover:text-white">Gallery</a></li>
  <li><a href="#" className="hover:text-white">Shanghai Road, Near Punjab Society, Lahore</a></li>
  <li><a href="tel:+923074465983" className="hover:text-white">+92 307 4465983</a></li>
</ul>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="border-t border-white/20 mt-16 pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-white/70">
              <div className="space-x-8">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>

                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>

                <a href="#" className="hover:text-white">
                  Refund Policy
                </a>
              </div>

              <p className="text-sm">
  Crafted with passion by Home آرٹس Studio.
</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}