import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Palette, Users, Scale, PenTool, ArrowRight } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { assetUrl } from "@/lib/assetUrl";
import img1 from "@/assets/art-img_3009.jpg.asset.json";
import img2 from "@/assets/art-img_2886.jpg.asset.json";
import img3 from "@/assets/art-img_2872.jpg.asset.json";
import img4 from "@/assets/art-img_2942.jpg.asset.json";
import imgGroup from "@/assets/art-group.jpeg.asset.json";
import imgGreen from "@/assets/art-green.jpeg.asset.json";
import adFlyer from "@/assets/adulthood-flyer.jpeg.asset.json";
import adSelfie from "@/assets/adulthood-selfie.jpeg.asset.json";
import adArtists from "@/assets/adulthood-artists.jpeg.asset.json";
import adMichael from "@/assets/adulthood-michael.jpeg.asset.json";
import adViewing from "@/assets/adulthood-viewing.jpeg.asset.json";
import adAudience from "@/assets/adulthood-audience.jpeg.asset.json";

const adulthoodGallery = [
  { src: assetUrl(adFlyer), caption: "Adulthood: The Weight, The In-Between, The Becoming" },
  { src: assetUrl(adMichael), caption: "Michael Omotosho with the exhibition flyer" },
  { src: assetUrl(adArtists), caption: "Michael with a featured collaborating artist" },
  { src: assetUrl(adSelfie), caption: "A moment with a visitor at the show" },
  { src: assetUrl(adViewing), caption: "Guests taking in the work" },
  { src: assetUrl(adAudience), caption: "The audience at the opening" },
];

const ensembleGallery = [
  { src: assetUrl(img1), caption: "At the Ensemble exhibition stand" },
  { src: assetUrl(imgGroup), caption: "Featured artists at Ensemble: A Confluence of Art" },
  { src: assetUrl(img2), caption: "Framed works on display" },
  { src: assetUrl(img3), caption: "Guests viewing linocut prints" },
  { src: assetUrl(img4), caption: "Hosting a conversation with the artists" },
  { src: assetUrl(imgGreen), caption: "Moderating an artist Q&A session" },
];

const ArtServices = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-load');
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-fade-in');
      }, index * 100);
    });
  }, []);

  const services = [
    {
      title: "Artxpression",
      description: "A platform championing undergraduate artists through curated exhibitions. Two editions hosted at Redeemer's University in 2024 and 2025, with a third currently in the works.",
      icon: <Palette className="h-10 w-10 mb-4 text-primary" />,
    },
    {
      title: "Art Management",
      description: "Guiding visual artists in shaping their careers, exhibitions, and audiences. Currently managing Michael Omotosho, whose exhibition Adulthood recently concluded.",
      icon: <Users className="h-10 w-10 mb-4 text-primary" />,
    },
    {
      title: "Content for Creatives",
      description: "Storytelling, editorial, and visual content that helps creatives articulate their practice and reach wider audiences.",
      icon: <PenTool className="h-10 w-10 mb-4 text-primary" />,
    },
    {
      title: "Legal Advisory",
      description: "Intellectual property guidance for creatives — protecting artworks, contracts, licensing, and rights so the work is safeguarded as it grows.",
      icon: <Scale className="h-10 w-10 mb-4 text-primary" />,
    },
  ];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-earthy to-earthy-light">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="text-center text-white animate-on-load opacity-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Art Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Championing artists through exhibitions, management, content, and legal advisory — building platforms where African creativity can be seen, protected, and celebrated.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-on-load opacity-0">
            <h2 className="section-title">What I Offer</h2>
            <p className="section-subtitle">
              A holistic approach to supporting artists — from the first exhibition to the business and legal foundations behind a lasting practice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-all animate-on-load opacity-0">
                {s.icon}
                <h3 className="font-heading text-2xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artxpression feature */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-on-load opacity-0">
            <h2 className="section-title">Artxpression</h2>
            <p className="section-subtitle mx-auto">
              A platform I founded to spotlight undergraduate artists across Nigerian universities. Through Artxpression, students find their first stage — a curated exhibition space where their work is shown, sold, and taken seriously.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 md:p-10 animate-on-load opacity-0">
            <h3 className="font-heading text-2xl md:text-3xl mb-3">
              Ensemble: A Confluence of Art
            </h3>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Our debut exhibition at Redeemer's University brought together undergraduate artists from three institutions — Redeemer's University, the University of Lagos, and Obafemi Awolowo University, Ife — for a single, cross-campus conversation about form, identity, and craft.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ensembleGallery.map((item, i) => (
                <figure key={i} className="rounded-lg overflow-hidden shadow-sm bg-background group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.caption}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="p-4 text-sm text-muted-foreground">{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artist Management */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto animate-on-load opacity-0">
            <h2 className="section-title">Artist Management</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Beyond exhibitions, I work closely with individual artists to shape long-term careers — planning shows, positioning their work, and building the audiences their practice deserves.
            </p>
            <p className="text-lg text-muted-foreground">
              I currently manage visual artist <span className="font-medium text-foreground">Michael Omotosho</span>, whose solo exhibition <em>Adulthood</em> recently concluded — a body of work exploring the quiet weight of coming of age.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-custom">
          <div className="bg-card rounded-xl p-8 md:p-12 text-center animate-on-load opacity-0">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Work With Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you're an artist looking for management, a creative needing legal guidance, or an institution interested in partnering with Artxpression — let's talk.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium shadow-sm transition-colors hover:bg-primary/90"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ArtServices;
