import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-20">

        {/* Name + role — always on top */}
        <div className="mb-8">
          <p className="text-xs tracking-widest uppercase opacity-50 mb-2">
            Electrical Engineer / Builder
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-none tracking-tight">
            Naufal Al Majid
          </h1>
        </div>

        {/* Photo + About me — side by side on both mobile and desktop */}
        <div className="flex items-start gap-8 md:gap-12">
          {/* Profile picture — small, fixed width */}
          <div className="flex-shrink-0">
            <div className="relative w-28 h-28 md:w-36 md:h-36">
              <div className="w-full h-full border border-black overflow-hidden">
                <img
                  src="./images/profile.png"
                  alt="Naufal Al Majid"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-full h-full border border-black -z-10" />
            </div>
          </div>

          {/* About me text — fills remaining space */}
          <div className="flex-1 min-w-0">
            <p className="text-sm leading-relaxed opacity-70 mb-4">
              Hi i'm Naufal Al Majid, an electrical engineer.
            </p>
            <p className="text-sm leading-relaxed opacity-70 mb-4">
              ----
            </p>
            <p className="text-sm leading-relaxed opacity-70 mb-6">
              gonna make it!
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:almajid@iotlabs.id"
                className="inline-flex items-center gap-2 bg-black text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-gray-800 transition-colors"
              >
                <Mail size={14} />
                Get in touch
              </a>
              <a
                href="https://github.com/naufalalmajid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-black hover:bg-black hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/in/naufalalmajid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-black hover:bg-black hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
