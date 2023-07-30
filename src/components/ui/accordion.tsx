import { ChevronDownIcon } from "@heroicons/react/24/outline";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";

import { cn } from "@lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border-b border-b-gray-200 dark:border-b-gray-700",
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center text-left justify-between py-7 font-medium text-base md:text-lg text-gray-950 dark:text-gray-50 transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="h-4 w-4 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden dark:text-gray-400 text-gray-700 text-sm md:text-base transition-all",
      className,
    )}
    {...props}
  >
    <p className="pt-0 pb-4" style={{ whiteSpace: "pre-line" }}>
      {children}
    </p>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

type AccordionContentFAQProps = React.ForwardRefExoticComponent<
  AccordionPrimitive.AccordionContentProps &
    React.RefAttributes<HTMLDivElement> & { html: string }
>;

const AccordionContentFAQ = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<AccordionContentFAQProps>
>(({ className, html, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden dark:text-gray-400 text-gray-700 text-sm md:text-base transition-all",
      className,
    )}
    {...props}
  >
    <div
      className="pt-0 pb-4 space-y-4"
      style={{ whiteSpace: "pre-line" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContentFAQ";

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionContentFAQ,
};
