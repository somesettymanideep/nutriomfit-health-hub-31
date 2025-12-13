import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, CheckCircle2, Clock, Users, Star, Sparkles, Target, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WomenWellness = () => {
  const uniqueFeatures = [
    "Therapeutic Yoga using Integrated Approach of Yoga Therapy (IAYT)",
    "Theme-based sessions tailored to women's health needs",
    "Blend of ancient yogic wisdom with modern exercise science",
    "Progressive strength training with functional movements",
    "Holistic approach addressing body, mind, and emotions",
  ];

  const programComponents = [
    {
      title: "Therapeutic Yoga Sessions",
      items: [
        "Spine health & posture correction",
        "Pelvic wellness & core strengthening",
        "Stress balance & relaxation techniques",
        "Diabetes-friendly yoga sequences",
        "Limb strengthening & flexibility work",
      ],
    },
    {
      title: "Breathing & Facial Wellness",
      items: [
        "Pranayama for hormonal balance",
        "Netra Yoga for eye health",
        "Mukha Yoga for facial toning",
        "Stress-relief breathing patterns",
      ],
    },
    {
      title: "Strength & Conditioning",
      items: [
        "Progressive core training",
        "2 kg dumbbell workouts",
        "HIIT sessions for metabolism",
        "Full body functional workouts",
      ],
    },
    {
      title: "Monthly Detox",
      items: [
        "Laghu Shankha Prakshalana (LSP)",
        "Guided digestive cleansing",
        "Post-cleanse nutrition guidance",
      ],
    },
  ];

  const targetAudience = [
    "Women seeking holistic wellness beyond just exercise",
    "Those dealing with hormonal imbalances or PCOS",
    "Women looking to build sustainable strength",
    "Anyone wanting to manage stress and anxiety naturally",
    "Beginners and experienced practitioners alike",
  ];

  const benefits = [
    { icon: Heart, title: "Hormonal Balance", description: "Regulate your hormones naturally through targeted therapeutic yoga practices designed for women" },
    { icon: Shield, title: "Core Strength", description: "Build functional core strength that supports your spine, improves posture, and enhances daily activities" },
    { icon: Sparkles, title: "Mental Clarity", description: "Master pranayama techniques that calm the mind, reduce anxiety, and improve focus" },
    { icon: Target, title: "Holistic Healing", description: "Address physical, mental, and emotional wellness through an integrated therapeutic approach" },
  ];

  const faqs = [
    {
      question: "Is this program suitable for beginners?",
      answer: "Absolutely! Our program is designed to accommodate all fitness levels. We start with foundational movements and progressively build intensity based on your comfort and capability. Our instructors provide modifications for every exercise.",
    },
    {
      question: "Do I need any equipment?",
      answer: "For the strength training component, you'll need a pair of 2 kg dumbbells. For yoga sessions, a yoga mat is recommended. Everything else is bodyweight-based. We'll guide you on what to acquire before starting.",
    },
    {
      question: "Will this help with hormonal or lifestyle issues?",
      answer: "Yes, our therapeutic yoga approach using IAYT methodology specifically targets hormonal balance and lifestyle-related concerns. Many participants have reported improvements in PCOS symptoms, stress levels, sleep quality, and overall energy.",
    },
    {
      question: "How are the sessions conducted?",
      answer: "Sessions are conducted both online and offline, giving you flexibility. Online sessions are live and interactive, not pre-recorded, ensuring personalized attention and real-time corrections.",
    },
    {
      question: "What is the time commitment required?",
      answer: "The program requires approximately 5-6 hours per week, spread across daily yoga sessions and strength training days. Sessions are scheduled at convenient times with options for morning and evening batches.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-pink-50 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/services" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to Services
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                Women's Health
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Women <span className="text-pink-500">Wellness Program</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-4">
              A Holistic Wellness Journey Curated Exclusively for Women
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Embrace a transformative experience that harmonizes therapeutic yoga, pranayama, and progressive strength training—designed to heal, strengthen, and balance your entire being.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/#consultation">
                  Start Your Journey
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

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About the <span className="text-primary">Program</span>
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Women Wellness Program is more than just a fitness routine—it's a comprehensive wellness journey designed with the unique needs of women in mind. We understand that women's bodies go through various phases and challenges, from hormonal fluctuations to the demands of modern life.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our approach combines the ancient wisdom of yoga therapy with modern exercise science, creating a powerful synergy that addresses not just physical fitness, but emotional balance and mental clarity. Using the Integrated Approach of Yoga Therapy (IAYT), we create personalized pathways that respect your body's unique requirements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're looking to manage stress, build strength, improve flexibility, or find hormonal balance, this program offers a nurturing space where transformation happens naturally and sustainably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="section-padding bg-pink-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              What Makes This Program <span className="text-primary">Unique</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {uniqueFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                  <CheckCircle2 className="h-6 w-6 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              What You Will <span className="text-primary">Experience</span>
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              A carefully structured program that takes you through various modalities, each designed to complement and enhance the others.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programComponents.map((component, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-pink-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {component.title}
                  </h3>
                  <ul className="space-y-2">
                    {component.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
              This program welcomes women of all fitness levels. No prior yoga or fitness experience is required.
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
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-500 transition-colors">
                    <benefit.icon className="h-6 w-6 text-pink-500 group-hover:text-white transition-colors" />
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
      <section className="section-padding bg-pink-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="bg-background rounded-3xl p-8 border border-border shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Program Details</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Duration</p>
                    <p className="text-muted-foreground">12 weeks comprehensive program</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Format</p>
                    <p className="text-muted-foreground">Online & Offline sessions available</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <Star className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Support</p>
                    <p className="text-muted-foreground">24/7 WhatsApp community support</p>
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
      <section className="section-padding bg-gradient-to-r from-pink-500 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Begin Your Wellness Journey Today
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards a healthier, stronger, and more balanced you. Our expert team is ready to guide you every step of the way.
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90" asChild>
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

export default WomenWellness;