import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinic Gallery | Dr. Surabhi Nikam Mirajkar - ENT Specialist Mumbai",
  description: "View our clinic, consultation rooms, and medical equipment. Dr. Surabhi Nikam Mirajkar ENT & Allergy Clinic, Mumbai.",
  alternates: { canonical: "https://drsurabhinikam.com/gallery" },
};

const galleryItems = [
  { id: 1, category: "Clinic", label: "Reception & Waiting Area", emoji: "🏥" },
  { id: 2, category: "Clinic", label: "Consultation Room", emoji: "🩺" },
  { id: 3, category: "Clinic", label: "ENT Examination Room", emoji: "👂" },
  { id: 4, category: "Equipment", label: "Endoscopy System", emoji: "🔬" },
  { id: 5, category: "Equipment", label: "Audiometry Setup", emoji: "📊" },
  { id: 6, category: "Equipment", label: "Allergy Testing Station", emoji: "🌿" },
  { id: 7, category: "Equipment", label: "Surgical Microscope", emoji: "🔭" },
  { id: 8, category: "Clinic", label: "Procedure Room", emoji: "⚕️" },
  { id: 9, category: "Events", label: "Health Awareness Camp", emoji: "❤️" },
  { id: 10, category: "Events", label: "CME Lecture — ENT Updates", emoji: "📚" },
  { id: 11, category: "Equipment", label: "Nasal Endoscope", emoji: "🔍" },
  { id: 12, category: "Clinic", label: "Post-Procedure Recovery", emoji: "🛌" },
];

const categories = ["All", "Clinic", "Equipment", "Events"];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f8fafb]">
      <section className="pt-24 pb-16 bg-[#0c4a6e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#7dd3fc] mb-3">Our Space</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">Clinic Gallery</h1>
          <p className="text-[#bae6fd] text-lg max-w-xl mx-auto">
            A glimpse into our state-of-the-art ENT clinic, equipment, and events. A welcoming, comfortable environment built for your care.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((cat) => (
              <span key={cat} className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-[#e2e8f0] text-[#1e293b] hover:bg-[#0c4a6e] hover:text-white hover:border-[#0c4a6e] transition-colors cursor-pointer">{cat}</span>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div key={item.id} className="bg-white border border-[#e2e8f0] rounded-xl shadow-sm card-hover overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-[#f0f7ff] to-[#e0f2fe] flex items-center justify-center">
                  <span className="text-5xl">{item.emoji}</span>
                </div>
                <div className="p-3">
                  <span className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-wider">{item.category}</span>
                  <p className="text-sm font-medium text-[#1e293b] mt-0.5">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-white rounded-2xl border border-[#e2e8f0] shadow-sm">
            <p className="text-[#64748b] text-sm">
              Actual clinic photos coming soon. For a virtual tour or to schedule a visit, please contact us.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
