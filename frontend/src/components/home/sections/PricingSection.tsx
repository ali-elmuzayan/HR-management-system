import AnimatedSection from "@/components/home/AnimatedSection";
import PricingCard from "@/components/home/PricingCard";

const pricingPlans = [
  {
    name: "Starter",
    description: "For small teams getting started",
    price: "$0",
    period: "/month",
    features: [
      "Up to 10 employees",
      "Basic attendance",
      "Leave management",
      "Email support",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
  },
  {
    name: "Professional",
    description: "For growing organizations",
    price: "$49",
    period: "/month",
    features: [
      "Up to 100 employees",
      "Advanced analytics",
      "Custom branding",
      "Priority support",
      "API access",
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    featured: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    features: [
      "Unlimited employees",
      "SSO & SAML",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} {...plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
