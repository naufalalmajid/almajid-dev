import { useState } from 'react';
import { ArrowLeft, Clock } from 'lucide-react';

type BlogCategory = 'build' | 'career' | 'productivity' | 'talk' | 'storage' ;
type FilterCategory = BlogCategory | 'All';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  image_url: string;
  read_time: string;
  published_at: string;
}

const categories: BlogCategory[] = ['build', 'career', 'productivity', 'talk', 'storage'];

const posts: Post[] = [
  {
    id: '2',
    title: 'Shipping Fast Without Breaking Things',
    excerpt:
      'Speed and stability feel like opposites until you realize that the teams shipping fastest are usually the ones with the best foundations.',
    content: `Speed and stability feel like opposites until you realize that the teams shipping fastest are usually the ones with the best foundations.

Early in my career I equated moving fast with skipping steps. Skip the tests, skip the code review, skip the documentation. It worked — until it didn't. The debt accumulated quietly, then all at once. A simple feature request would unravel three layers of duct tape and wire.

## The Compounding Effect of Small Shortcuts

Every shortcut you take today is a tax on your future self. A missing test means the next developer (often you) can't refactor with confidence. An undocumented API contract means hours of archaeology the next time something breaks at 2am.

The teams I've seen ship fastest aren't the ones cutting corners. They're the ones who've invested enough in their foundations that moving forward is genuinely cheap.

## Small, Atomic Changes

The single biggest lever for shipping fast without breaking things is the size of your changes. Small pull requests are easier to review, easier to revert, and much easier to reason about when something goes wrong.

If a change takes more than two days to land, it's probably doing too many things. Break it apart. The overhead of an extra PR is almost always less than the cost of a tangled rollback.

## Confidence Over Coverage

Test coverage is a vanity metric. What matters is confidence. A handful of well-placed integration tests that exercise your real critical paths are worth more than hundreds of unit tests validating implementation details that change every sprint.

Write tests that would catch the bugs you've actually shipped, not the ones that feel satisfying to write.

## Slow Down to Speed Up

The counterintuitive truth is that sustainable speed requires occasional deliberate slowness. Taking ten minutes to write a clear commit message, spending an afternoon addressing real tech debt, doing a proper post-mortem after an incident — these aren't luxuries. They're how you keep the runway clear.

Ship fast. But build the kind of codebase that makes fast feel effortless.`,
    category: 'build',
    image_url: '/images/blog-2.svg',
    read_time: '6 min read',
    published_at: '2026-05-20',
  },
  {
    id: '1',
    title: 'The Hidden Cost of Premature Abstraction',
    excerpt:
      'Every abstraction you write is a bet on the future. Most bets lose. Here\'s how I learned to write less code and ship more value.',
    content: `Every abstraction you write is a bet on the future. Most bets lose.

I used to be proud of how DRY my code was. If I typed the same thing twice, I felt a nagging itch to extract it. A shared utility here, a base class there. It felt like craftsmanship.

Then I watched a colleague spend three days untangling an abstraction I'd written six months earlier. The original use case had changed. The abstraction hadn't. Every new requirement was fighting against the shape of the code rather than flowing through it.

## The Three Times Rule

The rule I now follow: write it once, copy it twice, abstract it the third time — and only when the three instances share the same reason to change, not just the same shape.

Shape similarity is a trap. Two loops that look the same may iterate for entirely different reasons. Combining them saves lines today and creates a confusing conditional six months from now.

## Abstraction as Documentation

When you do abstract, make sure the abstraction communicates intent more clearly than the raw code would. A function called calculateTax is an abstraction worth having. A function called processValue is noise.

The best abstractions feel inevitable. They name a concept that was already real in the domain — you just gave it a home in the code.

## The Cost Nobody Talks About

The hidden cost isn't the time you spend writing the abstraction. It's the cognitive overhead every future reader pays to understand it. Every layer of indirection is a question mark in someone's head.

Before you abstract, ask: am I removing duplication, or am I just hiding it? Sometimes the honest answer is the latter.

Write code for the reader, not the compiler. And when in doubt, resist the urge to be clever.`,
    category: 'talk',
    image_url: '/images/blog-1.svg',
    read_time: '8 min read',
    published_at: '2026-05-12',
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function PostContent({ content }: { content: string }) {
  return (
    <div className="space-y-5">
      {content.split('\n\n').map((block, i) => {
        if (block.startsWith('## ')) {
          return (
            <h2 key={i} className="text-xl font-bold mt-8 mb-2">
              {block.slice(3)}
            </h2>
          );
        }
        return (
          <p key={i} className="text-sm leading-relaxed opacity-80">
            {block}
          </p>
        );
      })}
    </div>
  );
}

export default function Blog() {
  const [selected, setSelected] = useState<Post | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  if (selected) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16">
        <button
          onClick={() => setSelected(null)}
          className="inline-flex items-center gap-2 text-xs tracking-widest opacity-50 hover:opacity-100 transition-opacity mb-10"
        >
          <ArrowLeft size={13} /> Back
        </button>

        <div className="overflow-hidden aspect-video mb-8 border border-black">
          <img
            src={selected.image_url}
            alt={selected.title}
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs tracking-widest opacity-40">{selected.category}</span>
          <span className="flex items-center gap-1 text-xs opacity-40">
            <Clock size={10} /> {selected.read_time}
          </span>
          <span className="text-xs opacity-40">{formatDate(selected.published_at)}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-8">
          {selected.title}
        </h1>

        <div className="border-t border-black pt-8">
          <PostContent content={selected.content} />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12 border-b border-black pb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-sm opacity-50 max-w-lg leading-relaxed">
          sometimes i just write, upload moments, or share thoughts in here.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {(['All', ...categories] as FilterCategory[]).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-xs tracking-widest uppercase border rounded-full transition-all ${
              selectedCategory === category
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-black/20 hover:border-black/70'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="divide-y divide-gray-100">
        {filteredPosts.length === 0 ? (
          <div className="py-20 text-center text-sm opacity-70">
            No posts found in the "{selectedCategory}" category.
          </div>
        ) : (
          filteredPosts.map((post) => (
          <article
            key={post.id}
            className="group grid md:grid-cols-4 gap-4 md:gap-8 py-8 cursor-pointer"
            onClick={() => setSelected(post)}
          >
            <div className="md:col-span-1 overflow-hidden aspect-video md:aspect-auto">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:col-span-3">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-xs tracking-widest uppercase opacity-40">{post.category}</span>
                <span className="flex items-center gap-1 text-xs opacity-40">
                  <Clock size={10} /> {post.read_time}
                </span>
              </div>
              <h2 className="font-bold text-base mb-2 leading-snug group-hover:opacity-60 transition-opacity">
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed opacity-60 line-clamp-2 mb-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs opacity-40">{formatDate(post.published_at)}</span>
                <span className="text-xs tracking-widest uppercase opacity-0 group-hover:opacity-60 transition-opacity">
                  Read &rarr;
                </span>
              </div>
            </div>
          </article>
          ))
        )}
      </div>
    </div>
  );
}
