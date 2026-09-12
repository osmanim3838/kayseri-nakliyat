import { motion } from "framer-motion";
import { ShieldCheck, Truck, Map, Star, ChevronRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFab from "./WhatsAppFab";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function AsansorluNakliyat() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      
      {/* ÜST KISIM (Karanlık Hero) */}
      <section className="relative overflow-hidden bg-slate-950 pb-20 pt-32 sm:pt-40">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="/dikmen-asansorlu-nakliyat-hero.jpg" alt="Arka Plan" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-400">
            <span>Ana Sayfa</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-amber-500">Hizmetlerimiz</span>
          </div>
          
          <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Dikmen Asansörlü <span className="text-amber-500">Nakliyat</span>
          </h1>
          
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Yüksek katlara hızlı ve güvenli taşıma çözümleri ile eşyalarınız çizilmeden, zarar görmeden yeni evinize ulaşıyor.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: Truck, text: "Dış Cephe Asansörü" },
              { icon: ShieldCheck, text: "Sıfır Hasar Garantisi" },
              { icon: Star, text: "Hızlı Kurulum" },
            ].map((badge, i) => (
              <span key={i} className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-bold text-amber-400">
                <badge.icon className="h-4 w-4" /> {badge.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* İÇERİK KISMI */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-16 text-slate-600 sm:text-lg sm:leading-relaxed">
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="mb-6 font-display text-2xl font-bold text-slate-900 sm:text-3xl">Yüksek Katlara Hızlı ve Güvenli Taşıma Çözümleri</h2>
            <p>
              Taşınma süreci her zaman zorlu bir deneyim olmuştur, ancak teknolojinin nakliyat sektörüne entegre olmasıyla birlikte bu zorluklar büyük ölçüde aşılmıştır. Özellikle yüksek katlı binaların ve dar merdiven boşluklarının taşınmayı bir kabusa dönüştürdüğü durumlarda, <strong className="border-b-2 border-amber-500 text-slate-900">Dikmen asansörlü nakliyat hizmetlerimiz</strong> hayat kurtarıcı bir çözüm sunmaktadır. Eşyalarınızın bina içindeki merdivenlerde duvarlara çarpma, çizilme veya kırılma riskini tamamen ortadan kaldıran bu modüler sistem, taşımacılıkta <strong className="text-amber-600">yeni bir standart belirlemektedir</strong>. Uzman kadromuz ve modern dış cephe asansörlerimizle, Dikmen'nın her noktasına kusursuz bir taşınma deneyimi vadediyoruz.
            </p>
          </motion.div>

          {/* Asansör Görseli */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="overflow-hidden rounded-3xl shadow-2xl">
            <img src="/dikmen-nakliyat-genel-3.jpg" alt="Asansörlü Taşıma Aracı" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="mb-6 font-display text-2xl font-bold text-slate-900 sm:text-3xl">Neden Dikmen Asansörlü Taşımacılık Tercih Edilmeli?</h2>
            <p>
              Asansörlü taşımacılığın en büyük avantajı hiç şüphesiz <strong className="text-amber-600">maksimum eşya güvenliğidir</strong>. İnsan gücüne dayalı klasik taşıma yöntemlerinde, ağır mobilyaların veya hassas beyaz eşyaların dar alanlardan geçirilmesi ciddi hasar riskleri taşır. Ancak Dikmenrı asansörlü taşıma sistemlerimiz sayesinde, eşyalarınız <strong className="border-b-2 border-amber-500 text-slate-900">doğrudan evinizin balkonundan veya geniş bir penceresinden özel asansör kabinine yüklenir</strong>. Sarsıntısız bir şekilde aşağıya indirilerek nakliye aracımıza doğrudan yerleştirilir. Bu yöntem sadece eşyalarınızı korumakla kalmaz; aynı zamanda bina içi duvarların çizilmesini ve komşularınıza verilebilecek olası gürültü rahatsızlıklarını da engeller. Ayrıca taşıma süresini neredeyse yarı yarıya düşürerek size büyük bir zaman tasarrufu sağlar.
            </p>
          </motion.div>

          {/* Yeni Eklenen Resim4.jpg */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="overflow-hidden rounded-3xl shadow-2xl">
            <img src="/dikmen-asansorlu-nakliyat-4.jpg" alt="Güvenli Depolama ve Paketleme" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="mb-6 font-display text-2xl font-bold text-slate-900 sm:text-3xl">Kurumsal, Sigortalı ve Profesyonel Hizmet</h2>
            <p>
              Firmamız, taşımacılık sektöründeki tüm yasal gereklilikleri yerine getiren <strong className="text-amber-600">K1 ve K3 yetki belgelerine sahip kurumsal bir işletmedir</strong>. Çankırı'dan Türkiye'nin 81 iline sunduğumuz asansörlü nakliyat hizmetlerimizin tamamı sigortalı taşıma güvencesi altındadır. Taşıma süreci başlamadan önce sunduğumuz ücretsiz ekspertiz hizmeti ile binanızın asansör kurulumuna uygunluğu detaylıca kontrol edilir ve size en uygun, <strong className="border-b-2 border-amber-500 text-slate-900">sürpriz maliyetler içermeyen net bir fiyat teklifi sunulur</strong>. Eşyalarınızın sizin için ne kadar değerli olduğunu çok iyi biliyor, profesyonel ambalajlama ve montaj hizmetlerimizle Çankırı asansörlü nakliyat sürecinizi sorunsuz, güvenli ve keyifli bir başlangıca dönüştürüyoruz.
            </p>
          </motion.div>
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="overflow-hidden rounded-3xl shadow-2xl">
            <img src="/dikmen-evden-eve-nakliyat-1.jpg" alt="Arıcıoğlu Nakliyat Araç Filosu" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </motion.div>

        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}