import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Monitor,
  Smartphone,
  Palette,
  Rocket,
  Search,
  ShoppingCart,
  Sparkles,
  Star,
  X,
  Zap,
  PenTool,
  Plug,
} from 'lucide-react';
import './index.css';

import WhatsAppIcon from './assets/icons/WhatsAppIcon';
import Logo from './assets/icons/Logo';

const WHATSAPP_NUMBER = '919128787703';
const defaultMessage =
  'Hi RappTech, I am interested in getting a website for my business.';
const whatsapp = (message = defaultMessage) =>
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener,noreferrer'
  );

const services = [
  [
    'Website Development',
    Monitor,
    'We build professional, responsive websites tailored to your business needs.',
  ],
  [
    'App Development',
    Smartphone,
    'We build fast, reliable and user-friendly mobile apps for iOS and Android.',
  ],
  [
    'Landing Pages',
    Rocket,
    'Focused pages for services, campaigns, products and lead generation.',
  ],
  [
    'E-commerce',
    ShoppingCart,
    'Online stores with product pages, cart, checkout and payment integrations.',
  ],
  // [
  //   'Website Redesign',
  //   Palette,
  //   'Turn an outdated website into a modern, mobile-first experience.',
  // ],
  [
    'SEO Setup',
    Search,
    'Technical and on-page foundations to help customers discover your website.',
  ],

  [
    'Custom Development',
    Code2,
    'Custom features, integrations and workflows when you need more.',
  ],
  // [
  //   'Website Maintenance',
  //   Zap,
  //   'Updates, monitoring and ongoing support after launch.',
  // ],
  [
    'UI/UX Design',
    PenTool,
    'Clean, intuitive and engaging designs that create better digital experiences.',
  ],

  [
    'API Integration',
    Plug,
    'Connect your website and apps with payment gateways, APIs and third-party services.',
  ],
];
const industries = [
  'Clinics & Doctors',
  'Restaurants & Cafes',
  'Schools & Coaching',
  'Gyms & Fitness',
  'Salons & Beauty',
  'Real Estate',
  'Consultants & Lawyers',
  'Photographers',
  'Contractors',
  'Local Businesses',
];
const plans = [
  {
    name: 'Starter',
    price: '₹4,999',
    desc: 'For businesses getting online for the first time.',
    features: [
      '1–3 pages',
      'Mobile responsive',
      // 'WhatsApp button',
      // 'Google Maps',
      'Contact form',
      'Basic SEO',
      '5–7 day delivery',
      '1 Week Support',
    ],
  },
  {
    name: 'Business',
    price: '₹9,999',
    desc: 'A complete online presence for growing businesses.',
    popular: true,
    features: [
      '5–7 pages',
      'Custom design',
      'Gallery & testimonials',
      // 'WhatsApp integration',
      'Contact form',
      // 'Google Maps',
      'Basic SEO',
      'Social media links',
      '1 Month Support',
    ],
  },
  {
    name: 'Professional',
    price: '₹14,999',
    desc: 'For businesses that need more pages and functionality.',
    features: [
      '8–12 pages',
      'Custom UI',
      'Advanced forms',
      'Blog / news section',
      'Animations',
      'SEO setup',
      'Analytics',
      'Priority support',
    ],
  },
];
const projects = [
  [
    'Restaurant',
    '', //include name here once we got the client name
    'A modern restaurant experience with menu, gallery and reservation CTA.',
    'from-orange-400/30 to-rose-500/10',
  ],
  [
    'Clinic',
    '',
    'A clean healthcare website focused on services, doctors and appointments.',
    'from-cyan-400/30 to-blue-500/10',
  ],
  [
    'Education',
    '',
    'A responsive coaching website for courses, admissions and enquiry leads.',
    'from-violet-400/30 to-fuchsia-500/10',
  ],
];
const faqs = [
  [
    'How much does a website cost?',
    'Our starter website package begins at ₹4,999. The final price depends on the number of pages, design requirements and functionality.',
  ],
  [
    'How long does a website take?',
    'A typical starter website can be completed in 5–7 working days after we receive the required content, images and business information.',
  ],
  [
    'Do I need to buy a domain and hosting?',
    'We can help you purchase and configure both. Domain and hosting charges are separate from the website development package.',
  ],
  [
    'Can you redesign my existing website?',
    'Yes. We can modernize your existing website, improve mobile responsiveness and restructure content around your business goals.',
  ],
  [
    'Can I update my website later?',
    'Yes. We can provide maintenance support or add a CMS/admin panel when you need to manage content yourself.',
  ],
  [
    'Do you provide support after launch?',
    'Yes. Support is included according to your selected package, and ongoing maintenance plans are available for regular updates.',
  ],
];

