import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui";

type FaqListProps = {
  faqs: { question: string; answer: string }[];
};

export function FaqList({ faqs }: FaqListProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="divide-y dark:divide-white/10 divide-black/10">
        <dl className="mt-10 space-y-8 divide-y divide-black/10 dark:divide-white/10">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <dt className="text-base font-semibold leading-7 text-gray-950 dark:text-gray-50 lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-700 dark:text-gray-400">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  return (
    <Accordion type="single" collapsible>
      {faqs.map((faq) => (
        <AccordionItem key={faq.question} value={faq.question}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
