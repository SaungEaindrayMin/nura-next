import { useRef } from "react";
import { motion } from "framer-motion";

const ServiceItem = ({ title, description, details }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-24 border-b border-white/20 last:border-0">
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold uppercase text-[#0FFFFF] tracking-wide"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-xl"
        >
          {description}
        </motion.p>
      </div>

      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-[#0FFFFF] text-lg font-medium uppercase tracking-widest mb-8"
        >
          Service Detail
        </motion.h3>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
          className="space-y-4"
        >
          {details.map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-xl md:text-2xl text-white font-light cursor-pointer hover:text-[#0FFFFF] transition-colors duration-300 flex items-center group"
            >
              <span className="w-0 overflow-hidden group-hover:w-6 transition-all duration-300 opacity-0 group-hover:opacity-100 text-[#0FFFFF] mr-0 group-hover:mr-2">
                →
              </span>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

const ServiceList = () => {
  const services = [
    {
      title: "Branding",
      description:
        "We uncover insights and design products through a process of exploration to achieve user-centric products.",
      details: [
        "We help build digital products and solutions that enhance consumer's lives, and help them navigate better, help communicate with each other and solve their problems faster",
      ],
    },
    {
      title: "Discovery",
      description:
        "Figuring out who you are and what you're really about. We help come up with a branding creative that tells your story, get the word out to the people who are looking for you.",
      details: [
        "Findings & Opportunities",
        "Brand Strategy",
        "Identity Development",
        "Digital Collateral",
        "Brand Guidelines",
      ],
    },
    {
      title: "Digital Experiences",
      description:
        "We help build digital products and solutions that enhance consumer's lives, and help them navigate better, help communicate with each other and solve their problems faster.",
      details: [
        "Marketing Websites",
        "Digital Products",
        "Mobile Apps",
        "Design Systems",
      ],
    },
    {
      title: "Engineering",
      description:
        "We build products based upon modern technologies and lean approaches.",
      details: [
        "Frontend Development",
        "Website Development",
        "Product Development",
        "Cloud Engineering & Dev Ops",
      ],
    },
  ];

  return (
    <section className="relative z-10 font-grotesk px-6 md:px-12 py-12">
      <div className="container-custom mx-auto">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
