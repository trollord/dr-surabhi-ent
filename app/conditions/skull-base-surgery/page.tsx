import type { Metadata } from "next";
import Link from "next/link";
import { Microscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Skull Base Surgery Mumbai | Fellowship Trained ENT | Dr. Surabhi Nikam Mirajkar",
  description: "Fellowship-trained skull base surgeon Dr. Surabhi Nikam Mirajkar offers minimally invasive endoscopic skull base surgery in Mumbai.",
  alternates: { canonical: "https://drsurabhinikam.com/conditions/skull-base-surgery" },
};

const conditions = [
  { name: "Endoscopic Skull Base Surgery", description: "A minimally invasive approach using a nasal endoscope to access the skull base, avoiding large open incisions.", points: ["Access through the nose","No external scar","Faster recovery","High-definition visualization"], treatment: "Used for pituitary tumours, sinonasal tumours, CSF leaks. Performed under general anesthesia." },
  { name: "Pituitary Tumours", description: "Pituitary adenomas are among the most common skull base tumours. Endoscopic transsphenoidal surgery is the gold standard approach.", points: ["Headaches","Vision changes","Hormonal imbalances","Incidental finding on MRI"], treatment: "Endoscopic transsphenoidal resection through the nose without external incisions." },
  { name: "Sinonasal Tumours", description: "Tumours from the nasal cavity or paranasal sinuses, both benign and malignant, may require endoscopic or combined surgical approaches.", points: ["One-sided nasal blockage","Facial swelling","Nosebleeds","Reduced smell"], treatment: "Endoscopic resection, with adjuvant radiotherapy or chemotherapy for malignant cases." },
  { name: "CSF Leak Repair", description: "Cerebrospinal fluid leaks from the skull base into the nasal cavity causing clear watery discharge and risk of meningitis.", points: ["Clear watery nasal discharge","Headache","History of trauma or prior surgery","Salty taste"], treatment: "Endoscopic skull base repair using mucosal grafts. Most repairs are successful with a single procedure." },
  { name: "Choanal Atresia", description: "A congenital blockage of the back of the nasal passage. Bilateral cases present as neonatal emergencies.", points: ["Inability to breathe through nose (newborns)","Chronic nasal congestion","Recurrent sinus infections"], treatment: "Endoscopic surgical correction to open the blocked nasal passage. Excellent outcomes." },
];

const faqs = [
  { q: "What makes skull base surgery minimally invasive?", a: "Endoscopic skull base surgery is performed through the natural nasal passages using a thin camera and specialized instruments, avoiding large incisions, reducing hospital stay, and allowing faster recovery." },
  { q: "Is pituitary surgery done through the nose?", a: "Yes. The standard approach is the endoscopic endonasal transsphenoidal approach, accessing the pituitary gland through the nose with no external incisions." },
  { q: "What is recovery like after skull base surgery?", a: "Most endoscopic skull base procedures allow discharge within 3-7 days. Patients avoid nose blowing and strenuous activity for several weeks." },
  { q: "Does Dr. Surabhi operate alone on skull base cases?", a: "Complex cases are managed in a multidisciplinary team with neurosurgeons, ophthalmologists, and oncologists. Dr. Surabhi leads the ENT-endoscopic component." },
];

export default function SkullBasePage() {
  return (
    <main className="min-h-screen bg-[#f8fafb]">
      <section className="pt-24 pb-16 bg-[#0c4a6e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[#7dd3fc] mb-6">
            <Link href="/conditions" className="hover:text-white">Conditions</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Skull Base Surgery</span>
          </nav>
          <div className="text-6xl mb-4">🧠</div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">Skull Base Surgery</h1>
          <p className="text-[#bae6fd] text-lg max-w-2xl mb-6">
            Fellowship-trained in endoscopic skull base surgery, Dr. Surabhi brings advanced surgical expertise to complex sinonasal and intracranial pathologies.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white">
            <Microscope size={16} className="text-[#7dd3fc]" />
            Fellowship in Skull Base Surgery
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#fff7ed] to-[#ffedd5] rounded-2xl p-8 border border-[#fed7aa]">
            <h2 className="font-serif text-2xl font-bold text-[#1e293b] mb-6">Why Minimally Invasive Skull Base Surgery?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[{ icon: "👃", title: "Through the Nose", desc: "No external incisions via natural nasal passages." },{ icon: "🏥", title: "Shorter Hospital Stay", desc: "Most patients discharged within 3-7 days." },{ icon: "⚡", title: "Faster Recovery", desc: "Return to normal activities sooner." }].map(({ icon, title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-4 shadow-sm border border-[#e2e8f0] text-center">
                  <div className="text-3xl mb-2">{icon}</div>
                  <div className="font-semibold text-[#1e293b] text-sm mb-1">{title}</div>
                  <div className="text-xs text-[#64748b]">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f8fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#1e293b] text-center mb-12">Skull Base Conditions We Treat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conditions.map((c) => (
              <article key={c.name} className="bg-white border border-[#e2e8f0] rounded-xl shadow-sm p-6 card-hover">
                <h3 className="font-serif text-xl font-bold text-[#1e293b] mb-2">{c.name}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">{c.description}</p>
                <ul className="space-y-1 mb-4">
                  {c.points.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-[#1e293b]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0c4a6e] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="bg-[#fff7ed] rounded-lg p-3 border border-[#fed7aa]">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#c2410c] mb-1">Surgical Approach</p>
                  <p className="text-sm text-[#1e293b]">{c.treatment}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#1e293b] text-center mb-10">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white border border-[#e2e8f0] rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-medium text-[#1e293b] hover:text-[#0c4a6e] list-none">
                  {faq.q}
                  <span className="ml-4 text-[#0c4a6e] text-xl group-open:rotate-45 transition-transform inline-block">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-[#64748b] leading-relaxed border-t border-[#e2e8f0] pt-3">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0c4a6e] text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold mb-3">Need a Skull Base Consultation?</h2>
          <p className="text-[#bae6fd] mb-6">Contact Dr. Surabhi for a detailed evaluation and expert opinion.</p>
          <Link href="/contact" className="inline-flex items-center px-7 py-3 rounded-full bg-[#0c9b85] text-white font-semibold hover:bg-[#14b8a6] transition-colors">
            Book Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
