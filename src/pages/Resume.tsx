import { Download } from 'lucide-react';

const education = [
  {
    degree: 'S.T. Electrical Engineering',
    school: 'University of Lampung',
    location: 'Lampung, ID',
    period: '2020 — 2027',
    notes: 'ongoing.',
  },
];

const work = [
  {
    title: 'Main Contributor',
    company: 'iotlabs.id',
    location: 'Bandar Lampung, Indonesia',
    period: 'Aug 2025 — Present',
    bullets: [
      'building a platform for creation Internet of Things.',
    ],
  },
  {
    title: 'Web Content Specialist',
    company: 'Outhink Labs',
    location: 'Remote',
    period: '2020 — 2024',
    bullets: [
      'writing content and researching topics related tech, selling and education.',
      'reach 220k monthly organic visitors.',
    ],
  },
];

/*const achievements = [
  {
    title: 'y',
    org: 'y',
    year: 'y',
    description: 'y',
  },
  {
    title: 'y',
    org: 'y',
    year: 'y',
    description: 'y',
  },
];
*/
export default function Resume() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex items-start justify-between mb-16 border-b border-black pb-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Resume</h1>
          <p className="text-sm opacity-50 tracking-wide">Updated May 2026</p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 border border-black px-5 py-2.5 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-colors"
        >
          <Download size={13} />
          Download PDF
        </a>
      </div>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-xs tracking-widest uppercase font-bold mb-8 opacity-40">Education</h2>
        <div className="space-y-8">
          {education.map((item, i) => (
            <div key={i} className="grid md:grid-cols-4 gap-4 md:gap-8 pb-8 border-b border-gray-100 last:border-0">
              <div className="md:col-span-1">
                <p className="text-xs opacity-40 tracking-wide">{item.period}</p>
                <p className="text-xs opacity-40 mt-1">{item.location}</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-bold text-base mb-0.5">{item.degree}</h3>
                <p className="text-sm opacity-60 mb-3">{item.school}</p>
                <p className="text-sm leading-relaxed opacity-70">{item.notes}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work History */}
      <section className="mb-16 border-t border-black pt-10">
        <h2 className="text-xs tracking-widest uppercase font-bold mb-8 opacity-40">Work History</h2>
        <div className="space-y-10">
          {work.map((item, i) => (
            <div key={i} className="grid md:grid-cols-4 gap-4 md:gap-8 pb-10 border-b border-gray-100 last:border-0">
              <div className="md:col-span-1">
                <p className="text-xs opacity-40 tracking-wide">{item.period}</p>
                <p className="text-xs opacity-40 mt-1">{item.location}</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-bold text-base mb-0.5">{item.title}</h3>
                <p className="text-sm opacity-60 mb-4">{item.company}</p>
                <ul className="space-y-2">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm leading-relaxed opacity-70">
                      <span className="w-1.5 h-1.5 bg-black flex-shrink-0 mt-2" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements 
      <section className="border-t border-black pt-10">
        <h2 className="text-xs tracking-widest uppercase font-bold mb-8 opacity-40">Achievements</h2>
        <div className="grid md:grid-cols-2 gap-0">
          {achievements.map((item, i) => (
            <div key={i} className="p-6 border border-black -mt-px -ml-px">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs tracking-widest uppercase opacity-40">{item.org}</span>
                <span className="text-xs opacity-40">{item.year}</span>
              </div>
              <h3 className="font-bold text-sm mb-2">{item.title}</h3>
              <p className="text-xs leading-relaxed opacity-60">{item.description}</p>
            </div>
          ))}
        </div>
      </section>*/}
    </div>
  );
}
