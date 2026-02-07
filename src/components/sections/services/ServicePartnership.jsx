import { useRef } from "react";
import { motion } from "framer-motion";

const ServicePartnership = () => {
  const containerRef = useRef(null);

  return (
    <motion.section
      ref={containerRef}
      className="relative py-24 px-6 md:px-12 font-grotesk overflow-hidden"
    >
      <div className="container-custom mx-auto space-y-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium uppercase leading-tight tracking-wide text-black"
          >
            We are with you for <br />
            the long haul
          </motion.h2>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-lg text-black font-medium leading-relaxed"
            >
              As you scale, launch your products, and go into new markets, we
              continue to support your business and get people excited all over
              again.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-3xl md:text-5xl font-semibold text-primary mb-2">
                2.3 YEARS
              </h3>
              <p className="text-lg md:text-lg text-black font-medium leading-relaxed">
                Industry average length of client – onenex relationship
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium uppercase leading-tight tracking-wide text-black"
          >
            We know what it takes <br />
            to launch
          </motion.h2>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-lg text-black font-medium leading-relaxed"
            >
              <p>We have launched hundreds of products across categories.</p>
              <p>We have seen it all, done it all.</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-4xl md:text-5xl font-semibold text-primary mb-2">
                  30
                </h3>
                <p className="text-lg md:text-lg text-black font-medium leading-relaxed">
                  Industries Sector
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-4xl md:text-5xl font-semibold text-primary mb-2">
                  150+
                </h3>
                <p className="text-lg md:text-lg text-black font-medium leading-relaxed">
                  Product Launch
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center  pt-16"
        >
          <h2 className="text-3xl md:text-5xl font-medium uppercase leading-tight text-white mb-12">
            We're an extension of your team. One goal, one team and one big
            product.
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-4xl md:text-6xl font-bold text-[#00CFE7] mb-4">
              70+
            </h3>
            <p className="text-white text-xl font-medium  ">Team Members</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicePartnership;
