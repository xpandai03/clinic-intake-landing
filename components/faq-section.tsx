import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "Most clinics are fully operational within 30 minutes. Our onboarding team guides you through the entire process, including EHR integration and staff training. No technical expertise required.",
  },
  {
    question: "Is Clinic Autopilot HIPAA compliant?",
    answer:
      "Absolutely. We're fully HIPAA compliant with SOC 2 Type II certification. We provide a Business Associate Agreement (BAA) and conduct regular security audits. Your patient data is encrypted at rest and in transit.",
  },
  {
    question: "Which EHR systems do you integrate with?",
    answer:
      "We integrate with all major EHR systems including Epic, Cerner, Athenahealth, eClinicalWorks, NextGen, and many more. Custom integrations are available for specialized systems.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer simple per-provider pricing starting at $199/month with no long-term contracts. Volume discounts are available for larger practices. Schedule a demo to get a custom quote.",
  },
  {
    question: "How do automated patient reminders work?",
    answer:
      "Patients receive personalized SMS and email reminders at intervals you define. They can confirm, reschedule, or cancel with one click. No-show rates typically drop 30-40% within the first month.",
  },
  {
    question: "What support do you provide?",
    answer:
      "All plans include 24/7 support via chat, email, and phone. You'll also get a dedicated success manager for onboarding and quarterly business reviews to optimize your workflows.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-32 px-6 pb-80">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif">Frequently asked questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Clinic Autopilot. Have a question not listed? Contact our support team.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 py-0 my-0">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-foreground/30"
            >
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
