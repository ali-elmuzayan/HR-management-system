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

const testimonials = [
  {
    quote:
      "HRMS transformed how we manage our workforce. The automation saved us 20+ hours per week.",
    author: "Sarah Chen",
    role: "HR Director",
    company: "TechCorp Inc.",
    avatar: "SC",
  },
  {
    quote:
      "The multi-tenant setup was perfect for our franchise model. Each location has their own space.",
    author: "Michael Torres",
    role: "Operations Manager",
    company: "Global Retail Co.",
    avatar: "MT",
  },
  {
    quote:
      "Finally, an HR system that's actually intuitive. Our team adopted it within days.",
    author: "Emily Watson",
    role: "CEO",
    company: "StartupHub",
    avatar: "EW",
  },
];

const stats = [
  { value: "10,000+", label: "Active Users" },
  { value: "500+", label: "Organizations" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9/5", label: "User Rating" },
];

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

export { features, testimonials, stats, pricingPlans };
