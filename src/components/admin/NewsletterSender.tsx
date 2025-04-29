
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendNewsletterToSubscribers } from "@/utils/emailService";

interface NewsletterSenderProps {
  storyTitle: string;
  storyExcerpt: string;
  storyImage?: string;
}

const NewsletterSender = ({ storyTitle, storyExcerpt, storyImage }: NewsletterSenderProps) => {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);

  const handleSendNewsletter = async () => {
    setIsSending(true);
    
    try {
      const subject = `New Story: ${storyTitle}`;
      const content = `
        <h2>${storyTitle}</h2>
        <p>${storyExcerpt}</p>
        ${storyImage ? `<img src="${storyImage}" alt="${storyTitle}" />` : ''}
        <p>Read the full story on our website.</p>
      `;
      
      await sendNewsletterToSubscribers(subject, content);
      
      toast({
        title: "Newsletter Sent",
        description: "Your newsletter has been sent to all subscribers.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send newsletter. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-muted p-4 rounded-lg mb-6">
      <h3 className="font-medium mb-2">Share this story with subscribers</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Send an email notification about this new story to all newsletter subscribers.
      </p>
      <button
        onClick={handleSendNewsletter}
        disabled={isSending}
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
      >
        {isSending ? "Sending..." : "Send Newsletter"}
      </button>
    </div>
  );
};

export default NewsletterSender;
