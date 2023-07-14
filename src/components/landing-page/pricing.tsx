import { CheckIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

import { cn } from "@lib/utils";
import { Button, Tabs, TabsList, TabsTrigger } from "@components/ui";
import { env } from "@lib/env";

const tiers = [
  {
    name: "Bronze",
    id: "tier-bronze",
    href: {
      monthly: env.PUBLIC_BRONZE_MONTHLY,
      quarterly: env.PUBLIC_BRONZE_QUARTERLY,
      annually: env.PUBLIC_BRONZE_ANNUALLY,
    },
    price: {
      monthly: 4995,
      quarterly: 4495,
      annually: 3995,
    },
    description: "The essentials to provide your best work for clients.",
    features: [
      "Unlimited requests",
      "Unlimited brands",
      "Unlimited users",
      "Up to 5 photos in one project",
    ],
    mostPopular: false,
  },
  {
    name: "Silver",
    id: "tier-silver",
    href: {
      monthly: env.PUBLIC_SILVER_MONTHLY,
      quarterly: env.PUBLIC_SILVER_QUARTERLY,
      annually: env.PUBLIC_SILVER_ANNUALLY,
    },
    price: {
      monthly: 5495,
      quarterly: 4995,
      annually: 4495,
    },
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "Unlimited requests",
      "Unlimited brands",
      "Unlimited users",
      "Up to 15 photos in one project",
    ],
    mostPopular: true,
  },
  {
    name: "Gold",
    id: "tier-gold",
    href: {
      monthly: env.PUBLIC_GOLD_MONTHLY,
      quarterly: env.PUBLIC_GOLD_QUARTERLY,
      annually: env.PUBLIC_GOLD_ANNUALLY,
    },
    price: {
      monthly: 6495,
      quarterly: 5995,
      annually: 5495,
    },
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited requests",
      "Unlimited brands",
      "Unlimited users",
      "Up to 30 photos in one project",
    ],
    mostPopular: false,
  },
];

function capitalise(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const billingPeriods = ["monthly", "quarterly", "annually"] as const;

export function PricingSection() {
  const [activePeriod, setActivePeriod] =
    useState<(typeof billingPeriods)[number]>("monthly");

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div id="pricing-text" className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-600 dark:text-amber-500">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-950 dark:text-gray-50 sm:text-5xl">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xl leading-8 text-gray-700 dark:text-gray-300">
            Choose an affordable plan that’s packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
        </div>

        <div id="pricing-periods" className="mt-16 sm:mt-20 md:mt-24">
          {isMounted ? (
            <div className="flex justify-center">
              <Tabs
                value={activePeriod}
                onValueChange={(val) =>
                  setActivePeriod(val as (typeof billingPeriods)[number])
                }
                className=""
              >
                <TabsList>
                  {billingPeriods.map((period) => (
                    <TabsTrigger key={period} value={period}>
                      {capitalise(period)}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          ) : null}

          <div
            id="pricing-tiers"
            className="isolate mx-auto mt-8 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={cn(
                  tier.mostPopular
                    ? "bg-gray-100 ring-2 ring-amber-600 dark:bg-gray-900 dark:ring-amber-500"
                    : "ring-1 ring-black/10 dark:ring-white/10",
                  "rounded-3xl p-8 xl:p-10",
                )}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-950 dark:text-gray-50">
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-amber-600 px-2.5 py-1 text-xs font-semibold leading-5 text-gray-50 dark:bg-amber-500">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-700 dark:text-gray-300">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-gray-950 dark:text-gray-50">
                    {tier.price[activePeriod].toLocaleString("en-GB", {
                      style: "currency",
                      currency: "GBP",
                      maximumFractionDigits: 0,
                    })}
                  </span>
                  <span className="text-sm font-medium leading-6 text-gray-700 dark:text-gray-300">
                    /mo
                  </span>
                </p>
                <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                  Billed{" "}
                  {activePeriod === "monthly"
                    ? "monthly - cancel or pause anytime"
                    : `${activePeriod} (save ${(
                        tier.price.monthly - tier.price[activePeriod]
                      ).toLocaleString("en-GB", {
                        style: "currency",
                        currency: "GBP",
                        maximumFractionDigits: 0,
                      })} per month!)`}
                </span>
                <Button
                  as="a"
                  href={tier.href[activePeriod]}
                  aria-label={`Purchase the ${tier.name} plan for ${tier.price[activePeriod]} per month, billed ${activePeriod}`}
                  variant={tier.mostPopular ? "default" : "subtle"}
                  size="lg"
                  className={cn(
                    tier.mostPopular
                      ? "bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-700"
                      : "bg-gray-200/50 hover:bg-gray-200",
                    "mt-6 w-full",
                  )}
                >
                  Buy plan
                </Button>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-700 dark:text-gray-300 xl:mt-10"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-gray-950 dark:text-gray-50"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                  {activePeriod === "monthly" ? (
                    <li className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-gray-950 dark:text-gray-50"
                        aria-hidden="true"
                      />
                      Pause or cancel anytime
                    </li>
                  ) : null}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
