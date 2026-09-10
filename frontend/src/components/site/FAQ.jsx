import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

const FAQ_DATA = [
  {
    question: "Dikmen'de asansörlü taşıma yapıyor musunuz?",
    answer: "Evet, Dikmen'in engebeli yapısına ve dar sokaklarına uygun, 15. kata kadar ulaşabilen modüler asansör sistemlerimizle güvenli ve hızlı evden eve nakliyat hizmeti veriyoruz."
  },
  {
    question: "Çankaya içi parça eşya taşıma fiyatları nedir?",
    answer: "Çankaya bölgesindeki (Birlik, Oran, Yıldız vb.) parça eşya ve çeyiz taşımacılığında mesafe kısa olduğu için oldukça ekonomik fiyatlar sunuyoruz. Net fiyat için eşya durumunuza göre anında ücretsiz ekspertiz yapıyoruz."
  },
  {
    question: "Dikmen ve Çankaya'da sigortalı nakliyat yapıyor musunuz?",
    answer: "Kesinlikle. Çankaya ve Dikmen merkezli tüm şehir içi ve şehirler arası taşımacılık işlemlerimizde eşyalarınız K1 ve K3 yetki belgelerimiz kapsamında tam kapsamlı sigortalanır."
  },
  {
    question: "Taşınma günü ekstra bir ücret çıkar mı?",
    answer: "Hayır, Çankaya ve Dikmen bölgesindeki taşınmalarınızdan önce yaptığımız ücretsiz keşif (ekspertiz) ile fiyatı sabitliyoruz. Anlaşılan fiyat dışında sürpriz bir ücret talep edilmez."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-500">
            <MessageCircleQuestion className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Çankaya & Dikmen <span className="text-amber-500">Nakliyat SSS</span>
          </h2>
          <p className="mt-4 text-slate-600">Bölgeye özel taşıma hizmetlerimiz hakkında en çok merak edilenler.</p>
        </div>

        <div className="flex flex-col gap-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={index} className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-amber-300 hover:shadow-md">
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left sm:p-6"
                >
                  <span className="font-bold text-slate-800">{item.question}</span>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className={`h-5 w-5 shrink-0 ${isOpen ? "text-amber-500" : "text-slate-400"}`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-slate-100 px-5 pb-6 pt-4 text-sm leading-relaxed text-slate-600 sm:px-6">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}