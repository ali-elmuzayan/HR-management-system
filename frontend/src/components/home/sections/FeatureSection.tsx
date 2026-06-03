import AnimatedSection from "../AnimatedSection";
import FeatureCard from "@/components/home/FeatureCard";
import {
  Users,
  Calendar,
  Clock,
  Building2,
  Shield,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Employee Management",
    description:
      "Centralize employee data, documents, and profiles in one secure platform.",
  },
  {
    icon: Calendar,
    title: "Leave Management",
    description:
      "Streamlined leave requests, approvals, and calendar visibility for teams.",
  },
  {
    icon: Clock,
    title: "Attendance Tracking",
    description:
      "Real-time attendance monitoring with automated reports and insights.",
  },
  {
    icon: Building2,
    title: "Multi-Tenant Architecture",
    description:
      "Isolated data for each organization with custom branding support.",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description: "Granular permissions for admins, HR managers, and employees.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description:
      "Actionable insights with real-time dashboards and exportable reports.",
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need to Manage HR
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for modern organizations of any size.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
