import sliderImage from "../assets/images/1.webp";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={sliderImage}
        alt="Furniture"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Center Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h1 className="font-fustat text-white text-5xl md:text-7xl lg:text-[88px] font-semibold leading-tight">
            Crafted For
            <br />
            Modern Living
          </h1>

          <p className="mt-6 text-white/90 text-lg md:text-2xl font-semibold max-w-2xl mx-auto">
  Discover premium furniture, elegant interior solutions, and custom Corian
  designs crafted to transform your living and commercial spaces with style,
  functionality, and lasting quality.
</p>

          <button className="mt-10 bg-white text-black px-8 py-4 font-medium hover:bg-neutral-200 transition">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
}