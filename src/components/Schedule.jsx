import { CalendarDays } from "lucide-react";

export default function Schedule() {
  return (
    <section className="bg-[#E6EAEF] py-20 lg:py-12">
      <div className="max-w-6xl mx-auto px-5 text-center">
        {/* Heading */}
        <h2 className="font-fustat text-2xl md:text-4xl  font-light italic text-[#2C2C2C]">
          Book your free design consultation.
        </h2>

        

        {/* Button */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://www.instagram.com/canoafurniture_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-[#24344F] hover:bg-[#1B2A42] transition-all duration-300 flex items-center">
              {/* Icon */}
              <div className="px-6 md:px-8 py-4 border-r border-white/20 flex items-center justify-center">
                <div className="w-10 h-10 border border-white rotate-45 flex items-center justify-center">
                  <CalendarDays
                    size={18}
                    className="-rotate-45 text-white"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="px-6 md:px-10 py-3">
                <span className="font-fustat text-base md:text-lg font-regular tracking-wide uppercase text-white">
                  Schedule an Appointment
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}