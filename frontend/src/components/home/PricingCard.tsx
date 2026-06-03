import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  buttonText: string;
  buttonVariant?: "default" | "outline";
  featured?: boolean;
  index: number;
}

const PricingCard = ({
  name,
  description,
  price,
  period,
  features,
  buttonText,
  buttonVariant = "outline",
  featured = false,
  index,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Card
          className={`h-full relative ${featured ? "border-primary shadow-lg shadow-primary/10" : "border-border/50"}`}
        >
          {featured && (
            <motion.div
              className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Most Popular
            </motion.div>
          )}
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <p className="text-muted-foreground text-sm mb-4">{description}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">{price}</span>
              {period && (
                <span className="text-muted-foreground">{period}</span>
              )}
            </div>
            <ul className="space-y-3 mb-6">
              {features.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-2 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
            <Button variant={buttonVariant} className="w-full">
              {buttonText}
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default PricingCard;
