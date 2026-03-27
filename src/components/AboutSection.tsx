import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { toast } from "sonner";
import { User, Phone, Mail, Briefcase, Send, Building, Globe } from "lucide-react";
import emailjs from '@emailjs/browser';

const AboutSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    
    // Manually collect data to ensure multi-select services are joined properly
    const formData = new FormData(form);
    const selectedServices = formData.getAll('services').join(', ');
    
    const templateParams = {
      name: formData.get('name'),
      mobile: formData.get('mobile'),
      email: formData.get('email'),
      business_name: formData.get('business_name'),
      services: selectedServices || 'None selected',
    };

    try {
      const result = await emailjs.send(
        'service_2fgmclc', 
        'template_je8ocpg', 
        templateParams, 
        'wPIIbUtqlG2slz3Z_'
      );

      if (result.text === 'OK') {
        toast.success("Thank you! Your request has been sent successfully.");
        form.reset();
      } else {
        console.error("EmailJS Response Error:", result);
        toast.error("Failed to send request. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS Submission Error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-slate-50/50">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Content */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-border/50 text-xs font-medium text-primary mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary" />
              ABOUT ZORIX
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 text-foreground">
              Digital Marketing <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Agency in India</span>
            </h2>
            
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed font-medium">
              <p>
                Welcome to ZORIX – Next-Gen Solutions, a results-driven digital marketing agency based in Davangere, India. We help businesses across India grow faster with data-driven strategies, creative branding, and high-performance marketing solutions.
              </p>
              <p>
                Our mission is to help brands scale online by combining innovation, technology, and marketing expertise. Whether you're a startup or an established business, we create customized strategies that deliver real, measurable growth.
              </p>
              <p>
                We provide our services across all major cities in India including Bangalore, Mumbai, Delhi, Hyderabad, Chennai, and more. With a remote-first approach, we ensure seamless communication and execution regardless of location.
              </p>
              <p className="pb-4">
                Our core services include Social Media Marketing, Performance Ads (Meta & Google), Website Development, SEO, Branding, and Content Marketing — all focused on maximizing ROI.
              </p>
            </div>
          </ScrollReveal>
          
          {/* Right Side: Lead Form */}
          <ScrollReveal delay={200} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent blur-2xl rounded-3xl opacity-70" />
            
            <div className="relative bg-white border border-slate-100 shadow-[0_20px_40px_rgb(0,0,0,0.08)] p-8 md:p-10 rounded-3xl">
              <div className="mb-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-2">Let's Grow Your Business 🚀</h3>
                <p className="text-muted-foreground text-sm font-medium">100% free consultation. No commitment.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80">Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80">Mobile Number</label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                      <input 
                        type="tel" 
                        name="mobile"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">Business Name</label>
                  <div className="relative group">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                    <input 
                      type="text" 
                      name="business_name"
                      required
                      placeholder="Company Ltd."
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    Services Required (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    {[
                      { id: "social-media", label: "Social Media Marketing" },
                      { id: "performance-ads", label: "Performance Ads" },
                      { id: "web-dev", label: "Website Development" },
                      { id: "seo", label: "SEO Optimization" },
                      { id: "branding", label: "Branding & Design" },
                      { id: "content", label: "Content Marketing" },
                    ].map((service) => (
                      <label key={service.id} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input 
                            type="checkbox" 
                            name="services"
                            value={service.label}
                            className="peer appearance-none w-5 h-5 rounded-md border-2 border-slate-300 checked:bg-primary checked:border-primary transition-all duration-200"
                          />
                          <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 mt-6 bg-gradient-to-r from-purple-600 to-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending Request..." : "Get Free Consultation"}
                  {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>

              <div className="mt-8 text-center flex items-center justify-center gap-2">
                <span className="w-12 h-[1px] bg-slate-200"></span>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Serving clients across India 🇮🇳
                </p>
                <span className="w-12 h-[1px] bg-slate-200"></span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
