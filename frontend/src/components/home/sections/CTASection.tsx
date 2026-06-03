import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { Globe } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedSection>
        <motion.div
          className="inline-flex items-center gap-2 mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Globe className="h-5 w-5 text-primary" />
          </motion.div>
          <span className="text-sm text-muted-foreground">
            Trusted by 500+ organizations worldwide
          </span>
        </motion.div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Transform Your HR Operations?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of companies using HRMS to streamline their human
          resources management.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size="lg" className="h-12 px-8 text-base" asChild>
            <Link to="/login">
              Get Started Today
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Link>
          </Button>
        </motion.div>
      </AnimatedSection>
    </div>
  </section>  )
}

export default CTASection