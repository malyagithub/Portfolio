import { Mail, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast"; // ✅ Import toast

export const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "cb6a1d51-2d42-4500-bed0-0896b01416fc"); // ✅ Your Access Key here

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Your message has been sent!", {
          style: {
            background: "#10B981", // Emerald
            color: "#fff",
            borderRadius: "8px",
            padding: "10px 16px",
            fontSize: "14px",
          },
          icon: "📩",
        });
        e.target.reset();
      } else {
        toast.error("❌ Something went wrong. Please try again later.", {
          style: {
            background: "#EF4444", // Red
            color: "#fff",
            borderRadius: "8px",
            padding: "10px 16px",
            fontSize: "14px",
          },
        });
      }
    } catch (err) {
      toast.error("⚠️ Network error. Please check your connection.", {
        style: {
          background: "#F59E0B", // Amber
          color: "#fff",
          borderRadius: "8px",
          padding: "10px 16px",
          fontSize: "14px",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      {/* ✅ Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Let’s <span className="text-primary">Connect</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Whether you have a question, want to share an idea, or just feel like saying hi, I’d love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:malyachoudha9282@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    malyachoudha9282@gmail.com
                  </a>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Bhopal, Madhya Pradesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 max-w-xl mx-auto bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3 text-center">Connect with Me</h3>
              <div className="flex flex-wrap gap-6 justify-center">
                <a
                  href="https://github.com/malyagithub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-md border border-primary text-primary font-medium bg-white hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-md hover:scale-105"
                >
                  <FaGithub size={22} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/malya-choudha-b1a63a251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-md border border-blue-600 text-blue-600 font-medium bg-white hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-md hover:scale-105"
                >
                  <FaLinkedin size={22} /> LinkedIn
                </a>
                <a
                  href="https://leetcode.com/u/malyachoudha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-md border border-yellow-500 text-yellow-600 font-medium bg-white hover:bg-yellow-500 hover:text-white transition-all duration-200 shadow-md hover:scale-105"
                >
                  <SiLeetcode size={22} /> LeetCode
                </a>
                <a
                  href="https://www.geeksforgeeks.org/user/malyachopy7n/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-md border border-green-600 text-green-700 font-medium bg-white hover:bg-green-600 hover:text-white transition-all duration-200 shadow-md hover:scale-105"
                >
                  <SiGeeksforgeeks size={22} /> GFG
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Write your message..."
                />
              </div>
              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium",
                  "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
                  "transition-all duration-300 hover:shadow-lg active:scale-95"
                )}
              >
                {loading ? "Sending..." : "Send Message"} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
