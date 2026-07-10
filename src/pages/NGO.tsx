import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Heart,
  GraduationCap,
  Utensils,
  Sparkles,
  Users,
  ArrowRight,
  Quote,
  Eye,
  HandHeart,
} from "lucide-react";
import { assetUrl } from "@/lib/assetUrl";
import imgAudience from "@/assets/ngo-audience.jpeg.asset.json";
import imgGlasses from "@/assets/ngo-glasses-distribution.jpeg.asset.json";
import imgEyeTest from "@/assets/ngo-eye-test.jpeg.asset.json";
import imgStudent from "@/assets/ngo-student-classroom.jpg.asset.json";
import imgStudentsBw from "@/assets/ngo-students-bw.jpg.asset.json";
import imgVolunteer from "@/assets/ngo-volunteer.jpg.asset.json";

const NGO_URL = "https://thtgtrng.wixsite.com/thtgtr";

const stats = [
  { value: "2021", label: "Founded", icon: Sparkles },
  { value: "500+", label: "Children reached", icon: Users },
  { value: "100%", label: "Community-driven", icon: HandHeart },
];

const pillars = [
  {
    icon: GraduationCap,
    title: "Education",
    body: "Holistic learning that blends academic knowledge with practical, life-ready skills.",
    tint: "bg-sage/15 text-sage-dark",
  },
  {
    icon: Utensils,
    title: "Basic Needs",
    body: "Food banks, clean water and essentials so no child has to learn on an empty stomach.",
    tint: "bg-ochre/20 text-clay",
  },
  {
    icon: Eye,
    title: "Health & Sight",
    body: "Free eye testing and prescription eyewear so every child can see the board — and their future.",
    tint: "bg-rose/15 text-rose-dark",
  },
  {
    icon: Heart,
    title: "Spiritual Growth",
    body: "Nurturing values, dignity and belonging so children grow into responsible young people.",
    tint: "bg-terracotta/15 text-earthy-dark",
  },
];

const stories = [
  {
    image: assetUrl(imgEyeTest),
    kicker: "Sight Restored",
    title: "Free eye testing for the community",
    body: "In partnership with local optometrists, we set up mobile testing stations where anyone can walk in, be examined and leave with the prescription they need.",
  },
  {
    image: assetUrl(imgGlasses),
    kicker: "Prescription Eyewear",
    title: "Distributing glasses, one pair at a time",
    body: "Hundreds of donated frames sorted, fitted and matched to prescriptions — turning what would have been discarded into life-changing gifts.",
  },
  {
    image: assetUrl(imgStudent),
    kicker: "In the Classroom",
    title: "Learning environments that lift children up",
    body: "We invest in the small things — desks, materials, quiet corners — that help a child feel safe enough to be curious again.",
  },
];

const gallery = [
  { src: assetUrl(imgAudience), caption: "Community outreach gathering" },
  { src: assetUrl(imgStudentsBw), caption: "Learners engaged in class" },
  { src: assetUrl(imgVolunteer), caption: "Coordinating on the ground" },
];

