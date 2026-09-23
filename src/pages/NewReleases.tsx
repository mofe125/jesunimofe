import PageLayout from "../components/layout/PageLayout";
import { Music, Calendar, ExternalLink } from "lucide-react";
import { assetUrl } from "@/lib/assetUrl";
import coverArt from "@/assets/no-safer-place-cover.png.asset.json";
import imgCoverDisplay from "@/assets/listening-party-cover-display.jpg.asset.json";
import imgGuests from "@/assets/listening-party-guests.jpg.asset.json";
import imgMic from "@/assets/release-1789907517976.jpg.asset.json";
import imgCrowd from "@/assets/release-1789907001718.jpg.asset.json";
import imgSmiles from "@/assets/release-1789907518383.jpg.asset.json";
import imgSeated from "@/assets/release-1789907517941.jpg.asset.json";
import imgDuet from "@/assets/release-1789907001175.jpg.asset.json";

const gallery = [
  { src: assetUrl(imgMic), caption: "Performing No Safer Place than This at the listening party" },
  { src: assetUrl(imgCoverDisplay), caption: "The single cover on display at the listening party" },
  { src: assetUrl(imgSeated), caption: "An intimate moment at the listening party" },
  { src: assetUrl(imgDuet), caption: "Sharing the story behind the song" },
  { src: assetUrl(imgCrowd), caption: "Guests on their feet at the listening party" },
  { src: assetUrl(imgGuests), caption: "Guests capturing the moment" },
  { src: assetUrl(imgSmiles), caption: "Joy all around, September 19th, 2026" },
];

const NewReleases = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-earthy-dark via-earthy to-clay text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div className="text-center md:text-left order-2 md:order-1">
              <p className="uppercase tracking-[0.3em] text-sm text-white/80 mb-4 animate-fade-in">
                New Releases
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                No Safer Place <span className="italic text-ochre">than This</span>
              </h1>
              <p className="flex items-center justify-center md:justify-start gap-2 text-white/90 text-lg animate-fade-in">
                <Calendar size={20} />
                Debut single — out October 3rd, 2026
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
              <img
                src={assetUrl(coverArt)}
                alt="No Safer Place than This single cover"
                className="w-full max-w-sm md:max-w-md rounded-lg shadow-2xl shadow-black/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About the single */}
      <section className="py-16 md:py-20">
        <div className="container-custom max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <Music size={28} />
          </div>
          <h2 className="section-title">The Debut Single</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            "No Safer Place than This" is Jesunimofe's debut single, a heartfelt song
            about finding rest, belonging, and peace. First shared with family, friends,
            and supporters at an intimate listening party on September 19th, 2026, the
            single arrives on all major streaming platforms on October 3rd, 2026.
          </p>

          <a
            href="https://open.spotify.com/user/31kzejxbi7lcecxlhfura43fgjzu?si=T2DJY6BuT1inxhTob00Y9w&utm_source=copy-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium transition-all hover:bg-primary/90 hover:scale-105"
          >
            Follow to be notified when released
            <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* Listening party gallery */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="section-title">The Listening Party</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Moments from the first-ever hearing of "No Safer Place than This" — September 19th, 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {gallery.map((item, index) => (
              <figure
                key={index}
                className={`group relative overflow-hidden rounded-lg aspect-[3/2] ${
                  index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NewReleases;
