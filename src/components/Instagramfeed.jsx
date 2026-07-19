import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaInstagram } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import video1 from "../assets/video/1.mp4";
import video2 from "../assets/video/2.mp4";
import video3 from "../assets/video/3.mp4";
import video4 from "../assets/video/4.mp4";
import video5 from "../assets/video/5.mp4";
import video6 from "../assets/video/6.mp4";

const videos = [
  video1,
  video2,
  video3,
  video4,
  video5,
  video6,
];

export default function InstagramFeed() {
  const videoRefs = useRef([]);

  const playVideo = (index) => {
    const video = videoRefs.current[index];

    if (!video) return;

    video.currentTime = 0;
    video.play().catch(() => {});
  };

  const pauseVideo = (index) => {
    const video = videoRefs.current[index];

    if (!video) return;

    video.pause();
    video.currentTime = 0;
  };

  return (
    <section className="py-16 bg-[#F4F4F4] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 lg:px-8">
        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
          <div>
            <h2 className="font-fustat text-3xl md:text-5xl font-regular text-[#222]">
              Shop the Feed
            </h2>
          </div>

          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full border-2 border-pink-500 flex items-center justify-center">
              <FaInstagram className="text-3xl text-[#222]" />
            </div>

            <div>
              <p className="text-lg font-medium">@canoafurniture</p>

              <a
                href="https://www.instagram.com/canoafurniture_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-3 border border-gray-800 px-6 py-3 hover:bg-black hover:text-white transition-all duration-300"
              >
                <FaInstagram />

                Follow
              </a>
            </div>
          </div>
        </div>

        {/* Slider */}

        <div className="relative">
          <button className="feed-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition">
            <ChevronLeft />
          </button>

          <button className="feed-next absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition">
            <ChevronRight />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".feed-prev",
              nextEl: ".feed-next",
            }}
            spaceBetween={25}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <div
                  onMouseEnter={() => playVideo(index)}
                  onMouseLeave={() => pauseVideo(index)}
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                >
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-110"
                  >
                    <source src={video} type="video/mp4" />
                  </video>

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition duration-300" />

                  {/* Instagram Icon */}

                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                    <FaInstagram className="text-black text-lg" />
                  </div>

                  {/* Bottom */}

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-sm">
                          Canoa Furniture
                        </h4>

                        <p className="text-xs text-gray-500">
                          @canoafurniture
                        </p>
                      </div>

                      <FaInstagram className="text-xl" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}