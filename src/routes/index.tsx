import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Megaphone,
  PenLine,
  Search,
  Share2,
  Sparkles,
  Target,
  Mail,
  Facebook,
  Instagram,
  Users,
  TrendingUp,
  MonitorSmartphone,
  ShieldCheck,
  Rocket,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, XIcon } from "@/components/site/SiteFooter";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/brand";
import heroImage from "@/assets/hero.jpg";
import marketingBanner from "@/assets/marketing-banner.jpg";
import workSocial from "@/assets/work-social.jpg";
import workAds from "@/assets/work-ads.jpg";
import workSeo from "@/assets/work-seo.jpg";
import logoAsset from "@/assets/dayonze-pro-logo.png.asset.json";

const TITLE = "Dayonze Pro | Digital Marketing & Online Growth";
const DESCRIPTION =
  "Dayonze Pro helps businesses attract attention, connect with their ideal audience, generate quality leads, and grow online with smart digital marketing strategies.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Dayonze Pro",
          description: DESCRIPTION,
          email: CONTACT_EMAIL,
          sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram, SOCIAL_LINKS.twitter],
        }),
      },
    ],
  }),
});

const pillars = [
  {
    icon: Target,
    title: "Strategic Marketing",
    body: "Data-driven strategies designed around your goals.",
  },
  {
    icon: PenLine,
    title: "Creative Content",
    body: "Content that captures attention and communicates your value.",
  },
  {
    icon: Users,
    title: "Audience Growth",
    body: "Strategies designed to attract and engage the right audience.",
  },
  {
    icon: BarChart3,
    title: "Results Focused",
    body: "Every campaign is built with measurable growth in mind.",
  },
];

const services = [
  {
    icon: Users,
    title: "Social Media Marketing",
    body: "Build a stronger social presence with strategic content, audience engagement, and growth-focused strategies.",
  },
  {
    icon: MonitorSmartphone,
    title: "Social Media Management",
    body: "Keep your social media active, professional, consistent, and engaging while you focus on running your business.",
  },
  {
    icon: PenLine,
    title: "Content Marketing",
    body: "Create valuable content that educates your audience, builds trust, increases engagement, and positions your brand as an authority.",
  },
  {
    icon: Megaphone,
    title: "Digital Advertising",
    body: "Reach the right audience with targeted advertising campaigns designed to increase awareness, generate leads, and drive conversions.",
  },
  {
    icon: ShieldCheck,
    title: "Brand Strategy",
    body: "Develop a clear and consistent digital brand identity that makes your business recognizable, professional, and memorable.",
  },
  {
    icon: Share2,
    title: "Lead Generation",
    body: "Use strategic digital marketing campaigns to attract potential customers and turn online attention into valuable business opportunities.",
  },
  {
    icon: Search,
    title: "SEO & Online Visibility",
    body: "Improve your online discoverability and help your target audience find your business when they're searching for solutions you provide.",
  },
  {
    icon: TrendingUp,
    title: "Marketing Strategy",
    body: "Get a clear roadmap for growing your online presence with marketing strategies built around your audience, goals, and business.",
  },
];

const reasons = [
  {
    icon: Target,
    title: "Strategy before execution",
    body: "Every campaign starts with your goals and audience, never a template.",
  },
  {
    icon: BarChart3,
    title: "Transparent reporting",
    body: "Clear numbers so you always know what your marketing is doing.",
  },
  {
    icon: Sparkles,
    title: "Consistent brand voice",
    body: "One recognisable identity across every channel you appear on.",
  },
  {
    icon: Rocket,
    title: "Built for growth",
    body: "Whether you're starting out or scaling up, the plan grows with you.",
  },
];

const steps = [
  {
    step: "01",
    title: "Discover",
    body: "We learn your business, audience, offers, and what growth means to you.",
  },
  {
    step: "02",
    title: "Strategise",
    body: "We map the channels, messaging, and campaigns that fit your goals.",
  },
  {
    step: "03",
    title: "Execute",
    body: "Content, ads, and social go live with consistent hands-on management.",
  },
  {
    step: "04",
    title: "Optimise",
    body: "We measure results, refine what works, and scale it further.",
  },
];

