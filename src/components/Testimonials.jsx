import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Ahmed Raza",
    city: "Lahore",
    review:
      "The quality exceeded our expectations. Every detail feels luxurious and the craftsmanship is outstanding. Highly recommended.",
  },
  {
    name: "Sarah Khan",
    city: "Karachi",
    review:
      "From consultation to delivery, the experience was seamless. The furniture completely transformed our living room.",
  },
  {
    name: "Usman Ali",
    city: "Islamabad",
    review:
      "Beautiful modern furniture with exceptional finishing. The customer service was equally impressive.",
  },
  {
    name: "Ayesha Noor",
    city: "Multan",
    review:
      "Premium quality, elegant design, and timely delivery. Canoa Furniture truly understands luxury interiors.",
  },
  {
    name: "Bilal Hassan",
    city: "Faisalabad",
    review:
      "Every visitor compliments our furniture. The attention to detail is simply amazing.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-8 bg-[#F4F4F4]">
      <div className="max-w-8xl mx-auto px-5 lg:px-8">
        {/* Header */}

        <div className="flex justify-between items-end mb-8">
          <div>
             

            <h2 className="font-fustat text-3xl md:text-5xl font-regular mt-3">
              What Our Clients Say
            </h2>
          </div>

          <div className="hidden md:flex gap-4">
            <button className="testimonial-prev w-12 h-12 rounded-full border hover:bg-black hover:text-white transition flex items-center justify-center">
              <ChevronLeft />
            </button>

            <button className="testimonial-next w-12 h-12 rounded-full border hover:bg-black hover:text-white transition flex items-center justify-center">
              <ChevronRight />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          className="!pb-2"
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
             <div className="bg-white p-6 md:p-8 lg:p-10 min-h-[340px] md:min-h-[380px] w-full border border-gray-200 transition-all duration-500 hover:-translate-y-2 flex flex-col rounded-lg">
  <Quote
    size={38}
    className="text-gray-300 mb-5 shrink-0"
  />

  <div className="flex gap-1 mb-5 shrink-0">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={18}
        className="fill-yellow-400 text-yellow-400"
      />
    ))}
  </div>

  <p className="text-gray-700 leading-7 flex-1">
    "{item.review}"
  </p>

  <div className="pt-5  er-t mt-5 shrink-0">
    <h4 className="font-semibold text-lg">
      {item.name}
    </h4>

    <p className="text-gray-500">
      {item.city}, Pakistan
    </p>
  </div>
</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}