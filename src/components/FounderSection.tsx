import founderImage from "@/assets/founder.jpg";
import { Award, Users, Globe, Heart, Scale, Baby, Brain, Dumbbell } from "lucide-react";

const FounderSection = () => {
  const specializations = [
    { icon: Heart, text: "Women's Wellness & Hormonal Health" },
    { icon: Dumbbell, text: "Core Strength Training & Pelvic Floor Rehabilitation" },
    { icon: Baby, text: "Pregnancy & Antenatal Yoga" },
    { icon: Heart, text: "PCOD, PCOS, Endometriosis & Infertility Support" },
    { icon: Brain, text: "Diabetes & Stress Management" },
    { icon: Scale, text: "Sustainable Weight Loss & Nutrition Coaching" },
    { icon: Users, text: "Kids Yoga (Anatomy-based, engagement-focused learning)" },
  ];

  const credentials = [
    "Women Wellness Coach",
    "Certified Nutrigenomics Coach",
    "Certified Mental Health Coach",
    "Certified Nutrition & Fitness Consultant",
    "Registered Yoga Teacher (Yoga Alliance USA)",
    "Certified Ayurveda Consultant",
    "Certified Meditation Instructor",
    "Certified Antenatal Yoga Practitioner",
  ];

  const stats = [
    { number: "740+", label: "Women Transformed", icon: Users },
    { number: "5", label: "Countries Worldwide", icon: Globe },
    { number: "400+", label: "Kg Weight Loss Achieved", icon: Scale },
    { number: "100+", label: "Weight Loss Clients", icon: Award },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            Meet the Founder
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About <span className="text-primary">Yagnasindu Balaraju</span>
          </h2>
        </div>

        {/* 6-column grid layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-12 items-start">
            {/* Left side - Image (2 columns on desktop) */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative sticky top-8">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl -rotate-3" />
                <div className="absolute -inset-4 bg-gradient-to-tl from-primary/10 to-transparent rounded-3xl rotate-3" />
                
                {/* Image container */}
                <div className="relative w-64 h-80 md:w-full md:h-[420px] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border-4 border-background">
                  <img
                    src={founderImage}
                    alt="Yagnasindu Balaraju - Founder of NUTRIOMFIT"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Accent decoration */}
                <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-primary rounded-full opacity-20" />
              </div>
            </div>

            {/* Right side - Content (4 columns on desktop) */}
            <div className="md:col-span-4 space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Yagnasindu Balaraju
                </h3>
                <p className="text-primary font-semibold text-lg">
                  Women's Wellness Coach & Holistic Health Coach
                </p>
              </div>

              {/* Introduction */}
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Yagnasindu Balaraju is a trained Women's Wellness Coach and Holistic Health Coach, 
                  renowned for her integrative, science-backed approach to yoga therapy, nutrition, 
                  and mindful movement. With over seven years of dedicated practice, she has guided 
                  <span className="text-primary font-semibold"> 740+ women across five countries</span>—India, 
                  the UK, Canada, the United States, and Australia—towards sustainable health, strength, 
                  and inner balance.
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Her work is rooted in the philosophy that women's wellness is not a one-size-fits-all 
                  solution. Every program designed by Yagnasindu Balaraju is <span className="text-primary font-semibold">women-exclusive</span>, 
                  intentionally crafted to support the female body through every life stage—hormonally, 
                  physically, and emotionally.
                </p>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  Blending classical yoga wisdom, modern anatomy, Ayurveda, therapeutic strength training, 
                  and mindfulness practices, she delivers a deeply personalized and results-driven wellness experience.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-primary/5 rounded-xl p-4 text-center">
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Areas of Specialization */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-foreground">Areas of Specialization</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {specializations.map((spec, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/50">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <spec.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">{spec.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kids Yoga Note */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed">
                  In her <span className="text-primary font-semibold">Kids Yoga methodology</span>, 
                  children are introduced to yoga through curiosity and understanding—learning each 
                  posture with references to muscles, joints, and body mechanics, fostering lifelong 
                  enthusiasm and discipline.
                </p>
              </div>

              {/* Credentials */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-foreground">Credentials & Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {credentials.map((credential, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      <Award className="w-3.5 h-3.5 mr-1.5" />
                      {credential}
                    </span>
                  ))}
                </div>
              </div>

              {/* Closing Statement */}
              <div className="pt-4 border-t border-border">
                <p className="text-foreground font-medium italic text-lg leading-relaxed">
                  "Trusted by medical professionals, corporate leaders, and high-performing women, 
                  NutriOMFit methodology delivers measurable transformation with elegance, precision, and care."
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
