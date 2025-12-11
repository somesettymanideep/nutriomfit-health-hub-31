const FounderSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            Our Founder
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            A Message from Our <span className="text-primary">Founder</span>
          </h2>
        </div>

        {/* 6-column grid layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-12 items-center">
            {/* Left side - Image (2 columns on desktop) */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl -rotate-3" />
                <div className="absolute -inset-4 bg-gradient-to-tl from-primary/10 to-transparent rounded-3xl rotate-3" />
                
                {/* Image container */}
                <div className="relative w-64 h-80 md:w-full md:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border-4 border-background">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
                    alt="Founder of NUTRIOMFIT"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Accent decoration */}
                <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-primary rounded-full opacity-20" />
              </div>
            </div>

            {/* Right side - Content (4 columns on desktop) */}
            <div className="md:col-span-4 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Dr. Anjali Mehta
                </h3>
                <p className="text-primary font-semibold text-lg">
                  Certified Yoga Therapist & Nutritionist
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Welcome to NUTRIOMFIT. My journey into wellness began over 15 years ago when I witnessed 
                  firsthand how traditional yogic practices and mindful nutrition could transform lives. 
                  Having trained medical professionals and individuals from diverse backgrounds across 
                  the globe, I understand that true wellness isn't about extreme diets or grueling workouts.
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  At NUTRIOMFIT, we believe in a holistic approach where fitness, nutrition, and inner 
                  awareness work together harmoniously. Every program we design is rooted in science-backed 
                  methods and timeless yogic wisdom, tailored to help you build a healthier relationship 
                  with your body. Our mission is simple: to guide you toward sustainable transformation 
                  through clarity, safety, and genuine care.
                </p>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  Whether you're beginning your wellness journey or looking to deepen your practice, 
                  I'm honored to be part of your transformation. Together, let's create lasting change.
                </p>
              </div>

              {/* Signature or accent */}
              <div className="pt-4 border-t border-border">
                <p className="text-foreground font-semibold italic text-lg">
                  "Wellness is not a destination, it's a way of life."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
