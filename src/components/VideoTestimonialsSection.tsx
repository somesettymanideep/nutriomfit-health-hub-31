import { useState } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

interface VideoTestimonial {
  id: string;
  name: string;
  result: string;
  thumbnail: string;
  videoUrl: string;
}

const VideoTestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const videoTestimonials: VideoTestimonial[] = [
    {
      id: "1",
      name: "Priya Sharma",
      result: "Lost 9kg in 8 weeks",
      thumbnail: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "2",
      name: "Rahul Verma",
      result: "Back pain gone",
      thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "3",
      name: "Anita Desai",
      result: "Core strength improved",
      thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "4",
      name: "Vikram Singh",
      result: "Complete transformation",
      thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "5",
      name: "Meera Patel",
      result: "Gained muscle definition",
      thumbnail: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "6",
      name: "Arjun Nair",
      result: "Better sleep & energy",
      thumbnail: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=300&fit=crop",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <>
      <section id="video-testimonials" className="section-padding bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Watch Our <span className="text-primary">Transformations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real videos from real clients sharing their wellness journey
            </p>
          </div>

          <div className="relative">
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-2 md:-translate-x-6 bg-background/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground border-primary/20 hidden md:flex"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-2 md:translate-x-6 bg-background/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground border-primary/20 hidden md:flex"
              onClick={scrollNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Carousel */}
            <div className="overflow-hidden mx-0 md:mx-8" ref={emblaRef}>
              <div className="flex gap-6">
                {videoTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                  >
                    <div
                      className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
                      onClick={() => setActiveVideo(testimonial)}
                    >
                      {/* Thumbnail */}
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={testimonial.thumbnail}
                          alt={`${testimonial.name}'s transformation`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                        
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300 shadow-lg">
                            <Play className="h-7 w-7 text-primary-foreground ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-primary font-medium text-sm">
                          {testimonial.result}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {videoTestimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-primary w-8"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-card rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background text-foreground"
              onClick={() => setActiveVideo(null)}
            >
              <X className="h-5 w-5" />
            </Button>

            <div className="aspect-video">
              <iframe
                src={activeVideo.videoUrl}
                title={`${activeVideo.name}'s testimonial`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-6 border-t border-border">
              <h3 className="text-xl font-bold text-foreground">
                {activeVideo.name}
              </h3>
              <p className="text-primary font-medium">{activeVideo.result}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoTestimonialsSection;
