import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Baby, CheckCircle2, Clock, Users, Star, Brain, Heart, Zap, Award } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const KidsYoga = () => {
  const uniqueFeatures = [
    "Anatomy-based learning approach—kids understand why each posture matters",
    "Interactive and playful sessions that feel like fun, not exercise",
    "Focus on muscles, joints & movement awareness from an early age",
    "Recognition program with Merit Points and monthly awards",
    "Age-appropriate sequences designed for growing bodies",
    "Blend of physical practice with mental focus training",
  ];

  const programComponents = [
    {
      title: "Yogasana Practice",
      items: [
        "Age-appropriate yoga sequences",
        "Posture correction techniques",
        "Flexibility and strength building",
        "Balance and coordination exercises",
      ],
    },
    {
      title: "Breathing & Focus",
      items: [
        "Simple pranayama techniques",
        "Concentration exercises",
        "Calming breath patterns",
        "Energy-boosting breathing",
      ],
    },
    {
      title: "Facial & Eye Wellness",
      items: [
        "Netra Yoga for eye health",
        "Mukha Yoga facial exercises",
        "Screen fatigue relief practices",
        "Vision strengthening techniques",
      ],
    },
    {
      title: "Chants & Mindfulness",
      items: [
        "Simple Sanskrit chants",
        "Mindfulness activities",
        "Gratitude practices",
        "Emotional awareness training",
      ],
    },
  ];

  const targetAudience = [
    "Children aged 7 to 14 years",
    "Kids who spend significant time with screens and devices",
    "Children looking for a healthy physical activity",
    "Parents wanting to introduce wellness habits early",
    "Kids with focus or concentration challenges",
    "No prior yoga experience required",
  ];

  const benefits = [
    { icon: Zap, title: "Physical Flexibility", description: "Develop strength, flexibility, and body awareness through playful movement and age-appropriate poses" },
    { icon: Brain, title: "Focus & Concentration", description: "Build attention span and concentration skills through mindful practices and breathing exercises" },
    { icon: Heart, title: "Emotional Balance", description: "Learn to understand and manage emotions effectively with practical tools they can use daily" },
    { icon: Award, title: "Confidence Building", description: "Gain self-confidence through achievement recognition and progressive skill development" },
  ];

  const recognitionProgram = [
    { title: "Practice Merit Points", description: "Earn points for regular attendance, effort, and improvement" },
    { title: "Balayogi of the Month", description: "Monthly recognition for outstanding dedication and progress" },
    { title: "Skill Badges", description: "Achievement badges for mastering specific poses and techniques" },
    { title: "Progress Certificates", description: "Quarterly certificates celebrating their yoga journey" },
  ];

  const faqs = [
    {
      question: "What age group is this program for?",
      answer: "The Kids Yoga Program is designed for children aged 7 to 14 years. The sessions are structured to be age-appropriate, with modifications available for different developmental stages within this range.",
    },
    {
      question: "Does my child need any prior yoga experience?",
      answer: "No prior experience is needed! Our program is designed for beginners. Children learn from the fundamentals in an encouraging, non-competitive environment where everyone progresses at their own pace.",
    },
    {
      question: "How does the anatomy-based approach work?",
      answer: "Unlike traditional kids' yoga that just teaches poses, we explain which muscles, joints, and body systems are involved in each movement. This helps children develop body awareness and understand the 'why' behind each practice, making it more meaningful and memorable.",
    },
    {
      question: "What are Practice Merit Points?",
      answer: "Merit Points are our fun reward system that recognizes consistency, effort, and improvement. Children earn points for attendance, trying new poses, helping others, and showing progress. Points can lead to monthly recognition as 'Balayogi of the Month'.",
    },
    {
      question: "How long are the sessions and how often?",
      answer: "Sessions are 45 minutes long, conducted 3 times per week. This frequency is optimal for children to build skills progressively without overwhelming their schedule. Sessions are available in both morning and evening batches.",
    },
    {
      question: "Can my child join mid-batch?",
      answer: "Yes! While we recommend starting with a new batch, children can join ongoing batches. Our instructors provide extra attention to new joiners to help them catch up with the group.",
    },
    {
      question: "Are sessions online or in-person?",
      answer: "We offer both options. Online sessions are interactive and conducted live (not pre-recorded), allowing real-time feedback and corrections. In-person sessions are available at select locations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-amber-50 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/services" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to Services
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center">
                <Baby className="h-8 w-8 text-white" />
              </div>
              <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                Ages 7–14
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Kids <span className="text-amber-500">Yoga Program</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-4">
              Building Healthy Habits for a Lifetime of Wellness
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              An anatomy-based, interactive yoga program for children that builds flexibility, body awareness, discipline, and emotional balance—while making learning the why behind every posture fun and engaging.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/#consultation">
                  Enroll Your Child
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
                In a world where children are increasingly sedentary and screen-focused, the Kids Yoga Program offers a refreshing alternative. We believe that wellness habits formed in childhood create the foundation for a healthy life, and yoga is the perfect vehicle for this transformation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What sets our program apart is our anatomy-based approach. Instead of just teaching poses, we help children understand their bodies—which muscles are working, how joints move, and why each practice benefits them. This knowledge transforms yoga from mere exercise into body education.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our sessions are designed to be fun and engaging, incorporating games, challenges, and a recognition system that motivates children to practice consistently. The result is improved physical fitness, better focus, emotional resilience, and a positive relationship with their bodies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="section-padding bg-amber-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              What Makes This Program <span className="text-primary">Unique</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {uniqueFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                  <CheckCircle2 className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
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
              What Your Child Will <span className="text-primary">Experience</span>
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              A holistic curriculum that nurtures physical, mental, and emotional development through engaging activities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programComponents.map((component, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {component.title}
                  </h3>
                  <ul className="space-y-2">
                    {component.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
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

      {/* Recognition Program */}
      <section className="section-padding bg-gradient-to-r from-amber-100/50 to-orange-100/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Our <span className="text-amber-600">Recognition</span> Program
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              We celebrate every child's effort and progress through our fun recognition system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {recognitionProgram.map((item, index) => (
                <div key={index} className="bg-background rounded-xl p-5 border border-border text-center hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Who This Program Is <span className="text-primary">For</span>
            </h2>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <ul className="space-y-4">
                {targetAudience.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-green-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Key <span className="text-primary">Benefits</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors">
                    <benefit.icon className="h-6 w-6 text-amber-500 group-hover:text-white transition-colors" />
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
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="bg-card rounded-3xl p-8 border border-border shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Program Details</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sessions</p>
                    <p className="text-muted-foreground">45 minutes, 3 times per week</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Age Group</p>
                    <p className="text-muted-foreground">7 to 14 years</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Star className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Format</p>
                    <p className="text-muted-foreground">Interactive group classes (online & offline)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-amber-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background border border-border rounded-xl px-6">
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
      <section className="section-padding bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Give Your Child the Gift of Wellness
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Help your child build healthy habits, improve focus, and develop confidence through our engaging yoga program. The journey to a healthier, happier child starts here.
          </p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-white/90" asChild>
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

export default KidsYoga;