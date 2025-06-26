import { Check } from "lucide-react";
import GradientText from "@/components/GradientText";

type FeatureSection = {
  title: string;
  features: string[];
};

type SubscriptionPlan = {
  name: string;
  description?: string;
  price: string;
  priceAnnotation?: string; // E.g. "per user per month"
  features: FeatureSection[];
};

const individualPlanFeatures: FeatureSection[] = [
  {
    title: "Features",
    features: [
      "50 cloud functions",
      "1 user",
      "Usage limits are bound to the AWS fee tier",
      "24 hour log retention",
      "1 hour failed topic retention",
    ],
  },
  {
    title: "Additional Features",
    features: [
      "Unlimited cloud environments",
      "Unlimited concurrent builds",
      "Local dev environment",
      "Custom static website domains",
      "Access to logs and metrics in managed AWS account",
      "Community support on Discord ",
    ],
  },
];

const teamPlanFeatures: FeatureSection[] = [
  {
    title: "Features",
    features: [
      "1000 functions",
      "Up to 3 users",
      "Unlimited AWS usage (pre-paid AWS bill)",
      "7 day log retention",
      "48 hour failed topic retention",
      "Managed organization",
    ],
  },
  {
    title: "Additional Features",
    features: [
      "Everything in the Free plan",
      "14 days onboarding support",
      "CI keys (coming soon)",
    ],
  },
];

const proPlanFeatures: FeatureSection[] = [
  {
    title: "Features",
    features: [
      "Unlimited functions",
      "Unlimited users",
      "Unlimited AWS usage (pre-paid AWS bill)",
      "30 day log retention",
      "14 day failed topic retention",
      "Managed organization",
    ],
  },
  {
    title: "Additional Features",
    features: [
      "Everything in the Team plan",
      "Deploy to your own AWS account (coming soon)",
    ],
  },
];

const plans: SubscriptionPlan[] = [
  {
    name: "Individual Plan",
    description: "This is a description for the Individual Plan.",
    price: "Free",
    features: individualPlanFeatures,
  },
  {
    name: "Team Plan",
    description: "This is a description for the Team Plan.",
    price: "$9",
    priceAnnotation: "/ user / month",
    features: teamPlanFeatures,
  },
  {
    name: "Pro Plan",
    description: "This is a description for the Pro Plan.",
    price: "$29",
    priceAnnotation: "/ user / month",
    features: proPlanFeatures,
  },
];

export default function Pricing() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-16">
      {/* Header Section */}
      <div>
        <h1>
          <GradientText text="PRICING" />
        </h1>
        <div className="flex flex-col gap-4">
          <h2>
            Less is all about making your experience as simple as possible.
          </h2>
          <h2>Pricing is no different.</h2>
        </div>
      </div>

      {/* Plans Section */}
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          // Card for each plan
          <div key={`plan-${index}`} className="flex flex-col gap-8 p-4 glass">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-normal text-center">
                <GradientText text={plan.name} />
              </h1>
              <h2 className="text-lg font-light text-center">
                {plan.price}
                {plan.priceAnnotation && ` ${plan.priceAnnotation}`}
              </h2>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between grow">
              {/* Feature groups */}
              <ul className="flex flex-col gap-8 text-left text-md">
                {plan.features.map((featureSection, sectionIndex) => (
                  <li key={sectionIndex}>
                    <h1 className="text-lg font-medium">
                      {featureSection.title}
                    </h1>
                    <ul>
                      {featureSection.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-chuva-green mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
