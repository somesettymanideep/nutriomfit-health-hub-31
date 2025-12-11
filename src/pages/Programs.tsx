import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageBanner from "@/components/SubpageBanner";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  CheckCircle, 
  Target, 
  ArrowRight, 
  Users,
  Calendar,
  Sparkles,
  Dumbbell,
  Heart,
  Leaf,
  Brain,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
  const programs = [
    {
      title: "Weight Loss Transformation",
      duration: "8-12 weeks",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
      included: ["Custom meal plans", "Weekly check-ins", "Cardio routines", "Progress tracking"],
      results: "Lose 5-15 kg sustainably",
      icon: Dumbbell,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      featured: false,
      description: "A comprehensive weight loss program combining nutrition science with effective workout routines for sustainable results.",
    },
    {
      title: "Yoga for Flexibility & Stress Relief",
      duration: "6-8 weeks",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
      included: ["Daily yoga sessions", "Breathing techniques", "Meditation guide", "Stress management"],
      results: "Improved flexibility & mental clarity",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
      featured: true,
      description: "Transform your body and mind with therapeutic yoga practices designed to increase flexibility and reduce stress.",
    },
    {
      title: "Core Strength & Posture",
      duration: "6-8 weeks",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
      included: ["Core exercises", "Posture correction", "Strength building", "Flexibility work"],
      results: "Stronger core & better posture",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      featured: false,
      description: "Build a strong foundation with targeted core exercises and posture correction techniques for daily confidence.",
    },
    {
      title: "Nutrition + Yoga Combo",
      duration: "10-12 weeks",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
      included: ["Full nutrition plan", "Yoga sessions", "1:1 coaching", "Lifestyle guidance"],
      results: "Complete mind-body transformation",
      icon: Leaf,
      color: "from-primary to-emerald-500",
      bgColor: "bg-primary/10",
      featured: true,
      description: "The ultimate wellness package combining personalized nutrition with daily yoga for holistic transformation.",
    },
    {
      title: "Mindfulness & Meditation",
      duration: "4-6 weeks",
      image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&h=400&fit=crop",
      included: ["Guided meditations", "Mindfulness practices", "Sleep optimization", "Anxiety management"],
      results: "Enhanced mental clarity & peace",
      icon: Brain,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-500/10",
      featured: false,
      description: "Develop a powerful meditation practice that brings calm, clarity, and focus to your everyday life.",
    },
    {
      title: "Energy & Vitality Boost",
      duration: "6-8 weeks",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      included: ["Energy-boosting routines", "Nutrition optimization", "Sleep coaching", "Lifestyle habits"],
      results: "Increased energy & vitality",
      icon: Sparkles,
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-500/10",
      featured: false,
      description: "Revitalize your energy levels with scientifically-backed routines and nutrition strategies.",
    },
  ];

  const stats = [
    { value: "500+", label: "Happy Clients", icon: Users },
    { value: "15+", label: "Years Experience", icon: Calendar },
    { value: "98%", label: "Success Rate", icon: Target },
    { value: "24/7", label: "Support Available", icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <SubpageBanner
        title="Our Programs"
        subtitle="Structured wellness programs designed for real, lasting results"
        backgroundImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&h=400&fit=crop"
      />

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Choose Your Path
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Structured Programs for <span className="text-primary">Real Results</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each program is carefully designed by experts to help you achieve your specific wellness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`group relative bg-card rounded-3xl overflow-hidden border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  program.featured
                    ? "border-primary shadow-xl shadow-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {program.featured && (
                  <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Popular
                  </span>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60`} />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-background/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <program.icon className="h-6 w-6 text-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {program.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {program.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground text-sm">{program.duration}</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {program.included.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </div>
                    ))}
                    {program.included.length > 3 && (
                      <span className="text-primary text-sm font-medium">
                        +{program.included.length - 3} more included
                      </span>
                    )}
                  </div>

                  <div className={`flex items-center gap-2 mb-6 p-3 ${program.bgColor} rounded-xl`}>
                    <Target className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {program.results}
                    </span>
                  </div>

                  <Button
                    variant={program.featured ? "default" : "outline"}
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <Link to="/#consultation">
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Not Sure Which Program Is Right for You?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Book a free consultation with our wellness experts to discuss your goals and find the perfect program for your journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/#consultation">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
