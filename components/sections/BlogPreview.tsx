import Link from "next/link";
import { Clock, ArrowRight, Leaf, Hospital, Ear } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const posts: { slug: string; category: string; readTime: string; title: string; excerpt: string; icon: LucideIcon; categoryColor: string }[] = [
  {
    slug: "understanding-allergic-rhinitis",
    category: "Allergy",
    readTime: "5 min",
    title: "Understanding Allergic Rhinitis: Causes, Symptoms & Treatment",
    excerpt:
      "Allergic rhinitis affects millions in India. Learn about the common triggers, how to identify it, and what modern treatment options — including immunotherapy — can offer.",
    icon: Leaf,
    categoryColor: "text-[#C9A96E] bg-[#1a2a45]",
  },
  {
    slug: "fess-surgery-what-to-expect",
    category: "Procedures",
    readTime: "6 min",
    title: "FESS Surgery: What to Expect Before, During & After",
    excerpt:
      "Functional Endoscopic Sinus Surgery (FESS) is a minimally invasive procedure for chronic sinusitis. Here's a complete guide to help you prepare and recover.",
    icon: Hospital,
    categoryColor: "text-[#FAFAFA] bg-[#243355]",
  },
  {
    slug: "when-to-see-an-ent",
    category: "General",
    readTime: "4 min",
    title: "When Should You See an ENT? 10 Warning Signs",
    excerpt:
      "Many ear, nose, and throat problems are brushed off as minor issues. Discover 10 warning signs that mean it's time to consult a specialist like Dr. Surabhi.",
    icon: Ear,
    categoryColor: "text-[#0f1a2e] bg-[#C9A96E]",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 bg-[#1a2a45]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A96E] mb-2">
              Health Insights
            </p>
            <div className="section-divider" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAFAFA]">
              From the Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A96E] hover:gap-3 transition-all"
          >
            View All Posts <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-[#0f1a2e] border border-[#243355] rounded-xl shadow-sm card-hover flex flex-col overflow-hidden"
            >
              {/* Icon thumbnail */}
              <div className="h-32 sm:h-40 md:h-44 bg-gradient-to-br from-[#0f1a2e] to-[#1a2a45] flex items-center justify-center border-b border-[#243355]">
                <div className="w-16 h-16 rounded-2xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center">
                  <post.icon size={28} className="text-[#C9A96E]" />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#94a3b8]">
                    <Clock size={12} />
                    {post.readTime} read
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#FAFAFA] mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed mb-4 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#C9A96E] hover:gap-2 transition-all"
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
