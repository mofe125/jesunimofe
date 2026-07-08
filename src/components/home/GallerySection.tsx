import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { assetUrl } from "@/lib/assetUrl";
import imgTedxRun from "@/assets/speak-tedxrun.jpeg.asset.json";
import imgLecture from "@/assets/speak-lecture.jpeg.asset.json";
import imgChurch from "@/assets/speak-church.jpeg.asset.json";
import imgAudience from "@/assets/speak-audience.jpg.asset.json";
import imgYouth from "@/assets/speak-youth.jpg.asset.json";
import imgDiscussion from "@/assets/speak-discussion.jpg.asset.json";
import imgRadioHardFacts from "@/assets/speak-radio-hardfacts.jpg.asset.json";
import imgRadioMic from "@/assets/speak-radio-mic.jpg.asset.json";
import imgFiresideListening from "@/assets/speak-fireside-listening.jpg.asset.json";

const gallery = [
  { src: assetUrl(imgTedxRun), caption: "TEDxRUN — speaking on power of dreams and making a decisive move" },
  { src: assetUrl(imgLecture), caption: "Presentation at the Danish School of Media and Journalism — storytelling and advocacy" },
  { src: assetUrl(imgChurch), caption: "Faith community keynote" },
  { src: assetUrl(imgAudience), caption: "Engaging an international student audience" },
  { src: assetUrl(imgYouth), caption: "Youth Africa — speaking on African identity" },
  { src: assetUrl(imgDiscussion), caption: "Intimate fireside conversation" },
  { src: assetUrl(imgRadioHardFacts), caption: "Radio interview— Nigeria Info 95.1 Abuja" },
  { src: assetUrl(imgRadioMic), caption: "On-air at Nigeria Info 95.1 Abuja" },
  { src: assetUrl(imgFiresideListening), caption: "Fireside listening session" },
];

const GallerySection = () => {
  const galleryItems = gallery.slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container-custom">
        <div className="text-center mb-10 animate-on-load opacity-0">
          <h2 className="section-title">Gallery</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            A glimpse of Jesunimofe on stage, behind the mic, and in conversation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 animate-on-load opacity-0">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-3">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center animate-on-load opacity-0">
          <Link
            to="/speaking"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
          >
            View all speaking moments
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
