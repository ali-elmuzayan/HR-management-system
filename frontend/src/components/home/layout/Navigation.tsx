import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { Link } from 'react-router';

const Navigation = () => {
  return (
    <motion.nav
    className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center"
            whileHover={{ rotate: 10 }}
          >
            <Building2 className="h-5 w-5 text-primary-foreground" />
          </motion.div>
          <span className="text-xl font-bold">HRMS</span>
        </motion.div>
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Testimonials", "Pricing"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="ghost" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild>
              <Link to="/login">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.nav>  )
};

export default Navigation;