import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ENT Health Blog | Dr. Surabhi Nikam Mirajkar - Mumbai",
  description: "Expert articles on ENT conditions, allergy management, and skull base surgery by Dr. Surabhi Nikam Mirajkar, ENT specialist Mumbai.",
  alternates: { canonical: "https://drsurabhinikam.com/blog" },
};

const posts = [
  { slug: "understanding-allergic-rhinitis", category: "Allergy", readTime: "5 min", title: "Understanding Allergic Rhinitis: Causes, Symptoms & Treatment", excerpt: "Allergic rhinitis affects millions in India. Learn about common triggers and modern treatment options including immunotherapy.", emoji: "🌿", catCls: "text-[#0c9b85] bg-[#f0fdf4]" },
  { slug: "fess-surgery-what-to-expect", category: "Procedures", readTime: "6 min", title: "FESS Surgery: What to Expect Before, During & After", excerpt: "Functional Endoscopic Sinus Surgery is minimally invasive. Here is a complete guide to help you prepare and recover.", emoji: "🏥", catCls: "text-[#0369a1] bg-[#f0f7ff]" },
  { slug: "when-to-see-an-ent", category: "General ENT", readTime: "4 min", title: "When Should You See an ENT? 10 Warning Signs", excerpt: "Many ENT problems are brushed off as minor. Discover 10 warning signs that mean it is time to consult a specialist.", emoji: "👂", catCls: "text-[#7c3aed] bg-[#faf5ff]" },
  { slug: "skull-base-surgery-what-you-should-know", category: "Surgery", readTime: "7 min", title: "Skull Base Surgery: What You Should Know", excerpt: "Modern endoscopic techniques make skull base surgery minimally invasive. Learn about pituitary tumours, CSF leaks, and recovery.", emoji: "🧠", catCls: "text-[#c2410c] bg-[#fff7ed]" },
  { slug: "tinnitus-causes-diagnosis-management", category: "Ear & Hearing", readTime: "5 min", title: "Tinnitus: Causes, Diagnosis & Management", excerpt: "Ringing in the ears can be distressing. This guide explains common causes, evaluation, and available treatments.", emoji: "🔔", catCls: "text-[#0c4a6e] bg-[#f0f7ff]" },
  { slug: "children-and-ent-common-issues", category: "Paediatric ENT", readTime: "5 min", title: "Children & ENT: Common Issues and When to Seek Help", excerpt: "From ear infections to enlarged tonsils and nasal allergies, ENT problems are common in children. Know when to see a specialist.", emoji: "👶", catCls: "text-[#0c9b85] bg-[#f0fdf4]" },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f8fafb]">
      <section className="pt-24 pb-16 bg-[#0c4a6e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#7dd3fc] mb-3">Health Insights</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">ENT Health Blog</h1>
          <p className="text-[#bae6fd] text-lg max-w-xl mx-auto">Evidence-based articles on ENT conditions, allergy, and surgery by Dr. Surabhi.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white border border-[#e2e8f0] rounded-xl shadow-sm card-hover flex flex-col overflow-hidden">
                <div className="h-44 bg-gradient-to-br from-[#f0f7ff] to-[#e0f2fe] flex items-center justify-center">
                  <span className="text-5xl">{post.emoji}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={["text-xs font-semibold px-2.5 py-1 rounded-full", post.catCls].join(" ")}>{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-[#64748b]"><Clock size={12} />{post.readTime} read</span>
                  </div>
                  <h2 className="font-serif text-lg font-bold text-[#1e293b] mb-2">{post.title}</h2>
                  <p className="text-sm text-[#64748b] leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <Link href={["/blog/", post.slug].join("")} className="inline-flex items-center gap-1 text-sm font-semibold text-[#0c4a6e] hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}