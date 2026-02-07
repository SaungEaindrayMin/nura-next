import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../../ui/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    message: "",
  });

  const MotionButton = motion(Button);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 min-h-screen  bg-white font-grotesk">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-semibold text-accent-blue tracking-wider">
              We&apos;re ready if you
              <br />
              are. Let&apos;s get to it
            </h2>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-300 
              focus:border-accent-blue outline-none transition-colors
              text-gray-800 placeholder-gray-500"
            />

            <div className="relative">
              <input
                type="text"
                name="business"
                value={formData.business}
                onChange={handleChange}
                placeholder="Business (OPTIONAL)"
                className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-300 
                focus:border-accent-blue outline-none transition-colors
                text-gray-800 placeholder-gray-500"
              />

              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
              className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-300 
              focus:border-accent-blue outline-none transition-colors
              text-gray-800 placeholder-gray-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-300 
              focus:border-accent-blue outline-none transition-colors
              text-gray-800 placeholder-gray-500"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
              rows={1}
              className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-300 
              focus:border-accent-blue outline-none transition-colors resize-none
              text-gray-800 placeholder-gray-500"
            />

            {/* Submit */}
            <div className="flex justify-end pt-6">
              <MotionButton
                type="submit"
                variant="third"
                size="sm"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                icon={<ArrowRight size={20} />}
              >
                SEND
              </MotionButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