const portfolio = [
  {
    tag: "Social Media",
    title: "Lifestyle brand relaunch",
    body: "A refreshed content system that rebuilt an inactive social presence into a daily, engaged community.",
    image: workSocial,
  },
  {
    tag: "Advertising",
    title: "Lead generation campaign",
    body: "Targeted paid campaigns structured around clear offers and measured cost per enquiry.",
    image: workAds,
  },
  {
    tag: "SEO & Content",
    title: "Search visibility build",
    body: "Content and on-page SEO focused on the questions real customers search for.",
    image: workSeo,
  },
];

const testimonials = [
  {
    quote:
      "Dayonze Pro took our social media from inconsistent to something we're actually proud of. The strategy was clear from day one.",
    name: "Amara O.",
    role: "Founder, retail brand",
  },
  {
    quote:
      "The reporting is what sold me. I finally understand where the leads are coming from and what's worth spending on.",
    name: "Daniel K.",
    role: "Director, services business",
  },
  {
    quote:
      "Professional, responsive, and genuinely invested in our growth. Our enquiries have never been steadier.",
    name: "Chidi N.",
    role: "Owner, consultancy",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
      {children}
    </p>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-hero-gradient">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
                Turn Your Digital Presence Into Real{" "}
                <span className="text-primary">Business Growth.</span>
              </h1>
              <p className="mt-6 max-w-lg text-muted-foreground">
                Dayonze Pro helps businesses attract attention, connect with their ideal audience,
                generate quality leads, and grow online with smart digital marketing strategies.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="hero" size="lg" asChild>
                  <a href="#contact">Start Growing Today</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#services">Explore Our Services</a>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {["D", "P", "M", "A"].map((initial) => (
                    <span
                      key={initial}
                      className="flex size-9 items-center justify-center rounded-full border-2 border-background bg-secondary font-display text-xs font-bold text-primary"
                    >
                      {initial}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Helping brands grow, connect,
                  <br />
                  and convert online.
                </p>
              </div>
            </div>

            <div>
              <img
                src={heroImage}
                alt="Dayonze Pro digital marketing analytics and social media growth illustration"
                width={1408}
                height={1104}
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="border-y border-border/60 bg-surface">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border/60">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex gap-4 lg:px-6 lg:first:pl-0 lg:last:pr-0">
                <pillar.icon className="mt-0.5 size-7 shrink-0 text-primary" />
                <div>
                  <h3 className="text-sm font-bold">{pillar.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-py">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
            <div className="relative">
              <span className="absolute -left-1 -top-1 size-16 rounded-tl-2xl bg-brand-gradient" />
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-10 shadow-soft">
                <div className="flex flex-col items-center justify-center gap-6 py-8">
                  <span className="relative inline-flex animate-dz-float">
                    <span className="absolute -inset-6 rounded-full bg-brand-gradient opacity-20 blur-2xl animate-dz-pop" />
                    <span className="absolute -inset-3 rounded-full border border-dashed border-primary/40 animate-dz-spin-slow" />
                    <img
                      src={logoAsset.url}
                      alt="Dayonze Pro logo"
                      width={224}
                      height={224}
                      loading="lazy"
                      className="relative size-56 rounded-full transition-transform duration-700 group-hover:scale-105"
                    />
                  </span>
                  <p className="text-sm text-muted-foreground">Digital Marketing · Online Growth</p>
                </div>
              </div>
            </div>

            <div>
              <SectionLabel>About Us</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Meet <span className="text-primary">Dayonze Pro</span>
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Dayonze Pro is a digital marketing brand focused on helping businesses and personal
                  brands establish a stronger presence online.
                </p>
                <p>
                  We combine creativity, strategy, content, and digital marketing techniques to help
                  brands communicate better, reach more people, and create opportunities for growth.
                </p>
                <p>
                  Whether you're launching a new brand, trying to grow your social media presence, or
                  looking for a better way to attract customers online, Dayonze Pro provides
                  practical marketing solutions designed around your goals.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <a href="#contact">Let's Build Your Brand</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section-py border-y border-border/60 bg-surface">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Our Services</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Digital Marketing Services That Move Your Brand Forward.
              </h2>
              <p className="mt-4 text-muted-foreground">
                From building your online presence to attracting potential customers, Dayonze Pro
                provides practical digital marketing solutions designed to help your brand grow.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
                >
                  <service.icon className="size-6 text-primary" />
                  <h3 className="mt-4 text-base font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Explore All Services</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section id="why" className="section-py">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Why Choose Us</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Marketing that's planned, tracked, and accountable.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason) => (
                <div key={reason.title} className="rounded-xl border border-border bg-card p-6">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-brand-gradient text-brand-foreground">
                    <reason.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-base font-bold">{reason.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{reason.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="section-py border-y border-border/60 bg-surface">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Our Process</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">How we work with your brand</h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((item) => (
                <div key={item.step} className="rounded-xl border border-border bg-card p-6">
                  <p className="font-display text-3xl font-bold text-primary/70">{item.step}</p>
                  <h3 className="mt-4 text-base font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="section-py">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Portfolio</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Work we're proud of</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {portfolio.map((item, i) => (
                <article
                  key={item.title}
                  style={{ animationDelay: `${i * 140}ms` }}
                  className="card-lift group animate-dz-rise overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.tag} project — ${item.title}`}
                      width={1024}
                      height={700}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {item.tag}
                    </span>
                    <h3 className="mt-3 text-base font-bold transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="relative mt-14 overflow-hidden rounded-3xl border border-border bg-surface">
              <img
                src={marketingBanner}
                alt="Digital marketing analytics dashboard with social, email and campaign icons"
                width={1000}
                height={620}
                loading="lazy"
                className="h-64 w-full object-cover sm:h-80"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
              <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center gap-3 p-8 sm:p-12">
                <SectionLabel>Full-service marketing</SectionLabel>
                <h3 className="text-2xl font-bold sm:text-3xl">
                  Everything your brand needs to grow{" "}
                  <span className="text-brand-gradient">online.</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Social media, ads, content, SEO and analytics — managed in one place by Dayonze
                  Pro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="section-py border-y border-border/60 bg-surface">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Testimonials</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">What clients say</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {testimonials.map((item) => (
                <figure key={item.name} className="rounded-xl border border-border bg-card p-6">
                  <Quote className="size-6 text-primary" />
                  <blockquote className="mt-4 text-sm text-muted-foreground">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border/60 pt-4">
                    <p className="text-sm font-bold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-py">
          <div className="mx-auto max-w-7xl px-5">
            <div className="flex flex-col items-start gap-8 rounded-2xl border border-primary/40 bg-card p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
              <div className="flex items-start gap-5">
                <Rocket className="hidden size-12 shrink-0 text-primary sm:block" />
                <div>
                  <h2 className="text-2xl font-bold sm:text-3xl">Ready to Grow Your Brand Online?</h2>
                  <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                    Your audience is already online. Let's create a digital marketing strategy that
                    helps your brand get noticed, build trust, and generate opportunities.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="lg" asChild>
                  <a href={`mailto:${CONTACT_EMAIL}`}>Let's Work Together</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact">Book a Consultation</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-py border-t border-border/60 bg-surface">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Get in touch with <span className="text-primary">Dayonze Pro</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                Send us a message and we'll get back to you with next steps for growing your brand
                online.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-base font-bold">Email</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-2 inline-flex items-center gap-2 font-medium text-primary hover:underline"
              >
                <Mail className="size-4" />
                {CONTACT_EMAIL}
              </a>

              <h3 className="mt-8 text-base font-bold">Follow Dayonze Pro</h3>
              <div className="mt-3 flex flex-col gap-3 text-sm">
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Facebook className="size-4" /> Facebook
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Instagram className="size-4" /> Instagram
                </a>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <XIcon className="size-4" /> Twitter / X
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
