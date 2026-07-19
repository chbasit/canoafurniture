import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you offer custom furniture designs?",
    answer:
      "Yes. Every project can be customized to your preferred dimensions, materials, colors, and finishes to perfectly complement your space.",
  },
  {
    question: "How long does production and delivery take?",
    answer:
      "Production generally takes 3–6 weeks depending on the design. We provide nationwide delivery across Pakistan with careful installation.",
  },
  {
    question: "What materials do you use?",
    answer:
      "We use premium hardwood, engineered wood, imported fabrics, natural stone, tempered glass, and high-quality hardware for lasting durability.",
  },
  {
    question: "Do you provide interior design consultation?",
    answer:
      "Absolutely. Our design experts help you choose furniture, layouts, colors, and finishes to create a cohesive luxury interior.",
  },
  {
    question: "Can I visit your showroom?",
    answer:
      "Yes. You're welcome to visit our showroom to experience our collections, materials, and craftsmanship in person.",
  },
  {
    question: "Do you offer warranty on your products?",
    answer:
      "Yes. Our furniture is backed by a warranty covering manufacturing defects, ensuring long-term confidence in your purchase.",
  },
];

export default function Faqs() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-8 lg:pb-20 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Heading */}

        <div className="text-center mb-16">
          

          <h2 className="font-fustat text-3xl md:text-5xl font-regular mt-4 text-[#222]">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-gray-700 text-lg max-w-2xl mx-auto">
            Everything you need to know about our furniture, customization,
            delivery, and services.
          </p>
        </div>

        {/* FAQs */}

        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#F4F4F4] border transition-all duration-300 ${
                active === index
                  ? "border-[#B68D40] shadow-xl"
                  : "border-gray-200 hover:border-[#B68D40]"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left p-7"
              >
                <h3 className="font-fustat text-lg font-medium text-[#222] pr-6">
                  {faq.question}
                </h3>

                <div className="flex-shrink-0">
                  {active === index ? (
                    <Minus className="text-[#B68D40]" size={24} />
                  ) : (
                    <Plus className="text-[#222]" size={24} />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  active === index
                    ? "max-h-60"
                    : "max-h-0"
                }`}
              >
                <div className="px-7 pb-7 border-t border-gray-100">
                  <p className="pt-5 text-gray-600 leading-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}