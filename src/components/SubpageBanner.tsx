interface SubpageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const SubpageBanner = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=400&fit=crop",
}: SubpageBannerProps) => {
  return (
    <section
      className="relative w-full h-[280px] md:h-[350px] max-h-[350px] overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-3 animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-background/80 max-w-2xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default SubpageBanner;
