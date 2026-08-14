import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { MapPin, Heart, Home, Shield } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Personalized Support" },
  { icon: Heart, label: "Compassionate Care" },
  { icon: Home, label: "Health & Home Services" },
  { icon: MapPin, label: "Baltimore, Maryland" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-white pt-28 pb-4 lg:pt-36 lg:pb-8">
      {/* Decorative shapes */}
      <div
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 bg-cyan-50 border border-cyan-200/60 px-4 py-1.5 rounded-full mb-6">
              <Heart className="w-3.5 h-3.5" aria-hidden="true" />
              Compassionate Care, Right at Home
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
              Helping You Live Safely, Comfortably &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-600 to-cyan-600">
                Independently
              </span>{" "}
              at Home
            </h1>
            <p className="mt-6 text-lg text-navy-600 leading-relaxed max-w-lg">
              ASD Homecare provides compassionate healthcare and everyday support
              tailored to your needs, helping you or your loved one enjoy greater
              comfort, dignity, and independence at home.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Request Care
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Our Services
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/10">
              {/* TODO: Replace with actual hero image of a caregiver and older adult in a warm home environment */}
              <ImagePlaceholder
                alt="A caregiver sharing a warm moment with a senior client in a bright, comfortable home"
                aspectRatio="square"
              />
            </div>
            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-cyan-400/20 rounded-2xl -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -top-4 -right-4 w-32 h-32 border-2 border-navy-200/30 rounded-2xl -z-10"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Trust Strip */}
        <div className="mt-16 lg:mt-20 py-6 border-t border-navy-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-navy-50 text-navy-500 flex items-center justify-center">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-navy-700">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
