
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
    content: `From the lips of the partly colonised, partly non-colonized translators, they told our forefathers "the white man brings good news." "An umbrella for the king and a mirror for the queen". "In exchange for what?" "Not much" they guaranteed. But they lied. The white men were opportunists. In exchange for our resources, our voice, our culture. They wanted it all. As we look back at what is left of our culture we ask ourselves one significant question "what is the way forward?" There is no doubt that even as we try to navigate our Afropolitan status, the European culture is significantly outweighing the influence of African culture in this cultural hybridity. It is the killer culture in the equation, and our culture the killed culture. There must always be the two in an equation - "the killer" and "the killed." Unfortunately, we stand at the latter.

How did we get here and how can we get out? If we ourselves participate in the killing of our culture with our overestimating perspectives of European culture, we are as much killers as any colonial masters who left the shores of Africa in the 1900s. Sadly, this is what we are. From the time of our forefathers receiving insignificant gifts of umbrellas and mirrors in exchange for their people as slaves, we have taken what was once ours, beautiful and true and killed it.

This culture murder, brutal and painful as it has been has not left all of us like the albino man speaking the language of his African descent but foreign by skin to his ancestors. In recent times we have seen a revival, a call back to an old path by some awakened few gatekeepers of culture. They have stood clearly at junctures calling, pointing at what was. They have spoken African languages, worn African clothes, home and abroad, eaten with their hands and spoken about boldly of their culture, their heritage and their people.

They have advocated for our culture and its preservation in the midst of the confusion of their people. We might be blind men but not all our men are blind. They are the Bruce Onobrakpeyas, who were vocal campaigner for the return of art looted from Benin. The Ben Enwonwus advocates for a new Nigerian national culture amidst a myriad of amazing people I cannot all name. They are in simple terms- anchors to the past and pivots to the future. In the clarity of these people, we have become privileged to now see ourselves clearly.

So no, this debate is not between Sángò shínà or Mr. Fire Man but between our lost identity and our current struggle to find, rediscover and identify with ourselves.

The journey back home, to our pure untainted culture is a collective effort and affects all layers of social interactions from the homes, to the schools, to workplaces, to religious institutions and many more. We have to first value what we have once killed, to put on the lips of our babes and sucklings that which we once called vernacular, to honour our ancient value systems and societal structure.

We have to become culture revivers ourselves. All of us- promoters of the dying culture we once neglected. Our call to action is to wear for ourselves the cultural clothes of enlightenment the few culture revivers dead or living have left us. Post colonial hybridity has come to stay in the light of globalization and technological advancements. Afropeans we would always be. There is just too much tik-tok and AI in the air for us to fully identify as Africans devoid of external influences and advancements. But we can do our best not to let our culture be the one killed. We can preserve what we have because it is beautiful and true.`,
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

  // Function to render paragraphs with proper spacing
  const renderContent = (content) => {
    // Split the content by double newlines to get paragraphs
    const paragraphs = content.split('\n\n');
    
    return paragraphs.map((paragraph, index) => (
      <p key={index} className="mb-6 last:mb-0">
        {paragraph}
      </p>
    ));
  };

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
                {renderContent(post.content)}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogDetail;
