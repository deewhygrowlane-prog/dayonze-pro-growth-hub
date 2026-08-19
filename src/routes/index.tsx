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
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/brand";
import heroImage from "@/assets/hero.jpg";

const TITLE = "Dayonze Pro | Digital Marketing & Online Growth";
const DESCRIPTION =
  "Dayonze Pro helps businesses grow online through digital marketing, social media management, content marketing, advertising, branding, SEO, and lead generation.";

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

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    body: "Consistent posting, community engagement, and platform strategy that keeps your brand visible and active.",
  },
  {
    icon: PenLine,
    title: "Content Marketing",
    body: "Content built around what your audience searches for, cares about, and shares.",
  },
  {
    icon: Megaphone,
    title: "Advertising",
    body: "Paid campaigns across social and search, structured around clear goals and measured spend.",
  },
  {
    icon: Sparkles,
    title: "Branding",
    body: "A clear voice, look, and message so your brand is recognised wherever people meet it.",
  },
  {
    icon: Search,
    title: "SEO",
    body: "Technical and content SEO that helps the right people find you through search.",
  },
  {
    icon: Target,
    title: "Lead Generation",
    body: "Funnels, offers, and follow-up flows that turn interest into qualified enquiries.",
  },
];

const reasons = [
  "Strategy first — every campaign starts with your goals, not a template",
  "Clear reporting so you always know what your marketing is doing",
  "Hands-on management across social, search, and content",
  "Built for growth, whether you're starting out or scaling up",
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-hero-gradient text-surface-foreground">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-surface-foreground/20 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-surface-foreground/80">
                Digital Marketing & Online Growth
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                Grow online with <span className="text-brand-gradient">Dayonze Pro</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-surface-foreground/75">
                Dayonze Pro helps businesses grow online through digital marketing, social media
                management, content marketing, advertising, branding, SEO, and lead generation.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button variant="hero" size="xl" asChild>
                  <a href="#contact">Start with Dayonze Pro</a>
                </Button>
                <Button variant="onSurface" size="xl" asChild>
                  <a href="#services">See our services</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Dayonze Pro digital marketing growth illustration"
                width={1600}
                height={1200}
                className="w-full rounded-2xl border border-surface-foreground/10 shadow-glow"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-py">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
                About Dayonze Pro
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                A digital marketing partner focused on measurable online growth
              </h2>
            </div>
            <div className="space-y-5 text-muted-foreground">
              <p>
                Dayonze Pro is a digital marketing practice built for brands that want more than
                activity — they want results. We plan, run, and refine the channels that bring
                attention to your business and turn it into revenue.
              </p>
              <p>
                From social media and content to advertising, branding, SEO, and lead generation,
                Dayonze Pro works as an extension of your team: clear priorities, steady execution,
                and honest reporting on what's working.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section-py bg-secondary/50">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
                Services
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                What Dayonze Pro does for your brand
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-gradient text-brand-foreground">
                    <service.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section id="why" className="section-py">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
                Why Dayonze Pro
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Marketing that's planned, tracked, and accountable
              </h2>
              <ul className="mt-8 space-y-4">
                {reasons.map((reason) => (
                  <li key={reason} className="flex gap-3 text-muted-foreground">
                    <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { icon: BarChart3, stat: "Data-led", label: "Every decision backed by numbers" },
                { icon: Target, stat: "Goal-first", label: "Campaigns tied to real outcomes" },
                { icon: Share2, stat: "Always-on", label: "Consistent presence across channels" },
                { icon: Sparkles, stat: "Brand-safe", label: "One voice, everywhere you appear" },
              ].map((item) => (
                <div key={item.stat} className="rounded-2xl border border-border bg-card p-6">
                  <item.icon className="size-5 text-primary" />
                  <p className="mt-4 font-display text-xl font-bold">{item.stat}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-py bg-hero-gradient text-surface-foreground">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to grow with <span className="text-brand-gradient">Dayonze Pro</span>?
            </h2>
            <p className="mt-5 text-lg text-surface-foreground/75">
              Tell us about your business and we'll map out the fastest path to more visibility,
              more leads, and more sales online.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button variant="hero" size="xl" asChild>
                <a href={`mailto:${CONTACT_EMAIL}`}>Email Dayonze Pro</a>
              </Button>
              <Button variant="onSurface" size="xl" asChild>
                <a href="#contact">Contact details</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-py">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Get in touch with Dayonze Pro</h2>
              <p className="mt-5 text-muted-foreground">
                Send us a message and we'll get back to you with next steps.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-lg font-semibold">Email</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-2 inline-flex items-center gap-2 font-medium text-primary hover:underline"
              >
                <Mail className="size-4" />
                {CONTACT_EMAIL}
              </a>

              <h3 className="mt-8 text-lg font-semibold">Follow Dayonze Pro</h3>
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
                  <span className="font-display text-base font-bold leading-none">X</span> Twitter /
                  X
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
