import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, Leaf, Hospital, Ear, Brain, Bell, Baby } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "ENT Health Blog | Dr. Surabhi Nikam Mirajkar - Mumbai",
  description: "Expert articles on ENT conditions, allergy management, and skull base surgery by Dr. Surabhi Nikam Mirajkar, ENT specialist Mumbai.",
  alternates: { canonical: "https://drsurabhinikam.com/blog" },
};

const posts: { slug: string; category: string; readTime: string; title: string; excerpt: string; icon: LucideIcon; catCls: string }[] = [
  { slug: "understanding-allergic-rhinitis", category: "Allergy", readTime: "5 min", title: "Understanding Allergic Rhinitis: Causes, Symptoms & Treatment", excerpt: "Allergic rhinitis affects millions in India. Learn about common triggers and modern treatment options including immunotherapy.", icon: Leaf, catCls: "text-[#C9A96E] bg-[#1a2a45]" },
  { slug: "fess-surgery-what-to-expect", category: "Procedures", readTime: "6 min", title: "FESS Surgery: What to Expect Before, During & After", excerpt: "Functional Endoscopic Sinus Surgery is minimally invasive. Here is a complete guide to help you prepare and recover.", icon: Hospital, catCls: "text-[#FAFAFA] bg-[#243355]" },
  { slug: "when-to-see-an-ent", category: "General ENT", readTime: "4 min", title: "When Should You See an ENT? 10 Warning Signs", excerpt: "Many ENT problems are brushed off as minor. Discover 10 warning signs that mean it is time to consult a specialist.", icon: Ear, catCls: "text-[#0f1a2e] bg-[#C9A96E]" },
  { slug: "skull-base-surgery-what-you-should-know", category: "Surgery", readTime: "7 min", title: "Skull Base Surgery: What You Should Know", excerpt: "Modern endoscopic techniques make skull base surgery minimally invasive. Learn about pituitary tumours, CSF leaks, and recovery.", icon: Brain, catCls: "text-[#0f1a2e] bg-[#C9A96E]" },
  { slug: "tinnitus-causes-diagnosis-management", category: "Ear & Hearing", readTime: "5 min", title: "Tinnitus: Causes, Diagnosis & Management", excerpt: "Ringing in the ears can be distressing. This guide explains common causes, evaluation, and available treatments.", icon: Bell, catCls: "text-[#C9A96E] bg-[#1a2a45]" },
  { slug: "children-and-ent-common-issues", category: "Paediatric ENT", readTime: "5 min", title: "Children & ENT: Common Issues and When to Seek Help", excerpt: "From ear infections to enlarged tonsils and nasal allergies, ENT problems are common in children. Know when to see a specialist.", icon: Baby, catCls: "text-[#C9A96E] bg-[#1a2a45]" },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0f1a2e]">
      <section className="pt-24 pb-16 bg-[#0a1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A96E] mb-3">Health Insights</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">ENT Health Blog</h1>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto mb-6" />
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">Evidence-based articles on ENT conditions, allergy, and surgery by Dr. Surabhi.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-[#1a2a45] border border-[#243355] rounded-xl shadow-sm card-hover flex flex-col overflow-hidden">
                <div className="h-44 bg-gradient-to-br from-[#0f1a2e] to-[#1a2a45] flex items-center justify-center border-b border-[#243355]">
                  <div className="w-16 h-16 rounded-2xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center">
                    <post.icon size={30} className="text-[#C9A96E]" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={["text-xs font-semibold px-2.5 py-1 rounded-full", post.catCls].join(" ")}>{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-[#94a3b8]"><Clock size={12} />{post.readTime} read</span>
                  </div>
                  <h2 className="font-serif text-lg font-bold text-[#FAFAFA] mb-2">{post.title}</h2>
                  <p className="text-sm text-[#94a3b8] leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <Link href={["/blog/", post.slug].join("")} className="inline-flex items-center gap-1 text-sm font-semibold text-[#C9A96E] hover:gap-2 transition-all">
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
