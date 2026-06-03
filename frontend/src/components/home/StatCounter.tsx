import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface StatCounterProps {
  value: string;
  label: string;
  index: number;
}

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  // Extract numeric value and suffix
  const numericMatch = value.match(/^([\d,.]+)(.*)$/);
  const numericValue = numericMatch
    ? parseFloat(numericMatch[1].replace(/,/g, ""))
    : 0;
  const suffix = numericMatch ? numericMatch[2] : value;

  const spring = useSpring(0, { duration: 2000 });
  const display = useTransform(spring, (current) => {
    if (value.includes("/")) return value; // For ratings like 4.9/5
    if (numericValue >= 1000) {
      return Math.floor(current).toLocaleString() + suffix;
    }
    return current.toFixed(1) + suffix;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, spring, numericValue]);

  if (value.includes("/")) {
    return <span ref={ref}>{value}</span>;
  }

  return <motion.span ref={ref}>{display}</motion.span>;
}

const StatCounter = ({ value, label, index }: StatCounterProps) => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="text-3xl sm:text-4xl font-bold text-primary">
        <AnimatedNumber value={value} />
      </div>
      <motion.div
        className="text-sm text-muted-foreground mt-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.1 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

export default StatCounter;
