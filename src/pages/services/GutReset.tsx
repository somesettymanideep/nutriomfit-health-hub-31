import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, CheckCircle2, Clock, Users, Star, AlertTriangle, Zap, Shield, Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GutReset = () => {
  const uniqueFeatures = [
    "Authentic Laghu Shankha Prakshalana technique from yogic tradition",
    "Medically assessed eligibility screening before enrollment",
    "Personalized juice fasting protocol based on your constitution",
    "Complete digestive system reset in just 4 days",
    "Post-program dietary guidance for sustained benefits",
    "One-on-one guidance throughout the entire process",
  ];

  const programDays = [
    {
      day: "Day 1",
      title: "Laghu Shankha Prakshalana",
      description: "Guided Colon Cleansing",
      items: [
        "Detailed pre-LSP preparation guidance",
        "Step-by-step guided LSP practice",
        "Saltwater technique with specific asanas",
        "Complete digestive tract cleansing",
        "Post-LSP care and rest protocol",
      ],
    },
    {
      day: "Days 2-3",
      title: "Personalized Juice Fasting",
      description: "Gut Healing & Restoration",
      items: [
        "Constitution-based juice selection",
        "Specific timing and quantity guidelines",
        "Herbal tea recommendations",
        "Light movement and rest balance",
        "Daily check-ins and support",
      ],
    },
    {
      day: "Day 4",
      title: "Gentle Reintroduction",
      description: "Transition & Integration",
      items: [
        "Gradual food reintroduction protocol",
        "Light, easily digestible meals",
        "Digestive fire rekindling practices",
        "Post-program eating guidelines",
        "Long-term maintenance tips",
      ],
    },
  ];

  const targetAudience = [
    "Individuals experiencing digestive issues or bloating",
    "Those looking for a metabolic reset",
    "Anyone wanting to break unhealthy eating patterns",
    "People seeking a deeper cleansing experience",
    "Those preparing for a new health journey",
  ];

  const notSuitableFor = [
    "Pregnant or breastfeeding women",
    "Individuals with certain gastrointestinal conditions",
    "Those with uncontrolled blood pressure or heart conditions",
    "People with eating disorders (current or recovering)",
    "Anyone on certain medications (assessed during screening)",
  ];

  const benefits = [
    { icon: Droplets, title: "Deep Colon Cleansing", description: "Remove accumulated waste and toxins from the digestive tract using ancient yogic techniques" },
    { icon: Zap, title: "Metabolic Reset", description: "Give your digestive system a complete rest and restart, optimizing metabolic function" },
    { icon: Sparkles, title: "Mental Clarity", description: "Experience improved focus and clarity as your body releases toxins and rebalances" },
    { icon: Heart, title: "Renewed Energy", description: "Feel lighter, more energetic, and vibrant as your system operates more efficiently" },
  ];

  const faqs = [
    {
      question: "What is Laghu Shankha Prakshalana (LSP)?",
      answer: "Laghu Shankha Prakshalana is a traditional yogic cleansing technique that involves drinking warm saltwater and performing a specific sequence of asanas to facilitate the cleansing of the digestive tract. 'Laghu' means 'short' or 'mild,' making it a gentler version suitable for more people compared to the full Shankha Prakshalana.",
    },
    {
      question: "Is this program medically safe?",
      answer: "Safety is our top priority. Every participant undergoes a thorough eligibility screening before enrollment. We assess your medical history, current medications, and health conditions to ensure the program is safe for you. If there are any concerns, we'll advise alternative approaches or recommend consulting your healthcare provider.",
    },
    {
      question: "What can I expect during the juice fasting days?",
      answer: "During days 2-4, you'll consume specially selected fresh juices and herbal teas designed to nourish while allowing your digestive system to rest. You may experience increased energy, mental clarity, and lightness. Some people have mild detox symptoms initially, which typically pass quickly. Our team provides daily support throughout.",
    },
    {
      question: "How should I prepare for the program?",
      answer: "Preparation begins 2-3 days before Day 1. We provide detailed guidelines including dietary modifications, foods to avoid, and mental preparation tips. Proper preparation significantly enhances the effectiveness and comfort of the cleanse.",
    },
    {
      question: "What results can I expect?",
      answer: "Participants typically report feeling lighter, more energetic, and mentally clearer. Many experience reduced bloating, improved digestion, better skin, and a reset of taste preferences toward healthier foods. The program often serves as a powerful catalyst for longer-term dietary changes.",
    },
    {
      question: "Can I work during the 4-day program?",
      answer: "We recommend planning this during a period when you can rest and focus on the process. Day 1 (LSP day) requires dedicated time and rest afterward. Days 2-4 allow for light activities, but most participants prefer minimal commitments to fully benefit from the experience.",
    },
    {
      question: "How often can I do this program?",
      answer: "For most people, doing LSP + Juice Fasting once every 2-3 months is beneficial. Some incorporate a monthly mini-version. We'll provide personalized recommendations based on your response to the program and health goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/services" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to Services
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
                4-Day Intensive
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              LSP + <span className="text-teal-500">Juice Fasting</span> Program
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-4">
              4-Day Gut Reset & Deep Detoxification
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Experience a profound digestive reset through the ancient wisdom of Laghu Shankha Prakshalana combined with personalized juice fasting—a transformative journey to cleanse, heal, and rejuvenate your entire system.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/#consultation">
                  Start Your Reset
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Note */}
      <section className="py-6 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 mb-1">Important Notice</p>
              <p className="text-amber-700">
                This program requires a medical eligibility screening before enrollment. It is not suitable for everyone. 
                Our team will assess your suitability during the consultation to ensure your safety.
              </p>
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
                The LSP + Juice Fasting Program is a carefully structured 4-day intensive that combines two powerful cleansing modalities. Laghu Shankha Prakshalana, an ancient yogic practice, provides deep intestinal cleansing, while the subsequent juice fast allows your digestive system to rest, heal, and reset.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In our modern lives, our digestive systems are constantly working, often processing foods that are difficult to digest. Over time, this can lead to accumulated waste, sluggish digestion, and a range of health issues. This program offers a reset button—a chance for your body to cleanse, restore, and return to optimal function.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unlike harsh detox programs, our approach is grounded in traditional wisdom and adapted with modern understanding. Each participant receives personalized guidance based on their constitution, ensuring the experience is both effective and comfortable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="section-padding bg-teal-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              What Makes This Program <span className="text-primary">Unique</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {uniqueFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                  <CheckCircle2 className="h-6 w-6 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Days */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Your 4-Day <span className="text-primary">Journey</span>
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Each day is carefully designed to progressively cleanse, rest, and restore your digestive system.
            </p>
            <div className="space-y-6">
              {programDays.map((program, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 bg-teal-500 text-white rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-xs font-medium opacity-80">{program.day}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">{program.title}</h3>
                      <p className="text-teal-600 font-medium mb-4">{program.description}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {program.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For / Not For */}
      <section className="section-padding bg-green-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Who This Program Is <span className="text-primary">For</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-background rounded-2xl p-6 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-teal-500" />
                  Ideal Candidates
                </h3>
                <ul className="space-y-3">
                  {targetAudience.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-background rounded-2xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-amber-500" />
                  Not Suitable For
                </h3>
                <ul className="space-y-3">
                  {notSuitableFor.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-amber-700 bg-amber-50 rounded-lg p-3">
                  All participants undergo eligibility screening during consultation.
                </p>
              </div>
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
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors">
                    <benefit.icon className="h-6 w-6 text-teal-500 group-hover:text-white transition-colors" />
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
      <section className="section-padding bg-teal-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="bg-background rounded-3xl p-8 border border-border shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Program Details</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Duration</p>
                    <p className="text-muted-foreground">4-day intensive program</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Format</p>
                    <p className="text-muted-foreground">1:1 guided sessions with daily support</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <Star className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Requirement</p>
                    <p className="text-muted-foreground">Medical eligibility screening required</p>
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
      <section className="section-padding bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Reset Your Gut, Renew Your Health
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the transformative power of a complete digestive reset. Book your consultation to begin your journey toward renewed vitality and wellness.
          </p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-white/90" asChild>
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

export default GutReset;