import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { AnimateIn } from "@/components/ui/animate-in";

export function Introduction() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimateIn direction="left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-lg shadow-navy-900/5">
                {/* TODO: Replace with warm image of a caregiver and client sharing a genuine moment */}
                <ImagePlaceholder
                  alt="A caregiver and senior client enjoying a conversation together"
                  aspectRatio="square"
                />
              </div>
              {/* Decorative card overlay */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl shadow-lg shadow-navy-900/10 border border-navy-100/50 p-5 max-w-[220px]">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
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
                <p className="text-sm font-semibold text-navy-800">
                  Individualized care plans shaped by your needs
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Content */}
          <AnimateIn direction="right">
            <div className="max-w-lg">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight tracking-tight">
                Care Built Around the Person, Not Just the Need
              </h2>
              <div className="mt-6 space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Every person has their own routines, preferences, health needs,
                  and goals. At ASD Homecare, we believe that good care starts
                  with understanding the whole person, not just a list of tasks.
                </p>
                <p>
                  Whether you need professional nursing support, help with daily
                  activities, companionship, or assistance keeping your home
                  running smoothly, our services are designed to work around your
                  life. We meet you where you are and focus on what matters most
                  to you.
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
