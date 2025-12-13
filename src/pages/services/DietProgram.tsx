import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Salad, CheckCircle2, Clock, Users, Star, TrendingUp, Brain, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DietProgram = () => {
  const uniqueFeatures = [
    "Personalized nutrition based on your unique body metrics & metabolism",
    "Proprietary Cognitive Plating Method for mindful eating",
    "Ekavimshati Model: 4 phases of 21 days with strategic refeed days",
    "350+ kg collective weight loss success across participants",
    "21 days post-program maintenance support included",
    "No extreme restrictions—sustainable, enjoyable eating",
  ];

  const programPhases = [
    {
      title: "Phase 1: Foundation (Days 1-21)",
      description: "Metabolic assessment and personalized plan creation",
      items: [
        "Complete body composition analysis",
        "Metabolic rate calculation",
        "Personalized calorie and macro targets",
        "Introduction to Cognitive Plating",
      ],
    },
    {
      title: "Phase 2: Adaptation (Days 22-42)",
      description: "Your body adapts to new eating patterns",
      items: [
        "Refined meal timing strategies",
        "Portion awareness training",
        "Strategic refeed day implementation",
        "Hunger cue recognition",
      ],
    },
    {
      title: "Phase 3: Optimization (Days 43-63)",
      description: "Fine-tuning for maximum results",
      items: [
        "Advanced plating techniques",
        "Social eating strategies",
        "Plateau-breaking protocols",
        "Lifestyle integration methods",
      ],
    },
    {
      title: "Phase 4: Mastery (Days 64-90)",
      description: "Solidifying habits for long-term success",
      items: [
        "Intuitive eating development",
        "Maintenance calorie adjustment",
        "Long-term planning strategies",
        "Independence preparation",
      ],
    },
  ];

  const targetAudience = [
    "Anyone tired of yo-yo dieting and quick-fix solutions",
    "Those looking for sustainable weight management",
    "People wanting to improve their relationship with food",
    "Individuals with metabolic health concerns",
    "Anyone ready to commit to 90+ days of transformation",
  ];

  const benefits = [
    { icon: TrendingUp, title: "Sustainable Results", description: "Build habits that last a lifetime, not just until the program ends" },
    { icon: Brain, title: "Mindful Eating", description: "Develop a healthy relationship with food through cognitive awareness" },
    { icon: Zap, title: "Metabolic Health", description: "Optimize your metabolism naturally without extreme restrictions" },
    { icon: Target, title: "Personalized Approach", description: "Every meal plan is tailored to your unique body and lifestyle" },
  ];

  const faqs = [
    {
      question: "What is the Cognitive Plating Method?",
      answer: "The Cognitive Plating Method is our proprietary approach that combines visual portioning, mindful eating practices, and psychological techniques to help you make better food choices naturally. It trains your brain to recognize appropriate portions and make healthier choices without constant calorie counting.",
    },
    {
      question: "What is the Ekavimshati Model?",
      answer: "Ekavimshati means '21' in Sanskrit. Our model is based on the science that it takes 21 days to form new neural pathways. The program consists of 4 phases of 21 days each (84 days) plus strategic refeed days, totaling approximately 90 days of active coaching, followed by 21 days of maintenance support.",
    },
    {
      question: "Do I have to give up my favorite foods?",
      answer: "No! Our approach doesn't believe in complete elimination. We teach you how to incorporate all foods mindfully. The goal is to build a sustainable relationship with food, not to create restrictions that lead to binge cycles.",
    },
    {
      question: "How is this different from other diet programs?",
      answer: "Unlike traditional diets that focus only on what you eat, we focus on how and why you eat. Our cognitive approach addresses the psychological aspects of eating, making changes more sustainable. Plus, with 350+ kg of collective weight loss, our results speak for themselves.",
    },
    {
      question: "What happens after the 90 days?",
      answer: "You receive 21 additional days of maintenance support to help you transition to independent healthy eating. By this point, the Cognitive Plating Method will be second nature, and you'll have all the tools needed for long-term success.",
    },
    {
      question: "Is this program suitable for vegetarians/vegans?",
      answer: "Absolutely! All meal plans are customized to your dietary preferences, including vegetarian, vegan, and other specific requirements. Our approach works with any food philosophy.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-light via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/services" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to Services
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                <Salad className="h-8 w-8 text-white" />
              </div>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                111-Day Program
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              90-Day <span className="text-primary">Diet Program</span> Challenge
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-4">
              111 Days of Mindful Eating & Metabolic Reset
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Transform your relationship with food through our science-backed, personalized nutrition program. No extreme restrictions—just mindful eating for lasting health and sustainable weight management.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/#consultation">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Stats Banner */}
            <div className="mt-12 bg-card rounded-2xl p-6 border border-border grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">350+</p>
                <p className="text-sm text-muted-foreground">kg Lost Collectively</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">111</p>
                <p className="text-sm text-muted-foreground">Days Total Program</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">21</p>
                <p className="text-sm text-muted-foreground">Days Maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About the <span className="text-primary">Program</span>
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                The 90-Day Diet Program Challenge is not just another diet—it's a complete metabolic and mindset transformation. We understand that sustainable weight management isn't about temporary restrictions; it's about fundamentally changing how you think about and interact with food.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our program is built on the Ekavimshati Model, which leverages the science of habit formation over 21-day cycles. Combined with our proprietary Cognitive Plating Method, participants learn to naturally make healthier choices without the mental burden of constant calorie counting or food restriction.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over 350 kilograms of collective weight loss among our participants, the results speak for themselves. But more importantly, our graduates maintain their results because they've developed a new, healthy relationship with food.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="section-padding bg-green-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              What Makes This Program <span className="text-primary">Unique</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {uniqueFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Phases */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              The <span className="text-primary">Ekavimshati</span> Journey
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Your transformation unfolds across four carefully designed 21-day phases, each building upon the last.
            </p>
            <div className="space-y-6">
              {programPhases.map((phase, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">{phase.title}</h3>
                      <p className="text-muted-foreground mb-4">{phase.description}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {phase.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bonus Phase */}
            <div className="mt-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0">
                  +
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Bonus: 21-Day Maintenance Support</h3>
                  <p className="text-muted-foreground">Post-program guidance to ensure your new habits stick for life</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding bg-green-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Who This Program Is <span className="text-primary">For</span>
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              This program is designed for anyone ready to make a lasting change in their relationship with food.
            </p>
            <div className="bg-background rounded-2xl p-8 border border-border">
              <ul className="space-y-4">
                {targetAudience.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Key <span className="text-primary">Benefits</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <benefit.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Card */}
      <section className="section-padding bg-green-light">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="bg-background rounded-3xl p-8 border border-border shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Program Details</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Duration</p>
                    <p className="text-muted-foreground">90 days + 21 days maintenance</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Format</p>
                    <p className="text-muted-foreground">1:1 personalized coaching</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Method</p>
                    <p className="text-muted-foreground">Cognitive Plating + Ekavimshati Model</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-xl px-6">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Transform Your Relationship with Food
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds who have already discovered the power of mindful eating. Your 111-day transformation journey starts with a single conversation.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link to="/#consultation">
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DietProgram;