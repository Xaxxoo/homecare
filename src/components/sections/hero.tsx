import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MapPin, Heart, Home, Shield } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Personalized Support" },
  { icon: Heart, label: "Compassionate Care" },
  { icon: Home, label: "Health & Home Services" },
  { icon: MapPin, label: "Baltimore, Maryland" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 via-white to-white">
      {/* Decorative background shapes - organic, not generic circles */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan-100/30 rounded-[40%_60%_70%_30%/50%_30%_70%_50%] blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-navy-100/15 rounded-[60%_40%_30%_70%/50%_60%_40%_50%] blur-3xl -translate-x-1/3 pointer-events-none"
        aria-hidden="true"
      />
      {/* Subtle dot pattern for texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--color-navy-600) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <Container className="relative pt-32 pb-6 sm:pt-36 md:pt-40 lg:pt-44 lg:pb-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Content - 7 columns for more breathing room */}
          <div className="lg:col-span-7 max-w-2xl">
            <p className="inline-flex items-center gap-2 text-[13px] font-semibold text-cyan-700 bg-cyan-50/80 border border-cyan-200/50 px-4 py-1.5 rounded-full mb-8">
              <Heart className="w-3.5 h-3.5" aria-hidden="true" />
              Compassionate Care, Right at Home
            </p>
            <h1 className="text-[2.25rem] sm:text-[2.75rem] md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-extrabold text-navy-900 leading-[1.08] tracking-tight">
              Helping You Live{" "}
              <br className="hidden sm:block" />
              Safely, Comfortably{" "}
              <br className="hidden lg:block" />
              &amp; Independently{" "}
              <span className="text-cyan-600">at Home</span>
            </h1>
            <p className="mt-6 text-[17px] sm:text-lg text-navy-600/90 leading-relaxed max-w-xl">
              ASD Homecare provides compassionate healthcare and everyday support
              for individuals and families in the Baltimore, Maryland area —
              helping you or your loved one enjoy greater comfort, dignity, and
              independence at home.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button href="/contact" size="lg">
                Request Care
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Our Services
              </Button>
            </div>
          </div>

          {/* Image - 5 columns */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main image container with unique shape */}
              <div className="relative aspect-[4/5] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-2xl shadow-navy-900/12">
                <Image
                  src="/images/hero-caregiver-senior.jpg"
                  alt="A caregiver engaging warmly with seniors in a bright, welcoming care setting"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
              {/* Floating accent card */}
              <div
                className="absolute -bottom-5 -left-3 sm:-left-6 bg-white rounded-2xl shadow-lg shadow-navy-900/10 border border-navy-100/40 p-4 max-w-[200px] hidden sm:block"
                aria-hidden="true"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-navy-900 leading-tight">
                      Individualized Care
                    </p>
                    <p className="text-[11px] text-navy-500 mt-0.5">
                      Shaped by your needs
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative frame accent */}
              <div
                className="absolute -top-3 -right-3 w-full h-full border-2 border-cyan-300/15 rounded-[1.5rem] lg:rounded-[2rem] -z-10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Trust Strip - with subtle separator */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-navy-100/70">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-6">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-navy-50/80 text-navy-400 flex items-center justify-center">
                    <Icon className="w-[18px] h-[18px]" aria-hidden="true" />
                  </div>
                  <span className="text-[13px] font-semibold text-navy-600">
                    {item.label}
                  </span>
                  {/* Vertical divider between items (desktop only) */}
                  {index < trustItems.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-6 bg-navy-100" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
