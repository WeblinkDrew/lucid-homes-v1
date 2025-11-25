import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Home as HomeIcon, Play, Shield, Star, Wifi, Zap, Bed, Bath, Square, MapPin } from "lucide-react";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in";
import { HeroImage } from "@/components/hero-image";
import { SiteHeader } from "@/components/site-header"; // Assuming SiteHeader is in components/site-header
import { SmoothScrollLink } from "@/components/smooth-scroll-nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans text-foreground selection:bg-primary/10">
      {/* Minimal Top Header */}
      <SiteHeader />

      {/* Floating Bottom Navigation */}
      <div className="hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-0.5 bg-[#1c1e1f] p-1 rounded-full shadow-2xl border border-white/10">
          <SmoothScrollLink href="/" className="px-4 py-1.5 rounded-full bg-[#343d41] text-white text-[12px] font-normal transition-colors">
            Home
          </SmoothScrollLink>
          <SmoothScrollLink href="#properties" className="px-4 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 text-[12px] font-normal transition-colors">
            Portfolio
          </SmoothScrollLink>
          <SmoothScrollLink href="#blog" className="px-4 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 text-[12px] font-normal transition-colors">
            Inspiration
          </SmoothScrollLink>
          <SmoothScrollLink href="#contact" className="px-4 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 text-[12px] font-normal transition-colors">
            Contact
          </SmoothScrollLink>
        </nav>
      </div>

      <main className="w-full lg:w-[75%] mx-auto p-[12px] space-y-[80px]">

        {/* Hero Section - Bento Style */}
        <section className="relative h-[85vh] min-h-[600px] w-full rounded-[40px] overflow-hidden group">
          <HeroImage />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end pb-24 md:pb-16">
            <FadeIn delay={0.4}>
              <div className="flex flex-col md:flex-row items-end justify-between gap-8 w-full">

                {/* Left Content */}
                <div className="max-w-2xl space-y-6">
                  <div className="text-white/80 text-[14px] font-medium tracking-wide uppercase">
                    Bespoke Architectural Design
                  </div>
                  <h1 className="text-[48px] font-light text-white leading-[1.21] tracking-tight">
                    Where Your Vision <br />
                    <span className="font-medium">Becomes Reality</span>
                  </h1>
                  <p className="text-[18px] text-white/70 max-w-md leading-relaxed font-light">
                    Luxury custom home design. From French Chateaus to modern estates, your imagination is the only limit.
                  </p>
                  <Button size="lg" className="rounded-full h-auto py-[9px] px-8 text-[14px] font-normal bg-white text-black hover:bg-white/90 border-0 mt-4">
                    Begin Your Journey
                  </Button>
                </div>

                {/* Floating Property Card */}
                <div className="hidden md:block w-[400px] bg-[#0f1112]/90 backdrop-blur-xl border border-white/10 p-4 rounded-[24px] text-white shadow-2xl">
                  <div className="relative h-48 w-full rounded-[24px] overflow-hidden mb-4">
                    <Image
                      src="/Properties/Lot 5 Franklin Cres Front (1).webp"
                      alt="Property Preview"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-white text-black text-[12px] font-bold px-3 py-1.5 rounded-full">
                        Franklin Crescent
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 flex gap-2">
                      <span className="bg-white text-black text-[12px] font-medium px-3 py-1.5 rounded-full">
                        4 Bedroom
                      </span>
                      <span className="bg-white text-black text-[12px] font-medium px-3 py-1.5 rounded-full">
                        4 Bathroom
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-end px-2 pb-2">
                    <div>
                      <h3 className="text-[20px] font-medium text-white">Franklin Estate</h3>
                    </div>
                    <span className="text-[20px] font-medium text-white">$ 2,900,000</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Stats Grid - Bento Style */}
        <section className="py-[100px]">
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: HomeIcon, label: "Custom Designs", value: "200+" },
              { icon: Shield, label: "Years of Excellence", value: "Since 2018" },
              { icon: Zap, label: "Typical Project Size", value: "5,000-12,000+ sqft" },
              { icon: Star, label: "Client Satisfaction", value: "100%" },
            ].map((stat, i) => (
              <FadeInItem key={i} className="bg-white p-6 rounded-[24px] border border-black/5 flex flex-col items-start gap-4 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[14px] text-muted-foreground">{stat.label}</p>
                  <p className="text-[20px] font-bold text-primary">{stat.value}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </section>

        {/* Properties Grid */}
        <section id="properties" className="space-y-8 py-[100px]">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <div className="inline-block bg-white px-4 py-1.5 rounded-full text-[12px] font-medium text-muted-foreground tracking-wide uppercase mb-3 border border-black/5">
                Our Portfolio
              </div>
              <h2 className="text-[38px] font-light text-primary leading-[1.21]">
                Timeless designs, brought to life.
              </h2>
              <p className="text-muted-foreground text-[16px] font-light">
                A curated selection of bespoke architectural visions we've transformed into reality.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Chinguacousy Estate",
                location: "Caledon, ON",
                price: "$4.8M",
                image: "/Properties/Chinguacousy.webp",
                beds: 5, baths: 6, sqft: 5200
              },
              {
                title: "Highcrest Manor",
                location: "Caledon, ON",
                price: "$3.5M",
                image: "/Properties/Highcrest Rd 3.webp",
                beds: 4, baths: 5, sqft: 4500
              },
              {
                title: "Franklin Estate",
                location: "Woodbridge, ON",
                price: "$2.9M",
                image: "/Properties/Lot 5 Franklin Cres Front.webp",
                beds: 4, baths: 4, sqft: 3800
              },
              {
                title: "Fourth Line Estate",
                location: "Erin, ON",
                price: "$3.1M",
                image: "/Properties/Fourth Line 1.webp",
                beds: 4, baths: 4, sqft: 4100
              }
            ].map((property, i) => (
              <FadeInItem key={i} className="group relative h-[400px] rounded-[24px] overflow-hidden cursor-pointer">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute top-6 left-6 flex items-center gap-2 text-white">
                  <MapPin className="h-4 w-4" />
                  <span className="text-[14px] font-medium">{property.location.split(',')[0]}</span>
                </div>
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-[14px] font-medium">
                  {property.price}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-[20px] font-medium mb-2">{property.title}</h3>
                  <p className="text-white/80 mb-4 text-[14px]">{property.location}</p>
                  <div className="flex gap-6 text-[14px] text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <span className="flex items-center gap-2"><Bed className="h-4 w-4" /> {property.beds} Beds</span>
                    <span className="flex items-center gap-2"><Bath className="h-4 w-4" /> {property.baths} Baths</span>
                    <span className="flex items-center gap-2"><Square className="h-4 w-4" /> {property.sqft} sqft</span>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn>
            <div className="flex justify-center pt-8">
              <Button className="rounded-full px-8 py-[9px] h-auto text-[14px] font-normal bg-primary text-white hover:bg-primary/90">
                View Full Portfolio
              </Button>
            </div>
          </FadeIn>
        </section>

        {/* Feature Split Section */}
        <section id="features" className="py-[100px]">
          <FadeIn>
            <div className="bg-white rounded-[24px] p-8 md:p-12 border border-black/5">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[500px] rounded-[24px] overflow-hidden">
                  <Image
                    src="/Properties/Old Church Rd Caledon.webp"
                    alt="Interior Design"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-[38px] font-light text-primary leading-[1.21]">
                      The Client is <br />
                      <span className="font-medium">The True Designer</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-[16px] font-light">
                      Your vision drives every line we draw. We collaborate closely with you to
                      craft architectural plans that capture your unique lifestyle—designs so
                      timeless they'll look relevant for centuries.
                    </p>
                  </div>

                  <FadeInStagger className="space-y-6">
                    {[
                      { title: "Bespoke Design Process", desc: "Every plan tailored to your vision—never cookie-cutter." },
                      { title: "Classical to Contemporary", desc: "From French Chateaus to modern villas, we master every style." },
                      { title: "Precision Execution", desc: "Meticulous attention to detail with our extended professional team." }
                    ].map((feature, i) => (
                      <FadeInItem key={i} className="flex gap-4 group">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary group-hover:bg-primary transition-colors duration-300 flex items-center justify-center text-primary group-hover:text-white">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-[18px] font-medium mb-1">{feature.title}</h3>
                          <p className="text-[14px] text-muted-foreground">{feature.desc}</p>
                        </div>
                      </FadeInItem>
                    ))}
                  </FadeInStagger>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Inspiration / Blog Section */}
        <section id="blog" className="space-y-8 py-[100px]">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <div className="inline-block bg-white px-4 py-1.5 rounded-full text-[12px] font-medium text-muted-foreground tracking-wide uppercase mb-3 border border-black/5">
                Design Inspiration
              </div>
              <h2 className="text-[38px] font-light text-primary leading-[1.21]">
                Architectural insights and inspiration.
              </h2>
            </div>
          </FadeIn>

          <FadeInStagger className="grid md:grid-cols-2 gap-6">
            <FadeInItem className="relative h-[400px] rounded-[24px] overflow-hidden group cursor-pointer">
              <Image
                src="/Properties/Image from Extractor 1 2.webp"
                alt="Interior Trends"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-8 left-8 text-white">
                <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-[12px] font-medium mb-3 inline-block">Classical</span>
                <h3 className="text-[24px] font-medium">Timeless Estate Design</h3>
              </div>
              <div className="absolute bottom-8 right-8 bg-white rounded-full p-3 text-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <ArrowRight className="h-5 w-5" />
              </div>
            </FadeInItem>

            <FadeInItem className="relative h-[400px] rounded-[24px] overflow-hidden group cursor-pointer">
              <Image
                src="/Properties/Image from Extractor (3).webp"
                alt="Outdoor Living"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-8 left-8 text-white">
                <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-[12px] font-medium mb-3 inline-block">Modern</span>
                <h3 className="text-[24px] font-medium">Contemporary Villas</h3>
              </div>
              <div className="absolute bottom-8 right-8 bg-white rounded-full p-3 text-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <ArrowRight className="h-5 w-5" />
              </div>
            </FadeInItem>
          </FadeInStagger>
        </section>

        {/* Stars & Tagline */}
        <section className="text-center space-y-6 py-[60px]">
          <FadeIn>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-black text-black" />
              ))}
            </div>
            <h2 className="text-[38px] md:text-[48px] font-light leading-[1.21] max-w-3xl mx-auto">
              No dream is too big. Your vision, our artistry.
            </h2>
          </FadeIn>
        </section>

        {/* Video Banner */}
        <section className="relative h-[500px] w-full rounded-[24px] overflow-hidden">
          <FadeIn fullWidth className="h-full">
            <div className="relative h-full w-full">
              <Image
                src="/Properties/Snyders Image.webp"
                alt="Landscape"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <Button size="lg" className="rounded-full h-16 w-16 bg-white text-black hover:bg-white/90 p-0 flex items-center justify-center shadow-2xl">
                  <Play className="h-6 w-6 ml-1 fill-current" />
                </Button>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Testimonials */}
        <section className="py-[100px]">
          <FadeIn>
            <div className="text-center mb-12 space-y-4">
              <div className="inline-block bg-white px-4 py-1.5 rounded-full text-[12px] font-medium text-muted-foreground tracking-wide uppercase mb-3 border border-black/5">
                Client Stories
              </div>
              <h2 className="text-[38px] font-light leading-[1.21]">Hear from our clients</h2>
            </div>
          </FadeIn>
          <FadeInStagger className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <FadeInItem key={i} className="border-0 shadow-sm bg-white rounded-[24px] p-2">
                <Card className="border-0 shadow-none">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 text-orange-400 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-[16px] font-light">
                      "Lucid Homes transformed our vision into architectural plans that exceeded every expectation. Their collaborative approach made us feel like true partners in the design process."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                        <Image
                          src={`https://i.pravatar.cc/150?img=${i + 10}`}
                          alt="Client"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-[14px]">Sarah Johnson</p>
                        <p className="text-[12px] text-muted-foreground">Custom Home Client</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </section>

        {/* CTA Section */}
        <section className="relative rounded-[24px] overflow-hidden bg-[#343d41] text-white py-[100px] px-6 text-center">
          <FadeIn>
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-[32px] md:text-[48px] font-light leading-[1.21]">
                Ready to design your dream home?
              </h2>
              <p className="text-white/70 text-[16px] md:text-[18px] font-light">
                Let's bring your vision to life. Schedule a consultation and discover how our bespoke design process creates homes that stand the test of time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto bg-white/10 p-2 rounded-[24px] sm:rounded-full backdrop-blur-sm border border-white/10">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border-0 text-white placeholder:text-white/50 focus-visible:ring-0 h-12 px-6"
                />
                <Button className="rounded-full h-12 px-8 text-[14px] font-normal bg-white text-black hover:bg-white/90 w-full sm:w-auto">
                  Get Started
                </Button>
              </div>
            </div>
            {/* Abstract Background Shapes Removed */}
          </FadeIn>
        </section>

        {/* FAQ */}
        <section className="py-[100px]">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column - Title & Description */}
            <FadeIn>
              <div className="space-y-6">
                <div className="text-[14px] font-medium text-muted-foreground">Faqs</div>
                <h2 className="text-[38px] font-light leading-[1.21]">Frequently asked questions.</h2>
                <p className="text-[16px] text-muted-foreground font-light">
                  Have questions about our design process? We're here to help guide you through every step.
                </p>
                <Button className="rounded-full px-6 py-[9px] text-[14px] font-normal bg-[#343d41] text-white hover:bg-[#343d41]/90 h-auto">
                  Contact Us
                </Button>
              </div>
            </FadeIn>

            {/* Right Column - Questions */}
            <FadeInStagger className="space-y-0">
              {[
                {
                  question: "What architectural styles do you specialize in?",
                  answer: "We design across the full spectrum—from French Chateaus and classical European estates to modern contemporary villas and traditional farmhouse manors. Your vision guides the style."
                },
                {
                  question: "What is the design process like?",
                  answer: "Our collaborative process begins with understanding your vision. We work closely with you through concept development, detailed architectural plans, and refinements until every detail reflects your dream home."
                },
                {
                  question: "What size homes do you typically design?",
                  answer: "We specialize in luxury custom homes ranging from 5,000 to 12,000+ square feet. No dream is too ambitious—your imagination is the only limit."
                },
                {
                  question: "Do you work with clients outside of Ontario?",
                  answer: "Yes, in addition to Oakville and the Greater Toronto Area, we also serve clients in Florida and Miami. We bring the same bespoke design approach to every project."
                }
              ].map((item, i) => (
                <FadeInItem key={i}>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`item-${i}`} className="border-b border-gray-200">
                      <AccordionTrigger className="hover:no-underline py-6 text-[16px] font-normal text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 text-[16px] font-light">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#1c1e1f] text-white py-16 mt-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <Link href="/" className="block">
                <Image
                  src="/Logo/Asset 3.svg"
                  alt="Lucid Homes Logo"
                  width={150}
                  height={50}
                  className="h-20 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-white/60 max-w-sm leading-relaxed">
                Bespoke luxury home design since 2018. We transform your architectural vision into timeless reality.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6">Pages</h4>
              <ul className="space-y-4 text-white/60">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#properties" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="#blog" className="hover:text-white transition-colors">Inspiration</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6">Legal</h4>
              <ul className="space-y-4 text-white/60">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} Lucid Homes. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
              <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
              <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

