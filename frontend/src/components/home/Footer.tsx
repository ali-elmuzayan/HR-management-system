import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center"
                whileHover={{ rotate: 10 }}
              >
                <Building2 className="h-4 w-4 text-primary-foreground" />
              </motion.div>
              <span className="text-lg font-bold">HRMS</span>
            </motion.div>
            <p className="text-sm text-muted-foreground">
              Modern HR management for the modern workplace.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Features", "Pricing", "Integrations", "API"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={
                      item === "Features" || item === "Pricing"
                        ? `#${item.toLowerCase()}`
                        : "#"
                    }
                    className="hover:text-foreground"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="hover:text-foreground">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Privacy", "Terms", "Security"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="hover:text-foreground">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} HRMS. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
