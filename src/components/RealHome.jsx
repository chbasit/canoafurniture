import realHome from "../assets/images/real-homes-desktop.webp";
import { ArrowRight } from "lucide-react";

export default function RealHomes() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="relative h-[60vh] sm:h-[70vh] lg:h-[90vh]">
        <img
          src={realHome}
          alt="Real Homes"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 lg:px-4 flex items-end pb-12 md:pb-16 lg:pb-20">
          <div>
            {/* Button */}
            <a
              href="#"
              className="group inline-flex items-center gap-4 border border-white text-white px-6 py-4 hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="font-fustat text-base font-medium">
                Explore Real Homes
              </span>

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Heading */}
            <h2 className="mt-8 font-fustat text-white text-3xl md:text-5xl  font-semibold max-w-5xl">
              Real Homes.
              <br className="sm:hidden" />
              <span className="sm:ml-3">Real Inspiration.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}