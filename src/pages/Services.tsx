import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageBanner from "@/components/SubpageBanner";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Salad, Baby, Droplets, Clock, Users, Award, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Women Wellness Program",
      slug: "women-wellness",
      description: "A complete blend of therapeutic yoga, pranayama, and progressive strength training designed exclusively for women. Heal, strengthen & balance your entire system.",
      features: ["Therapeutic Yoga", "Pranayama", "Strength Training", "Hormonal Balance"],
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-500/10",
      duration: "8-12 weeks",
      rating: "4.9",
    },
    {
      icon: Salad,
      title: "90-Day Diet Program",
      slug: "diet-program",
      description: "A science-backed personalized nutrition plan using the Cognitive Plating Method. No extreme restrictions—just mindful eating for long-term health.",
      features: ["Personalized Plans", "Weekly Check-ins", "Recipe Library", "Progress Tracking"],
      color: "from-primary to-emerald-600",
      bgColor: "bg-primary/10",
      duration: "90 days",
      rating: "4.8",
    },
    {
      icon: Baby,
      title: "Kids Yoga (Ages 7–14)",
      slug: "kids-yoga",
      description: "Anatomy-based interactive yoga for children to build flexibility, awareness, discipline & emotional balance—learning the why behind every posture.",
      features: ["Age-Appropriate", "Fun Activities", "Mindfulness", "Physical Development"],
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-500/10",
      duration: "Ongoing",
      rating: "5.0",
    },
    {
      icon: Droplets,
      title: "LSP + Juice Fasting",
      slug: "gut-reset",
      description: "A detoxifying blend of Laghu Shankha Prakshalana (colon cleansing) and medically assessed juice fasting to reset the entire digestive system.",
      features: ["Gut Reset", "Detoxification", "Medical Guidance", "Post-Fast Support"],
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-500/10",
      duration: "4-7 days",
      rating: "4.7",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <SubpageBanner
        title="Our Signature Programs"
        subtitle="Comprehensive wellness services crafted for clarity, safety and transformation"
        backgroundImage="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1920&h=400&fit=crop"
      />

      {/* Services Grid - Modern Card Layout */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Header with Gradient */}
                <div className={`relative p-6 bg-gradient-to-r ${service.color}`}>
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 bg-background/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-background" />
                    </div>
                    <div className="flex items-center gap-1 bg-background/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star className="h-4 w-4 text-background fill-background" />
                      <span className="text-background font-semibold text-sm">{service.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-background mt-4">
                    {service.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-1 text-background/80 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className={`${service.bgColor} rounded-xl px-3 py-2 text-sm font-medium text-foreground`}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    size="lg"
                    asChild
                  >
                    <Link to={`/services/${service.slug}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { icon: Users, value: "500+", label: "Happy Clients" },
              { icon: Award, value: "15+", label: "Years Experience" },
              { icon: Star, value: "4.9", label: "Average Rating" },
              { icon: Heart, value: "60+", label: "Transformations" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Enroll Today, Feel the Change
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Start your transformation journey with NUTRIOMFIT's signature programs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="white" size="lg" asChild>
              <Link to="/#consultation">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
