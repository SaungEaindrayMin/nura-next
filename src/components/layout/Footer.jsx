import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { SERVICES, SOCIAL_LINKS } from "../../utils/constants";
import { Button } from "../ui/Button";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  // ✅ Only CASES uses dark footer
  const isCasesPage = location.pathname === "/cases";

  const socialIcons = [
    { Icon: Facebook, link: SOCIAL_LINKS.FACEBOOK },
    { Icon: Instagram, link: SOCIAL_LINKS.INSTAGRAM },
    { Icon: Linkedin, link: SOCIAL_LINKS.LINKEDIN },
    { Icon: Youtube, link: SOCIAL_LINKS.YOUTUBE },
  ];

  return (
    <footer
      className={`py-36 font-grotesk transition-colors duration-300 ${
        isCasesPage ? "bg-primary text-white" : "bg-white text-accent-blue"
      }`}
    >
      <div className="container-custom">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl lg:text-6xl font-bold tracking-wider mb-8">
              WE ARE YOUR PARTNER FOR
              <br />
              INNOVATION & GROWTH
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              variant={isCasesPage ? "secondary" : "third"}
              size="sm"
              icon={<ArrowRight size={20} />}
            >
              GET IN TOUCH
            </Button>
          </motion.div>
        </div>

        {/* LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium text-xl tracking-wide mb-4">
              WE ONENEX
            </h3>
            <ul
              className={`space-y-2 font-medium text-lg ${
                isCasesPage ? "text-white" : "text-black"
              }`}
            >
              <li>
                <a href="/cases" className="hover:underline">
                  Cases
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-medium text-xl tracking-wide mb-4">WE OFFER</h3>
            <ul
              className={`space-y-2 font-medium text-lg ${
                isCasesPage ? "text-white" : "text-black"
              }`}
            >
              {SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-medium text-xl tracking-wide mb-4">
              FOLLOW US
            </h3>
            <div className="flex gap-2">
              {socialIcons.map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isCasesPage
                      ? "bg-white text-primary hover:bg-white/80"
                      : "bg-accent-blue text-white hover:bg-accent-blue/80"
                  }`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div
          className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${
            isCasesPage ? "border-white" : "border-accent-blue"
          }`}
        >
          <p className="text-4xl font-medium">onenex</p>
          <p className="text-xs">
            ONENEX © COPYRIGHT 2026. ALL RIGHT RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
