
import { useParams } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import { Calendar, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Mock blog post data - in a real app, this would come from an API or database
const blogPostsData = [
  {
    slug: "hidden-in-plain-sight",
    title: "Hidden in Plain Sight",
    content: `This is to the forgotten.

So many people are right before our eyes but are truly never seen. We pass them by like ghosts—unheard, unseen, unreckoned with. This was the story of Baba Adeyemo until one cool evening when I approached him. What began as a simple quest to document turned out to be, for me, a lifelong lesson.  

I didn't think much of it till Baba Adeyemo told me, in all his life in Redeemer's University that was the first time someone intentionally greeted him. While I was ready to downplay that incident by simply calling it work, he believed in the contrary. In fact, he believed our meeting was God orchestrated. My work makes people seen. As I took pictures, many students on their way back from class started paying attention to this man they would ordinarily overlook. My work as a documentary photographer has shifted my perspective—those behind my lens are not just subjects; they are people too. People with unique stories waiting to be shared with the world.  

Baba Adeyemo's story, for instance, is one of resilience. He was once a soldier protecting pipelines, but after a change in administration, policies shifted—as is often the case in Nigeria—and he was laid off. He then transitioned into civil service, a job that nearly claimed his life in a ghastly car accident. Though he survived, he lost his left eye. This injury marked the end of his civil service career, but Baba Adeyemo persevered, becoming a mechanical and tractor operator.  

In just forty-five minutes of engagement, he shared a lifetime of experiences with me. It became clear to me that people want to be seen, to be heard. This isn't the first time this has happened to me. At the 2024 Osun-Osogbo festival, I met another elderly man who seemed to know it all. He shared so much about the festival with me, and some of my best images from the event were those I took of him. He didn't seem to mind—in fact, he let me take as many pictures as I wanted.  

I felt like a fly on the wall, as one of my mentors, Abayomi Adebayomi, often describes it. Just sitting there, observing, learning, making my subject feel at ease, and snapping away. For lack of time, he couldn't take me into more intimate spots during the festival, but the experience was unforgettable. Adebayomi was right—being like a fly on the wall has its own magic!  

Sometimes, my subjects go out of their way for me—struggling to push me past a crowd or lifting me up for a better view. These are moments I've come to cherish, especially during festivals like Osun-Osogbo. I am no longer just a stranger with a camera; I become their "cute daughter" who needs a picture.  

Of course, this isn't always the reception. Sometimes, there are glaring eyes and an almost instant "no" waiting on someone's lips. But when people are willing to share their lives' stories, the feeling is surreal, and the images? They're always the best.  

As Baba Adeyemo said to me as we parted ways, "Please make sure my pictures get to the hands of my destiny helpers." That simple statement brought a certain pressure and consciousness to me. My work is a revealer.  

Several years ago, a popular photographer, Mofe Bamuyiwa, covered the story of Riskat Momoronke, a Nigerian woman with blue eyes. Her unique story, coupled with her husband's alleged rejection of her and their children, gained widespread attention. It garnered them much support, and their story ended up in the hands of destiny helpers—because someone chose to tell it.  

I've learned to let go of the expectation that my stories will automatically bring my subjects to the doors of those who can help them. While I believe it can happen, I let fate decide. My job is to tell the story. If it achieves greatness, I am overjoyed. If not, I am content knowing I've brought attention to people and places the world might otherwise ignore.  

As I left Baba Adeyemo that day, I walked away with a renewed sense of purpose. I hold a camera for the forgotten, the helpless, and those hidden in plain sight. And oh, what a great feeling that is.`,
    image: "/lovable-uploads/9c784cdd-a5c5-4965-9351-8f52ba61d18e.png",
    date: "May 3, 2025",
    author: "Jesunimofe Henry-Adelegan",
    category: "Stories"
  },
  {
    slug: "mirror-mirror-i-am-the-prettiest",
    title: "Mirror Mirror, I Am the Prettiest",
    content: "This is the full content of the Mirror Mirror blog post. In a real application, this would be formatted with rich text and possibly include multiple paragraphs, images, and other media elements.",
    image: "/lovable-uploads/b5f10b07-d3f9-4d4a-83b9-760b2c88b538.png",
    date: "March 8, 2025",
    author: "Jesunimofe Henry-Adelegan",
    category: "Stories"
  },
  {
    slug: "the-killer-culture-and-culture-revivers",
    title: "The Killer Culture & Culture Revivers",
    content: "This is the full content of the Killer Culture blog post. In a real application, this would be formatted with rich text and possibly include multiple paragraphs, images, and other media elements.",
    image: "/lovable-uploads/f13847a6-8262-4178-855b-e93492389ddc.png",
    date: "February 27, 2025",
    author: "Jesunimofe Henry-Adelegan",
    category: "Stories"
  }
];

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPostsData.find(post => post.slug === slug);

  if (!post) {
    return (
      <PageLayout>
        <div className="container-custom py-20">
          <h1 className="text-3xl font-bold">Blog post not found</h1>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="relative h-[50vh] md:h-[60vh]">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                {post.author}
              </div>
              <span className="bg-primary/20 text-white px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p>{post.content}</p>
                {/* In a real app, you would render rich text content here */}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogDetail;
