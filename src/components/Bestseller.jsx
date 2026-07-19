import bestseller1 from "../assets/images/bestseller1.jpg";
import bestseller2 from "../assets/images/bestseller2.webp";
import bestseller3 from "../assets/images/bestseller3.webp";
import bestseller4 from "../assets/images/bestseller4.webp";

const products = [
  {
    image: bestseller1,
    title: "Up Your Home Value.",
    price: "FROM 31,945",
  },
  {
    image: bestseller2,
    title: "Made in Pakistan.",
    price: "FROM 21,950",
  },
  {
    image: bestseller3,
    title: "Luxury Walk-In Closets.",
    price: "FROM 9,2500",
  },
  {
    image: bestseller4,
    title: "Modern Living Spaces.",
    price: "FROM 7,1050",
  },
];

export default function BestSeller() {
  return (
    <section className="py-12 md:py-20 bg-[#F4F4F4]">
      <div className="max-w-8xl mx-auto px-5 lg:px-8">
        {/* Heading */}
        <h2 className="font-fustat text-2xl md:text-5xl font-regular text-[#232323] mb-10">
          Best Sellers
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-12">
          {products.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[260px] sm:h-[360px] lg:h-[430px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="text-center mt-4">
                <h3 className="font-fustat text-xl md:text-[26px] font-normal text-[#1f1f1f]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm tracking-[3px] uppercase text-[#3a3a3a]">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}