"use client";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  text: string;
  author: string;
  position: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    text: "Sparkling clean, pristine and bright, they made my home a pure delight. Every corner gleams with care, freshness floating in the air.",
    author: "Emma Thompson",
    position: "Busy Professional & Mother",
    image: "/professional-woman-ceo.png",
    rating: 5,
  },
  {
    text: "Swift and smooth, they work with grace, leaving not a single trace. My space transformed from dull to divine, now every surface truly shines.",
    author: "Sarah Mitchell",
    position: "Small Business Owner",
    image: "/professional-woman-marketing-director.png",
    rating: 5,
  },
  {
    text: "Deep and thorough, neat and clean, the finest service I have seen. From floor to ceiling, wall to wall, they conquered dirt and cleaned it all.",
    author: "Jessica Parker",
    position: "Property Manager",
    image: "/professional-woman-founder.png",
    rating: 5,
  },
  {
    text: "Reliable rhythm, steady flow, they make my worries simply go. Week after week, they never fail, their cleaning magic tells the tale.",
    author: "Rachel Green",
    position: "Working Mother of Three",
    image: "/professional-creative-director.png",
    rating: 5,
  },
  {
    text: "Bond cleaning done with perfect care, no stress, no fuss, no need to despair. My deposit back, my landlord pleased, all my moving worries eased.",
    author: "Michael Chen",
    position: "Recent Graduate",
    image: "/professional-woman-vp-marketing.png",
    rating: 5,
  },
  {
    text: "Carpets fresh and ovens bright, windows clear and shining light. Add-on services, pure perfection, worthy of my full affection.",
    author: "David Wilson",
    position: "Homeowner & Father",
    image: "/professional-brand-manager.png",
    rating: 5,
  },
  {
    text: "Professional touch with gentle care, quality service beyond compare. My home now feels like paradise, their cleaning skills are worth the price.",
    author: "Lisa Rodriguez",
    position: "Retired Teacher",
    image: "/professional-man-cto.png",
    rating: 5,
  },
  {
    text: "Upholstery clean, walls pristine white, they turned my house into pure light. Trustworthy team with hearts so true, there's nothing that they cannot do.",
    author: "Amanda Davis",
    position: "Interior Designer",
    image: "/placeholder-d0qg1.png",
    rating: 5,
  },
];

const TestimonialCard = ({
  text,
  author,
  position,
  image,
  rating,
}: {
  text: string;
  author: string;
  position: string;
  image: string;
  rating: number;
}) => (
  <Card className="w-[320px] md:w-[380px] mx-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-white/20 dark:border-gray-700/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] floating-card">
    <CardContent className="p-6">
      <div className="flex items-start gap-3 mb-4">
        <Quote className="w-6 h-6 text-primary/70 flex-shrink-0 mt-1" />
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>

      <p className="text-foreground/90 mb-6 leading-relaxed text-sm md:text-base min-h-[100px] md:min-h-[80px]">
        &quot;{text}&quot;
      </p>

      <div className="flex items-center gap-4">
        <Avatar className="w-12 h-12 ring-2 ring-primary/20">
          <AvatarImage src={image || "/placeholder.svg"} alt={author} />
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
            {author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-foreground text-sm md:text-base">
            {author}
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground leading-tight">
            {position}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const InfiniteCarousel = ({
  testimonials,
  direction = "forward",
}: {
  testimonials: Testimonial[];
  direction?: "forward" | "backward";
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const autoplay = useCallback(() => {
    if (!emblaApi) return;

    const scroll =
      direction === "forward"
        ? () => emblaApi.scrollNext()
        : () => emblaApi.scrollPrev();

    scroll();
  }, [emblaApi, direction]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(autoplay, 3000);
    return () => clearInterval(interval);
  }, [autoplay, emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={`${direction}-${index}`} className="flex-none py-4">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-blue-50/60 to-transparent dark:from-blue-950/20 dark:to-transparent backdrop-blur-sm"></div>

      {/* Floating container */}
      <div className="relative z-10 floating-section">
        <div className="container mx-auto px-4 mb-12 md:mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
              Hear from other TidyDen users
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-lg leading-relaxed drop-shadow-sm">
              Join thousands of satisfied customers who have transformed their
              experience with our platform
            </p>
          </div>
        </div>

        <div className="space-y-12 ">
          {/* First row - moving right */}
          <InfiniteCarousel
            testimonials={testimonials.slice(0, 4)}
            direction="forward"
          />

          {/* Second row - moving left */}
          <InfiniteCarousel
            testimonials={testimonials.slice(4, 8)}
            direction="backward"
          />
        </div>

        <div className="container mx-auto px-4 mt-12 md:mt-16 text-center">
          <div className="max-w-md mx-auto">
            <Button
              size="lg"
              className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 hover:scale-105 backdrop-blur-sm border border-white/20"
            >
              GET YOUR QUOTE
            </Button>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 drop-shadow-sm">
              Join 10,000+ happy customers
            </p>
          </div>
        </div>
      </div>

      {/* Floating animation styles */}
      <style jsx>{`
        .floating-section {
          animation: float 6s linear infinite;
        }

        .floating-card {
          animation: cardFloat 4s linear infinite;
          animation-delay: calc(var(--card-index, 0) * 0.2s);
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes cardFloat {
          0% {
            transform: translateY(0) rotateX(0deg);
          }
          50% {
            transform: translateY(-5px) rotateX(2deg);
          }
          100% {
            transform: translateY(0) rotateX(0deg);
          }
        }

        .floating-card:nth-child(1) {
          --card-index: 1;
        }
        .floating-card:nth-child(2) {
          --card-index: 2;
        }
        .floating-card:nth-child(3) {
          --card-index: 3;
        }
        .floating-card:nth-child(4) {
          --card-index: 4;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
