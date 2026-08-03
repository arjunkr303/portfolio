import { motion } from "motion/react";
import { Send } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  // EmailJS credentials
  const SERVICE_ID = "service_rt81m7i";
  const TEMPLATE_ID = "template_0aackec";
  const PUBLIC_KEY = "Lu_J8UQfUAsu-r7ey";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#12161f] text-slate-900 dark:text-white relative overflow-hidden border-t border-slate-200 dark:border-slate-800/60 transition-colors duration-300" id="contact">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 dark:opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.1]" 
                style={{ fontFamily: "'Outfit', 'Space Grotesk', sans-serif" }}
              >
                <span className="block text-slate-900 dark:text-white font-black">GOT A PROJECT</span>
                <span className="block text-[#00C9A7] font-black mt-1">IN MIND?</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-normal pt-2 font-['Halfre_Sans','Inter',sans-serif]">
                Whether you want to build autonomous AI agents, deploy custom LLM pipelines, or collaborate on open-source projects, feel free to drop a message!
              </p>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-[#151a24] border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sm:p-10 shadow-lg dark:shadow-2xl space-y-6"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inputs for Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-['Halfre_Sans','Inter',sans-serif]">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-['Halfre_Sans','Inter',sans-serif] font-semibold text-slate-700 dark:text-slate-300">
                      Your name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Name"
                      required
                      className="bg-slate-50 dark:bg-[#1c2331] border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#00C9A7] focus:ring-1 focus:ring-[#00C9A7] h-12 rounded-xl font-['Halfre_Sans','Inter',sans-serif]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-['Halfre_Sans','Inter',sans-serif] font-semibold text-slate-700 dark:text-slate-300">
                      Your email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email"
                      required
                      className="bg-slate-50 dark:bg-[#1c2331] border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#00C9A7] focus:ring-1 focus:ring-[#00C9A7] h-12 rounded-xl font-['Halfre_Sans','Inter',sans-serif]"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2 font-['Halfre_Sans','Inter',sans-serif]">
                  <label htmlFor="message" className="block text-xs font-['Halfre_Sans','Inter',sans-serif] font-semibold text-slate-700 dark:text-slate-300">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Message"
                    required
                    rows={6}
                    className="bg-slate-50 dark:bg-[#1c2331] border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#00C9A7] focus:ring-1 focus:ring-[#00C9A7] resize-none rounded-xl font-['Halfre_Sans','Inter',sans-serif]"
                  />
                </div>

                {/* Send Message Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="bg-[#00C9A7] hover:bg-[#00a3a3] text-slate-950 font-bold px-8 py-3.5 rounded-full shadow-lg shadow-teal-500/20 transition-all duration-200 flex items-center gap-2 text-sm cursor-pointer disabled:opacity-60 font-['Halfre_Sans','Inter',sans-serif]"
                >
                  <span>{isSending ? "Sending..." : "Send Message"}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}