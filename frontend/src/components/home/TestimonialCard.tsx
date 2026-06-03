import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  index: number;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  avatar,
  index,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
        <Card className="border-border/50 h-full">
          <CardContent className="p-6">
            <motion.div
              className="flex gap-1 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 + i * 0.05 }}
                >
                  <Star className="h-4 w-4 fill-primary text-primary" />
                </motion.div>
              ))}
            </motion.div>
            <p className="text-foreground mb-6">"{quote}"</p>
            <div className="flex items-center gap-3">
              <motion.div
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary"
                whileHover={{ scale: 1.1 }}
              >
                {avatar}
              </motion.div>
              <div>
                <div className="font-medium">{author}</div>
                <div className="text-sm text-muted-foreground">
                  {role}, {company}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;
