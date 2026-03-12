import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "understanding-allergic-rhinitis",
    category: "Allergy",
    readTime: "5 min",
    title: "Understanding Allergic Rhinitis: Causes, Symptoms & Treatment",
    excerpt:
      "Allergic rhinitis affects millions in India. Learn about the common triggers, how to identify it, and what modern treatment options — including immunotherapy — can offer.",
    categoryColor: "text-[#0c9b85] bg-[#f0fdf4]",
  },
  {
    slug: "fess-surgery-what-to-expect",
    category: "Procedures",
    readTime: "6 min",
    title: "FESS Surgery: What to Expect Before, During & After",
    excerpt:
      "Functional Endoscopic Sinus Surgery (FESS) is a minimally invasive procedure for chronic sinusitis. Here's a complete guide to help you prepare and recover.",
    categoryColor: "text-[#0369a1] bg-[#f0f7ff]",
  },
  {
    slug: "when-to-see-an-ent",
    category: "General",
    readTime: "4 min",
    title: "When Should You See an ENT? 10 Warning Signs",
    excerpt:
      "Many ear, nose, and throat problems are brushed off as minor issues. Discover 10 warning signs that mean it's time to consult a specialist like Dr. Surabhi.",
    categoryColor: "text-[#7c3aed] bg-[#faf5ff]",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0ea5e9] mb-2">
              Health Insights
            </p>
            <div className="section-divider" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1e293b]">
              From the Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0c4a6e] hover:gap-3 transition-all"
          >
            View All Posts <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-[#e2e8f0] rounded-xl shadow-sm card-hover flex flex-col overflow-hidden"
            >
              {/* Placeholder thumbnail */}
              <div className="h-44 bg-gradient-to-br from-[#f0f7ff] to-[#e0f2fe] flex items-center justify-center">
                <span className="text-4xl" aria-hidden="true">
                  {post.category === "Allergy" ? "🌿" : post.category === "Procedures" ? "🏥" : "👂"}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#64748b]">
                    <Clock size={12} />
                    {post.readTime} read
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#1e293b] mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#0c4a6e] hover:gap-2 transition-all"
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
