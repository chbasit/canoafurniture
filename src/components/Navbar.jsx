import { useEffect, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Search,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Closets",
    "Furniture",
    "Showroom",
    "Explore",
  ];

  return (
    <>
     <div className="h-12 bg-[#2f2f32] text-white flex items-center justify-center text-xs md:text-sm relative z-[60]">
  Pakistan's top rated closet & furniture brand.
</div>

      {/* Navbar */}

      <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-white shadow-lg"
      : "bg-transparent"
  }`}
  style={{
    top: scrolled ? 0 : "48px", // announcement bar height
  }}
>
        <div className="max-w-[1600px] mx-auto px-5 lg:px-10">
          <div className="h-[72px] flex items-center justify-between">
            {/* Left */}

            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <button
                  key={item}
                  className={`flex items-center gap-1 transition ${
                    scrolled
                      ? "text-black"
                      : "text-white"
                  } hover:text-[#b5875c]`}
                >
                  {item}

                  <ChevronDown size={16} />
                </button>
              ))}
            </nav>

            {/* Mobile Menu */}

            <button
              onClick={() => setMobileMenu(true)}
              className={`lg:hidden ${
                scrolled
                  ? "text-black"
                  : "text-white"
              }`}
            >
              <Menu size={28} />
            </button>

            {/* Center Logo */}

            <div
              className={`absolute left-1/2 -translate-x-1/2 text-4xl tracking-[8px] font-light transition ${
                scrolled
                  ? "text-black"
                  : "text-white"
              }`}
            >
               CANOA
            </div>

            {/* Right */}

            <div className="hidden lg:flex items-center gap-5">
              <button className="bg-[#4F301D] hover:bg-[#3d2212]  cursor-pointer transition text-white px-6 py-3 font-medium">
                Book a Free Consultation
              </button>

              <Search
                className={`${
                  scrolled
                    ? "text-black"
                    : "text-white"
                }`}
                size={24}
              />
            </div>

            {/* Mobile Search */}

            <Search
              className={`lg:hidden ${
                scrolled
                  ? "text-black"
                  : "text-white"
              }`}
              size={22}
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white z-[100] transition-all duration-500 ${
          mobileMenu
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-20 border-b">
          <h2 className="tracking-[6px] text-3xl">
            CANOA
          </h2>

          <button onClick={() => setMobileMenu(false)}>
            <X size={30} />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              className="flex justify-between items-center text-lg border-b pb-4"
            >
              {item}

              <ChevronDown size={18} />
            </button>
          ))}

          <button className="mt-6 bg-[#c6842d] text-white py-4">
            Book a Free Consultation
          </button>
        </div>
      </div>
    </>
  );
}