const NGO = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(".animate-on-load");
    animatedElements.forEach((el, i) => {
      setTimeout(() => el.classList.add("animate-fade-in"), i * 90);
    });
  }, []);

  return (
    <PageLayout>
      {/* HERO — magazine split */}
      <section className="relative overflow-hidden bg-cream-50">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-sage/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 w-[520px] h-[520px] rounded-full bg-rose/15 blur-3xl" />

        <div className="container-custom relative z-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 animate-on-load opacity-0">
              <span className="inline-flex items-center gap-2 rounded-full bg-rose/10 text-rose-dark px-4 py-1.5 text-sm font-medium tracking-wide">
                <Heart size={14} className="fill-rose-dark" />
                A non-profit founded in 2021
              </span>
              <h1 className="mt-6 font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-earthy-dark">
                The Hand that{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-rose-dark">Gives</span>
                  <span className="absolute inset-x-0 bottom-1 h-3 bg-ochre/40 -z-0 rounded-sm" />
                </span>{" "}
                the Rose
              </h1>
              <p className="mt-6 text-lg md:text-xl text-earthy max-w-xl leading-relaxed">
                A grassroots movement restoring hope to street and underprivileged
                children through education, feeding, healthcare and dignity.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={NGO_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-rose-dark hover:bg-rose text-white shadow-lg shadow-rose-dark/20">
                    Visit the NGO
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#donate">
                  <Button size="lg" variant="outline" className="border-earthy text-earthy hover:bg-earthy hover:text-white">
                    Donate
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 animate-on-load opacity-0">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-sage/40 -z-10" />
                <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-2xl bg-ochre/40 -z-10" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                  <img
                    src={assetUrl(imgStudent)}
                    alt="A child at her desk in the classroom"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earthy-dark/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm italic opacity-90">
                      Every child deserves a desk, a meal, and a chance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="bg-earthy-dark text-white py-10 md:py-14">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <div key={i} className="flex items-center gap-4 animate-on-load opacity-0">
                <div className="rounded-full bg-ochre/20 p-3">
                  <Icon className="h-6 w-6 text-ochre" />
                </div>
                <div>
                  <div className="font-heading text-3xl md:text-4xl text-white">{value}</div>
                  <div className="text-sm text-cream-100/80 uppercase tracking-wider">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION PILLARS */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-14 animate-on-load opacity-0">
            <span className="text-sm uppercase tracking-[0.2em] text-rose-dark font-semibold">What we do</span>
            <h2 className="mt-3 font-heading text-4xl md:text-5xl text-earthy-dark">
              Four pillars, one promise.
            </h2>
            <p className="mt-4 text-lg text-earthy leading-relaxed">
              We meet children where they are — with food, learning, healthcare and love —
              and walk with them toward who they can become.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map(({ icon: Icon, title, body, tint }, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-7 border border-earthy/10 hover:border-earthy/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-on-load opacity-0"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${tint} mb-5`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-2xl text-earthy-dark mb-2">{title}</h3>
                <p className="text-earthy/80 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-terracotta via-rose to-rose-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-on-load opacity-0">
            <Quote className="h-12 w-12 mx-auto mb-6 text-ochre" />
            <p className="font-heading text-2xl md:text-4xl leading-tight italic">
              "You cannot hold a rose out to someone and not have its fragrance
              linger on your own hand."
            </p>
            <div className="mt-6 text-cream-50/90 text-sm uppercase tracking-[0.25em]">
              — Our founding belief
            </div>
          </div>
        </div>
      </section>

      {/* STORIES — zigzag */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-14 animate-on-load opacity-0">
            <span className="text-sm uppercase tracking-[0.2em] text-sage-dark font-semibold">Stories from the ground</span>
            <h2 className="mt-3 font-heading text-4xl md:text-5xl text-earthy-dark">
              Small acts. Real change.
            </h2>
          </div>

          <div className="space-y-16 md:space-y-24">
            {stories.map((s, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center animate-on-load opacity-0 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative">
                  <div
                    className={`absolute inset-0 rounded-2xl -z-10 ${
                      i % 3 === 0 ? "bg-sage/30" : i % 3 === 1 ? "bg-ochre/30" : "bg-rose/20"
                    } translate-x-4 translate-y-4`}
                  />
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-rose-dark font-semibold mb-3">
                    {s.kicker}
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl text-earthy-dark mb-4 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-lg text-earthy/85 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-20 md:py-24 bg-cream-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 animate-on-load opacity-0">
            <div>
              <span className="text-sm uppercase tracking-[0.2em] text-rose-dark font-semibold">In pictures</span>
              <h2 className="mt-2 font-heading text-4xl md:text-5xl text-earthy-dark">
                Moments from the field
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((g, i) => (
              <figure
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow-md aspect-[4/5] animate-on-load opacity-0"
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earthy-dark/80 via-earthy-dark/10 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4 text-white font-medium">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE CTA */}
      <section id="donate" className="py-20 md:py-28 bg-earthy-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-center animate-on-load opacity-0">
            <div className="md:col-span-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-rose/20 text-cream-50 px-4 py-1.5 text-sm font-medium">
                <HandHeart size={14} /> Partner with us
              </span>
              <h2 className="mt-5 font-heading text-4xl md:text-5xl leading-tight">
                Your gift becomes a meal, a book, a pair of glasses.
              </h2>
              <p className="mt-5 text-lg text-cream-100/85">
                Every naira and every hour goes directly toward the children we serve.
                Give once, give monthly, or share our work with someone who cares.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={NGO_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-rose-dark hover:bg-rose text-white">
                    Learn more about our work
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-cream-50/40 text-cream-50 bg-transparent hover:bg-white hover:text-earthy-dark">
                    Get in touch
                  </Button>
                </Link>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="rounded-2xl bg-gradient-to-br from-ochre to-clay p-1 shadow-2xl">
                <div className="rounded-[15px] bg-earthy-dark p-7">
                  <div className="text-xs uppercase tracking-[0.2em] text-ochre mb-3">Donation account</div>
                  <div className="text-cream-50 text-sm mb-1">Monie Point</div>
                  <div className="font-heading text-3xl text-white tracking-wide mb-2">
                    8081 345 328
                  </div>
                  <div className="text-cream-100/70 text-sm">
                    The Hand that Gives the Rose
                    <br />
                    <span className="text-cream-100/50">(owned by Jesunimofe)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NGO;
