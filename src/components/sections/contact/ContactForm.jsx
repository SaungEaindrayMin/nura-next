import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../../ui/Button";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const MotionButton = motion(Button);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          business: formData.business,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      setFormData({
        name: "",
        business: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-20 min-h-screen bg-white font-grotesk">
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
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
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
              required
              className="w-full px-0 py-3 bg-transparent border-b-2 border-gray-300
              focus:border-accent-blue outline-none transition-colors resize-none
              text-gray-800 placeholder-gray-500"
            />

            <div className="flex flex-col items-end pt-6 gap-3">
              <MotionButton
                type="submit"
                variant="third"
                size="sm"
                disabled={isSending}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                icon={<ArrowRight size={20} />}
              >
                {isSending ? "SENDING..." : "SEND"}
              </MotionButton>

              {status === "success" && (
                <p className="text-sm text-green-600">
                  Message sent successfully.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-600">
                  Failed to send message. Please try again.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
