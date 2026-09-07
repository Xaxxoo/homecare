import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/ui/animate-in";

export function Introduction() {
  return (
    <section className="py-20 lg:py-32 relative">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Image - asymmetric sizing */}
          <AnimateIn direction="left" className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl lg:rounded-3xl overflow-hidden">
                <Image
                  src="/images/introduction-caregiver-conversation.jpg"
                  alt="A caregiver and senior client enjoying a conversation together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
              {/* Floating card - repositioned */}
              <div className="absolute -bottom-5 right-4 sm:-right-4 bg-white rounded-xl shadow-lg shadow-navy-900/8 border border-navy-100/40 p-4 max-w-[210px]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-[18px] h-[18px] text-cyan-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <p className="text-[13px] font-semibold text-navy-800 leading-snug">
                    Care plans shaped by your needs
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Content - wider column with more room */}
          <AnimateIn direction="right" className="lg:col-span-6 lg:col-start-7">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-wider text-cyan-600 mb-4">
                Who We Are
              </p>
              <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] font-bold text-navy-900 leading-[1.15] tracking-tight">
                Care Built Around the Person, Not Just the Need
              </h2>
              <div className="mt-6 space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Every person has their own routines, preferences, health needs,
                  and goals. Good care starts with understanding the whole person
                  — not just a list of tasks.
                </p>
                <p>
                  From professional nursing support and help with daily
                  activities to companionship and home upkeep, our services work
                  around your life. We meet you where you are and focus on what
                  matters most to you.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/about" variant="outline">
                  Learn About ASD Homecare
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
