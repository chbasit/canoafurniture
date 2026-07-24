import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does Home آرٹس Studio provide?",
    answer:
      "We specialize in custom furniture, interior designing, Corian work, wardrobes, TV units, kitchens, office interiors, and complete space transformations.",
  },
  {
    question: "Do you create custom furniture and interior designs?",
    answer:
      "Yes. Every project is designed according to your space, style, and requirements, with customized sizes, materials, colors, and finishes.",
  },
  {
    question: "What is Corian, and do you install it?",
    answer:
      "Yes. We provide premium Corian countertops, reception desks, vanity tops, wall cladding, and other custom Corian installations for residential and commercial projects.",
  },
  {
    question: "How long does a project take to complete?",
    answer:
      "Project timelines depend on the scope of work. Most furniture and interior projects are completed within 2–6 weeks after design approval.",
  },
  {
    question: "Can I visit your showroom?",
    answer:
      "Absolutely. Visit our showroom on Shanghai Road, Near Punjab Society, Lahore, to explore our furniture collections, interior solutions, and Corian designs.",
  },
  {
    question: "Do you offer installation and after-sales support?",
    answer:
      "Yes. Our experienced team provides professional installation along with after-sales support to ensure complete customer satisfaction.",
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