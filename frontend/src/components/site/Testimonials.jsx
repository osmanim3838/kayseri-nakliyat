import { Star, MapPin } from "lucide-react";

const REVIEWS = [
  {
    name: "Ahmet Y.",
    location: "Dikmen / İlker Mahallesi",
    text: "Dikmen İlker mahallesindeki dar sokağımıza ve yokuşlu binamıza asansörü çok profesyonel kurdular. Eşyalarım hiç çizilmeden 9. kata çıkarıldı. Kesinlikle tavsiye ederim."
  },
  {
    name: "Selin K.",
    location: "Çankaya / Birlik Mahallesi",
    text: "Çankaya Birlik mahallesindeki ofisimizi sorunsuz taşıdılar. Paketleme çok özenliydi, dosyalarımız ve elektronik cihazlarımız güvenle yeni ofise ulaştı. Arıcıoğlu ekibine teşekkürler."
  },
  {
    name: "Murat T.",
    location: "Dikmen / Sokullu Mehmet Paşa",
    text: "Sokullu'dan Çayyolu'na taşınırken kendilerini tercih ettik. Sabah tam söyledikleri saatte geldiler. Dikmen bölgesini çok iyi bildikleri için nakliye aracı sokağa rahatça yerleşti."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Müşterilerimiz <span className="text-amber-500">Ne Diyor?</span>
          </h2>
          <p className="mt-4 text-slate-600">Çankaya ve Dikmen bölgelerinde hizmet verdiğimiz mutlu müşterilerimiz.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <div key={index} className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-900/5">
              <div className="mb-4 flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-700 italic">
                "{review.text}"
              </p>
              <div className="mt-auto border-t border-slate-200 pt-4">
                <p className="font-bold text-slate-900">{review.name}</p>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-amber-600 font-semibold">
                  <MapPin className="h-3.5 w-3.5" />
                  {review.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}