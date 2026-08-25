"use client";

import { useState } from "react";
import type { ComponentProps, ComponentType, ReactNode } from "react";
import { Building2, Check, Mail, Phone, User } from "lucide-react";

import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const MAX_MESSAGE = 5000;

const benefits: { title: string; description: ReactNode }[] = [
  {
    title: "Expert Insights",
    description: (
      <>
        Benefit from <strong className="font-bold">#1 Software Company in Lviv</strong>
      </>
    ),
  },
  {
    title: "Tech Stack Guidance",
    description: "Share your requirements to best estimate your project",
  },
  {
    title: "Risk Assessment",
    description: "Spot challenges early, saving future costs",
  },
];

function Field({
  label,
  name,
  icon: Icon,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  icon: ComponentType<ComponentProps<"svg">>;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-base leading-6">
        {label} {required && <span aria-hidden>*</span>}
      </label>
      <div className="relative">
        <Icon
          aria-hidden
          className="text-muted-foreground pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2"
        />
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-primary/30 h-12 w-full rounded-lg border pr-4 pl-12 text-base outline-none transition-colors focus-visible:outline-2"
        />
      </div>
    </div>
  );
}

export default function ContactSection() {
  const [message, setMessage] = useState("");

  return (
    // Фрейм із макета: 1440×683, чорний, падінги 120/64, контент 1200×555
    <section className="bg-black py-16 text-white">
      <Container>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 lg:min-h-[555px] lg:flex-row lg:gap-2.5">
          <div className="flex flex-1 flex-col gap-16">
            <div className="flex flex-col gap-4">
              <p className="text-primary text-xl leading-6 font-semibold tracking-[1.12px] uppercase">
                Contact us
              </p>
              <h2 className="text-[clamp(2rem,4.45vw,4rem)] leading-[1.2] font-bold">
                Just One Call
                <br />
                To Understand
                <br />
                Tech
              </h2>
            </div>

            <ul className="flex list-none flex-col gap-6">
              {benefits.map((benefit) => (
                <li key={benefit.title} className="flex items-center gap-4">
                  <span
                    aria-hidden
                    className="bg-primary/25 grid size-12 shrink-0 place-items-center rounded-full"
                  >
                    <span className="bg-primary grid size-8 place-items-center rounded-full">
                      <Check className="size-4 text-white" strokeWidth={3} />
                    </span>
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-primary text-xl leading-6 font-bold">
                      {benefit.title}
                    </span>
                    <span className="text-base leading-6 font-medium">
                      {benefit.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* TODO: підключити відправку — зараз форма без обробника */}
          <form className="bg-background text-foreground flex w-full flex-col gap-4 rounded-xl p-6 lg:w-[587px]">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" icon={User} placeholder="e.g. Andrii Buriy" required />
              <Field label="Email" name="email" type="email" icon={Mail} placeholder="example@email.com" required />
              <Field label="Phone" name="phone" type="tel" icon={Phone} placeholder="+380 (67) 000 000 0" />
              <Field label="Company" name="company" icon={Building2} placeholder="e.g. Insiders" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-base leading-6">
                What do you want to develop? <span aria-hidden>*</span>
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={MAX_MESSAGE}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Enter your message"
                  className="placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-primary/30 h-44 w-full resize-none rounded-lg border p-4 pb-8 text-base outline-none transition-colors focus-visible:outline-2"
                />
                <span className="text-muted-foreground pointer-events-none absolute right-4 bottom-3 text-sm">
                  {message.length}/{MAX_MESSAGE}
                </span>
              </div>
            </div>

            <Button type="submit" variant="brand" size="xl" className="mt-auto self-end">
              Send Message
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
