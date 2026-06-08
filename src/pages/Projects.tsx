import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Tag = 'All' | 'Web' ;

interface Project {
  title: string;
  description: string;
  tags: Exclude<Tag, 'All'>[];
  tech: string[];
  image: string;
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Outhink Research',
    description:
      'a playground behind everything we build. Exploring ideas, funding the ones worth betting on, and turning curiosity into real businesses.',
    tags: [],
    tech: [],
    image: '',
    github: '',
    live: '',
    featured: true,
  },
  {
    title: 'iotlabs.id',
    description:
      'a platform designed to empower the next generation of innovators to explore, create, and collaborate in the Internet of Things (IoT) ecosystem.',
    tags: ['Web'],
    tech: ['IoT', 'Tech', 'Education'],
    image: '',
    live: 'https://iotlabs.id',
    featured: true,
  },
  /*{
    title: 'Project Gamma',
    description:
      'Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
    tags: ['Mobile'],
    tech: ['Lorem', 'Ipsum', 'Mobile'],
    image: '/images/project-placeholder.svg',
    live: 'https://example.com',
  },
  {
    title: 'Project Delta',
    description:
      'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    tags: ['Tool', 'Open Source'],
    tech: ['Dolor', 'Sit', 'Amet'],
    image: '/images/project-placeholder.svg',
    github: 'https://github.com',
  },
  {
    title: 'Project Epsilon',
    description:
      'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.',
    tags: ['Web'],
    tech: ['Ut', 'Enim', 'Ad', 'Minim'],
    image: '/images/project-placeholder.svg',
    github: 'https://github.com',
    live: 'https://example.com',
  },*/
];

const tags: Tag[] = ['All', 'Web'];

export default function Projects() {
  const [activeTag, setActiveTag] = useState<Tag>('All');

  const filtered =
    activeTag === 'All' ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12 border-b border-black pb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-sm opacity-50 max-w-none">
          every good stories started with question, challenges, two packs avolution and some cups high caffeine.
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-12">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`text-xs tracking-widest uppercase px-4 py-2 border border-black transition-colors ${
              activeTag === tag ? 'bg-black text-white' : 'hover:bg-gray-50'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Featured */}
      {activeTag === 'All' && (
        <div className="mb-8">
          <p className="text-xs tracking-widest uppercase opacity-40 mb-6">Featured</p>
          <div className="grid md:grid-cols-2 gap-0">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <article key={project.title} className="border border-black -mt-px -ml-px group">
                  <div className="overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.map((t) => (
                        <span key={t} className="text-xs tracking-widest uppercase opacity-40">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-bold text-base mb-2">{project.title}</h2>
                    <p className="text-sm leading-relaxed opacity-60 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs border border-black px-2 py-0.5 opacity-50">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity"
                        >
                          <Github size={12} /> Source
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity"
                        >
                          <ExternalLink size={12} /> {project.title}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      )}

      {/* Grid */}
      <div>
        {activeTag === 'All' && (
          <p className="text-xs tracking-widest uppercase opacity-40 mb-6">All Projects</p>
        )}
        <div className="grid md:grid-cols-3 gap-0">
          {(activeTag === 'All' ? projects.filter((p) => !p.featured) : filtered).map((project) => (
            <article key={project.title} className="border border-black -mt-px -ml-px group p-6">
              <div className="overflow-hidden aspect-video mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {project.tags.map((t) => (
                  <span key={t} className="text-xs tracking-widest uppercase opacity-40">
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="font-bold text-sm mb-2 leading-snug">{project.title}</h2>
              <p className="text-xs leading-relaxed opacity-60 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs border border-gray-300 px-1.5 py-0.5 opacity-50">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs tracking-widest uppercase opacity-50 hover:opacity-100 transition-opacity"
                  >
                    <Github size={11} /> Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs tracking-widest uppercase opacity-50 hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink size={11} /> {project.title}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