function Heading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
        <Sparkles size={15} />
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-400">{text}</p>
    </div>
  );
}
function App() {
  const [menu, setMenu] = useState(false),
    [faq, setFaq] = useState(0);
  const nav = [
    ['Services', 'services'],
    ['Work', 'work'],
    ['Pricing', 'pricing'],
    ['Process', 'process'],
    ['FAQ', 'faq'],
  ];
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050b14] text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#050b14]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex items-center pl-8">
              <Logo size={240} />
            </div>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map(([l, id]) => (
              <a
                key={id}
                href={'#' + id}
                className="text-sm font-medium text-slate-400 hover:text-white"
              >
                {l}
              </a>
            ))}
          </nav>
          <button
            onClick={() => whatsapp()}
            className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 hover:bg-blue-50 md:flex"
          >
            <WhatsAppIcon size={25} className="text-[#25D366]" />
            Get Started
          </button>
          <button
            onClick={() => setMenu(!menu)}
            className="rounded-lg border border-white/10 p-2 md:hidden"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        {menu && (
          <div className="border-t border-white/5 bg-[#07111f] px-5 py-5 md:hidden">
            {nav.map(([l, id]) => (
              <a
                key={id}
                href={'#' + id}
                onClick={() => setMenu(false)}
                className="block rounded-lg px-3 py-3 text-slate-300 hover:bg-white/5"
              >
                {l}
              </a>
            ))}
            <button
              onClick={() => {
                setMenu(false);
                whatsapp();
              }}
              className="mt-2 w-full rounded-lg bg-blue-500 px-4 py-3 font-bold"
            >
              Start Your Website
            </button>
          </div>
        )}
      </header>
      <main>
        <section className="relative grid-bg pt-36">
          <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />
          <div className="mx-auto max-w-7xl px-5 pb-24 pt-16 lg:px-8 lg:pb-32">
            <div className="mx-auto max-w-5xl text-center">
              <div className="reveal mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Affordable websites for growing businesses
              </div>
              <h1 className="reveal font-display text-5xl font-bold leading-[1.04] tracking-[-.04em] sm:text-6xl lg:text-8xl">
                Your business.
                <br />
                <span className="gradient-text">Your website.</span>
              </h1>
              <p className="reveal mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
                We design and build fast, modern websites that help small
                businesses look professional, reach more customers and grow
                online.
              </p>
              <div className="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  onClick={() => whatsapp()}
                  className="group inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-4 font-bold shadow-xl shadow-blue-500/20 hover:-translate-y-1 hover:bg-blue-400"
                >
                  Get Your Website
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
                <a
                  href="#services"
                  className="rounded-full border border-white/10 bg-white/5 px-7 py-4 font-semibold hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>
              <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
                {[
                  'Mobile-first',
                  'Fast delivery',
                  'WhatsApp ready',
                  'SEO ready',
                ].map((x) => (
                  <span key={x} className="flex items-center gap-2">
                    <Check size={16} className="text-blue-400" />
                    {x}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative mx-auto mt-20 max-w-5xl">
              <div className="absolute -inset-10 rounded-[3rem] bg-blue-500/10 blur-3xl" />
              <div className="glass animate-float relative overflow-hidden rounded-3xl p-2 shadow-glow">
                <div className="rounded-[1.35rem] border border-white/10 bg-[#0a1422] p-5 sm:p-7">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-5">
                    <i className="dot bg-red-400" />
                    <i className="dot bg-yellow-400" />
                    <i className="dot bg-green-400" />
                    <div className="ml-3 h-8 flex-1 rounded-lg bg-white/5" />
                  </div>
                  <div className="grid gap-8 py-10 md:grid-cols-2 md:items-center">
                    <div>
                      <div className="mb-4 h-3 w-24 rounded-full bg-blue-400/40" />
                      <div className="h-10 max-w-md rounded-lg bg-white/10" />
                      <div className="mt-3 h-10 max-w-xs rounded-lg bg-white/10" />
                      <div className="mt-6 h-4 max-w-sm rounded bg-white/5" />
                      <div className="mt-2 h-4 max-w-sm rounded bg-white/5" />
                      <div className="mt-7 h-11 w-36 rounded-full bg-blue-500/80" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-32 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-400/5" />
                      <div className="h-32 rounded-2xl bg-gradient-to-br from-violet-500/30 to-fuchsia-400/5" />
                      <div className="col-span-2 h-24 rounded-2xl bg-white/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="border-t border-white/5 py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Heading
              eyebrow="What we build"
              title="Everything you need to get online."
              text="From a simple business website to a complete online store, we build practical digital experiences around your business."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(([title, Icon, text], i) => (
                <article
                  key={title}
                  className="group rounded-2xl border border-white/10 bg-white/[.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[.06]"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 transition group-hover:bg-blue-500 group-hover:text-white">
                    <Icon size={21} />
                  </div>
                  <h3 className="font-display text-xl font-semibold">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="border-y border-white/5 bg-white/[.015] py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <div className="mb-4 text-sm font-semibold uppercase tracking-[.2em] text-blue-300">
                Built for business
              </div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Websites for the businesses that keep communities moving.
              </h2>
              <p className="mt-5 leading-7 text-slate-400">
                We keep the process simple so you can focus on your business,
                not technical complexity.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {industries.map((x) => (
                <div
                  key={x}
                  className="rounded-full border border-white/10 bg-white/[.03] px-4 py-2.5 text-sm text-slate-300"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  {x}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="work" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Heading
              eyebrow="Selected concepts"
              title="Made to look like your business means business."
              text="Starter concepts we can customize for different industries. Your final website gets your branding, content, images and business details."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map(([cat, title, text, accent]) => (
                <article
                  key={title}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.025]"
                >
                  <div
                    className={`relative h-60 bg-gradient-to-br ${accent} p-5`}
                  >
                    <div className="absolute inset-5 rounded-2xl border border-white/10 bg-[#091321]/80 p-4 shadow-2xl transition duration-500 group-hover:-translate-y-2">
                      <div className="flex gap-2">
                        <i className="dot bg-red-400" />
                        <i className="dot bg-yellow-400" />
                        <i className="dot bg-green-400" />
                        <div className="ml-2 h-3 flex-1 rounded bg-white/5" />
                      </div>
                      <div className="mt-8 h-5 w-1/2 rounded bg-white/10" />
                      <div className="mt-3 h-3 w-3/4 rounded bg-white/5" />
                      <div className="mt-6 grid grid-cols-3 gap-2">
                        <div className="h-20 rounded-lg bg-white/5" />
                        <div className="h-20 rounded-lg bg-white/5" />
                        <div className="h-20 rounded-lg bg-white/5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-semibold uppercase tracking-[.18em] text-blue-300">
                      {cat}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {text}
                    </p>
                    <button
                      onClick={() =>
                        whatsapp(
                          `Hi RappTech, I would like to see the ${cat} website demo.`
                        )
                      }
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-300"
                    >
                      Request demo <ArrowRight size={15} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="process"
          className="border-y border-white/5 bg-white/[.015] py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Heading
              eyebrow="Simple process"
              title="From idea to online in five steps."
              text="No complicated agency process. We keep everything clear, practical and focused on getting you launched."
            />
            <div className="grid gap-4 md:grid-cols-5">
              {[
                [
                  '01',
                  'Tell us',
                  'Share your business, goals and requirements.',
                ],
                ['02', 'Choose', 'Pick a package or request a custom quote.'],
                ['03', 'Build', 'We design and develop your website.'],
                ['04', 'Review', 'You review the demo and request changes.'],
                ['05', 'Launch', 'We deploy and help connect your domain.'],
              ].map(([n, t, x]) => (
                <div
                  key={n}
                  className="rounded-2xl border border-white/10 bg-[#08111e] p-6"
                >
                  <div className="text-sm font-bold text-blue-400">{n}</div>
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {t}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{x}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="pricing" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Heading
              eyebrow="Simple pricing"
              title="Professional websites without the agency price tag."
              text="Start small, launch quickly and add more functionality as your business grows."
            />
            <div className="grid gap-5 lg:grid-cols-3">
              {plans.map((p) => (
                <article
                  key={p.name}
                  className={`relative rounded-3xl border p-7 ${p.popular ? 'border-blue-400/40 bg-blue-500/[.07] shadow-glow' : 'border-white/10 bg-white/[.025]'}`}
                >
                  {p.popular && (
                    <div className="absolute right-6 top-6 rounded-full bg-blue-500 px-3 py-1 text-xs font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="font-display text-2xl font-semibold">
                    {p.name}
                  </h3>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">
                    {p.desc}
                  </p>
                  <div className="mt-7">
                    <span className="font-display text-5xl font-bold">
                      {p.price}
                    </span>
                    <span className="ml-2 text-sm text-slate-500">
                      / project
                    </span>
                  </div>
                  <div className="my-7 h-px bg-white/10" />
                  <ul className="space-y-3">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                          <Check size={13} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() =>
                      whatsapp(
                        `Hi RappTech, I am interested in the ${p.name} package (${p.price}).`
                      )
                    }
                    className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-bold ${p.popular ? 'bg-blue-500 hover:bg-blue-400' : 'border border-white/10 bg-white/5 hover:bg-white/10'}`}
                  >
                    Get Started <ArrowRight size={17} />
                  </button>
                </article>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[.025] p-5 text-center text-sm text-slate-500">
              Custom websites and web applications are available from ₹20,000+.
              Domain, hosting, premium assets and third-party services are
              billed separately where applicable.
            </div>
          </div>
        </section>
        <section className="border-y border-white/5 bg-white/[.015] py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
            <div>
              <div className="mb-4 text-sm font-semibold uppercase tracking-[.2em] text-blue-300">
                Why RappTech
              </div>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Professional websites without unnecessary complexity.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                We focus on what small businesses actually need: a trustworthy
                online presence, clear information, fast performance and an easy
                way for customers to contact you.
              </p>
              <button
                // onClick={() => whatsapp()}
                onClick={() => {
                  window.location.href = 'mailto:rajeshgupta2060@gmail.com';
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-slate-950 hover:bg-blue-50"
              >
                Talk to us <ArrowRight size={17} />
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  '01',
                  'Affordable',
                  'Transparent packages designed for small businesses.',
                ],
                [
                  '02',
                  'Mobile-first',
                  'A great experience across phones, tablets and desktops.',
                ],
                [
                  '03',
                  'Fast',
                  'A practical process designed to get you launched quickly.',
                ],
                [
                  '04',
                  'Built to grow',
                  'Start with a website and add features as you grow.',
                ],
              ].map(([n, t, x]) => (
                <div
                  key={n}
                  className="rounded-2xl border border-white/10 bg-[#08111e] p-6"
                >
                  <div className="text-xs font-bold text-blue-400">{n}</div>
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {t}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{x}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <Heading
              eyebrow="FAQ"
              title="Questions, answered."
              text="A few things businesses usually want to know before getting started."
            />
            <div className="space-y-3">
              {faqs.map(([q, a], i) => {
                const open = faq === i;
                return (
                  <div
                    key={q}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.025]"
                  >
                    <button
                      onClick={() => setFaq(open ? -1 : i)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                    >
                      <span className="font-semibold">{q}</span>
                      <ChevronDown
                        size={19}
                        className={`text-slate-500 transition ${open ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {open && (
                      <div className="border-t border-white/10 px-6 pb-6 pt-4 text-sm leading-7 text-slate-400">
                        {a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="px-5 pb-24 lg:px-8 lg:pb-32">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-violet-500/10 p-8 text-center sm:p-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500">
                <Star size={21} fill="currentColor" />
              </div>
              <h2 className="font-display text-4xl font-bold sm:text-5xl">
                Ready to take your business online?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Tell us about your business and we’ll help you choose the right
                website solution.
              </p>
              <button
                onClick={() => whatsapp()}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-slate-950 hover:-translate-y-1 hover:bg-blue-50"
              >
                <WhatsAppIcon size={25} className="text-[#25D366]" />
                Start on WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <div className="max-w-sm">
              <a href="#" className="flex items-center gap-3">
                <div className="flex items-center">
                  <Logo size={220} />
                </div>
              </a>
              <p className="mt-5 text-sm leading-6 text-slate-500">
                Professional websites and digital solutions for growing
                businesses.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 text-sm sm:grid-cols-3">
              <div>
                <div className="mb-4 font-semibold">Company</div>
                <div className="space-y-3 text-slate-500">
                  <a href="#services" className="block hover:text-white">
                    Services
                  </a>
                  <a href="#work" className="block hover:text-white">
                    Work
                  </a>
                  <a href="#pricing" className="block hover:text-white">
                    Pricing
                  </a>
                </div>
              </div>
              <div>
                <div className="mb-4 font-semibold">Help</div>
                <div className="space-y-3 text-slate-500">
                  <a href="#faq" className="block hover:text-white">
                    FAQ
                  </a>
                  <button
                    onClick={() => {
                      window.location.href = 'mailto:rajeshgupta2060@gmail.com';
                    }}
                    className="block hover:text-white"
                  >
                    Contact
                  </button>
                  <button
                    onClick={() => {
                      window.location.href = 'tel:+919555122670';
                    }}
                    className="block hover:text-white"
                  >
                    Call
                  </button>
                </div>
              </div>
              <div>
                <div className="mb-4 font-semibold">Start</div>
                <div className="space-y-3 text-slate-500">
                  <button
                    onClick={() => whatsapp()}
                    className="block hover:text-white"
                  >
                    WhatsApp
                  </button>
                  <a href="#pricing" className="block hover:text-white">
                    Packages
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-slate-600 sm:flex-row sm:justify-between">
            <span>
              © {new Date().getFullYear()} RappTech. All rights reserved.
            </span>
            <span>Websites • E-commerce • Digital Solutions</span>
          </div>
        </div>
      </footer>
      <button
        onClick={() => whatsapp()}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:-translate-y-1"
      >
        <WhatsAppIcon size={25} className="text-white" />
      </button>
    </div>
  );
}
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
