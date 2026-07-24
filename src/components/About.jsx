import about1 from "../assets/images/about.webp";
import about2 from "../assets/images/17.webp";
import about3 from "../assets/images/12.jpeg";

const items = [
  {
    image: about1,
    title: "VISION",
  },
  {
    image: about2,
    title: "CRAFTSMANSHIP",
  },
  {
    image: about3,
    title: "MATERIALS",
  },
];

export default function About() {
  return (
    <section className="bg-[#232323] py-18 lg:py-20">
      <div className="max-w-[1600px] mx-auto px-5 lg:px-8">
        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-fustat text-white text-2xl md:text-5xl font-medium">
            About Home Art Studio 
          </h2>

          <p className="mt-5 text-sm md:text-base  uppercase text-white/70">
            TIMELESS DESIGN • MODERN LIVING • EXCEPTIONAL CRAFTSMANSHIP
          </p>

         
           <p className="text-white text-md font-regular leading-8 mt-4">
            From bespoke sofas and elegant dining collections to custom storage
            solutions and luxury bedroom furniture, Home Art Studio is dedicated
            to transforming living spaces with timeless elegance. Our commitment
            to quality, innovation, and personalized design ensures every piece
            becomes a lasting part of your home and lifestyle.
          </p>
        </div>

        {/* Images */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {items.map((item, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[620px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-8 text-center text-white text-lg  uppercase font-regular">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Text */}

        <div className="max-w-5xl mx-auto text-center mt-16">
           <p className="mt-10 text-lg md:text-2xl font-semibold text-white">
            Home Art Studio ,
            we create thoughtfully designed furniture that balances modern
            aesthetics with everyday comfort. Every collection is developed with
            careful attention to proportion, premium materials, and skilled
            craftsmanship, delivering interiors that feel refined, welcoming,
            and built to last for generations.
          </p>
        </div>
      </div>
    </section>
  );
}