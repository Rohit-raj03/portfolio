import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:Rohitrajchy03@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      className="w-full border-t border-[#1F1F1F] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#F97316]">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s build something useful
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#71717A] sm:text-lg">
            Have a project in mind or want to talk about frontend development?
            Send me a message and I&apos;ll get back to you soon.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
          <div className="rounded-2xl border border-[#262626] bg-[#111111] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-8">
            <div className="mb-8 h-1 w-12 rounded-full bg-[#F97316]" />
            <div className="space-y-7">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#171717] text-[#F97316]">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-[#71717A]">
                    Email
                  </p>
                  <a
                    href="mailto:Rohitrajchy03@gmail.com"
                    className="mt-1 block wrap-break-word text-sm text-white transition-colors hover:text-[#F97316]"
                  >
                    Rohitrajchy03@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#171717] text-[#F97316]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-[#71717A]">
                    Based in
                  </p>
                  <p className="mt-1 text-sm text-white">
                    India · Available remotely
                  </p>
                </div>
              </div>

              <div className="border-t border-[#262626] pt-7">
                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-[#71717A]">
                  Connect
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Rohit-raj03"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] text-[#71717A] transition-colors hover:border-[#F97316] hover:bg-[#171717] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rohit-raj-95680b40a/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] text-[#71717A] transition-colors hover:border-[#F97316] hover:bg-[#171717] hover:text-[#F97316] focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  >
                    <FaLinkedinIn size={19} />
                  </a>
                  <a
                    href="https://discord.com/users/rohit_raj_chaudhary
"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Discord profile"
                    title="Discord profile"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] text-[#71717A] transition-colors hover:border-[#F97316] hover:bg-[#171717] hover:text-[#F97316] focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  >
                    <FaDiscord size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#262626] bg-[#111111] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-8"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white">
                Send a message
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#71717A]">
                I usually reply within one or two business days.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-[#A1A1AA]">
                Name
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className="mt-2 min-h-12 w-full rounded-lg border border-[#262626] bg-[#0A0A0A] px-4 py-3 text-white outline-none transition-colors placeholder:text-[#52525B] focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20"
                />
              </label>
              <label className="text-sm font-medium text-[#A1A1AA]">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="mt-2 min-h-12 w-full rounded-lg border border-[#262626] bg-[#0A0A0A] px-4 py-3 text-white outline-none transition-colors placeholder:text-[#52525B] focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-medium text-[#A1A1AA]">
              Message
              <textarea
                required
                name="message"
                rows="5"
                placeholder="Tell me a little about your project..."
                className="mt-2 w-full resize-y rounded-lg border border-[#262626] bg-[#0A0A0A] px-4 py-3 text-white outline-none transition-colors placeholder:text-[#52525B] focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20"
              />
            </label>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#EA580C] focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2 focus:ring-offset-[#111111] sm:w-auto"
              >
                Send message
                <Send size={17} />
              </button>
              {isSubmitted && (
                <p className="text-sm text-[#A1A1AA]" role="status">
                  Opening your email app...
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
