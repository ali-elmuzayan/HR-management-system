import AnimatedSection from "@/components/home/AnimatedSection";
import { testimonials } from '@/mock/home';
import TestimonialCard from "@/components/home/TestimonialCard";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Trusted by HR Teams Worldwide
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See what our customers have to say about their experience.
        </p>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.author}
            {...testimonial}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>  )
}

export default TestimonialsSection