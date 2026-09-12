import { motion } from "framer-motion";
import { ShieldCheck, Truck, Map, Star, ChevronRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFab from "./WhatsAppFab";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function HizmetDetay() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      
      {/* ÜST KISIM: 2. Fotoğraftaki Karanlık Kurumsal Başlık (Hero) */}
      <section className="relative overflow-hidden bg-slate-950 pb-20 pt-32 sm:pt-40">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="/dikmen-evden-eve-nakliyat-1.jpg" alt="Arka Plan" className="h-full w-full object-cover" />
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
            Dikmen Evden Eve <span className="text-amber-500">Nakliyat</span>
          </h1>
          
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Evden eve nakliyattan asansörlü taşımacılığa, güvenli eşya depolamaya kadar tüm hizmetlerimizi inceleyin; kusursuz taşımacılığın keyfini çıkarın.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: ShieldCheck, text: "K1 & K3 Yetki Belgeli" },
              { icon: Star, text: "Sigortalı Taşıma" },
              { icon: Map, text: "81 İlde Hizmet" },
              { icon: Truck, text: "Ücretsiz Ekspertiz" },
            ].map((badge, i) => (
              <span key={i} className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-bold text-amber-400">
                <badge.icon className="h-4 w-4" /> {badge.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ALT KISIM: İçerik ve Fotoğraflar */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-16 text-slate-600 sm:text-lg sm:leading-relaxed">
          
          {/* Paragraf 1 */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="mb-6 font-display text-2xl font-bold text-slate-900 sm:text-3xl">Güvenli ve Profesyonel Taşıma Çözümlerimiz</h2>
            <p>
              Taşınma süreci, insan hayatındaki en stresli ve yorucu dönemlerden biri olarak kabul edilir. Eşyaların toparlanması, paketlenmesi, güvenli bir şekilde araca yüklenmesi ve yeni adrese hasarsız bir şekilde ulaştırılması <strong className="text-amber-600">büyük bir titizlik ve profesyonellik gerektirir</strong>. İşte tam bu noktada <strong className="border-b-2 border-amber-500 text-slate-900">Çankırı evden eve nakliyat</strong> hizmetlerimiz devreye girmektedir. Yılların getirdiği tecrübe, uzman kadromuz ve modern taşıma altyapımızla, Çankırı merkezli olmak üzere tüm Türkiye genelinde kusursuz bir taşımacılık deneyimi sunuyoruz. İster şehir içi ister şehirler arası bir taşınma planlıyor olun, firmamızın sunduğu ayrıcalıklı hizmetler sayesinde bu süreci sadece bir adres değişikliği rahatlığında atlatabilirsiniz. Geleneksel ve amatör taşıma yöntemlerini tamamen geride bırakarak, teknolojiye entegre, müşteri memnuniyeti odaklı ve <strong className="text-amber-600">Avrupa standartlarında bir nakliyat hizmetini</strong> sizlerle buluşturuyoruz.
            </p>
          </motion.div>

          {/* Fotoğraf 1: Asansörlü Kamyon */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="overflow-hidden rounded-3xl shadow-2xl">
            <img src="/dikmen-nakliyat-genel-3.jpg" alt="Asansörlü Taşımacılık" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </motion.div>

          {/* Paragraf 2 */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p>
              Dikmen, hem tarihi dokusu hem de gelişen coğrafyasıyla sürekli bir dinamizm içerisindedir. Bu dinamizm, şehir içi ve şehir dışı göç hareketliliğini de beraberinde getirmektedir. Dikmen'nın Ilgaz, Çerkeş, Şabanözü, Kurşunlu ve diğer tüm ilçelerinde sunduğumuz evden eve nakliyat hizmetleri, bölgenin coğrafi yapısına ve binaların mimari özelliklerine uygun olarak şekillendirilmektedir. Dar sokaklar, yüksek katlı binalar veya asansörü bulunmayan apartmanlar artık taşınmak için bir engel veya stres kaynağı olmaktan çıkmıştır. Geniş araç filomuz ve <strong className="border-b-2 border-amber-500 text-slate-900">teknolojik asansör sistemlerimizle</strong> her türlü zorluğun üstesinden kolayca geliyoruz. Eşyalarınızın sadece maddi değil, manevi değerinin de bilincinde olarak, her bir parçayı kendi eşyamız gibi benimsiyor ve taşıyoruz. Profesyonel taşıma çözümlerimiz, yalnızca eşyaların bir yerden başka bir yere transferini değil, aynı zamanda <strong className="text-amber-600">güven, hız ve şeffaflığı da içermektedir</strong>.
            </p>
          </motion.div>

          {/* Fotoğraf 2: Nakliye Kamyonu */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="overflow-hidden rounded-3xl shadow-2xl">
            <img src="/dikmen-evden-eve-nakliyat-1.jpg" alt="Geniş Araç Filomuz" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </motion.div>

          {/* Paragraf 3 */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p>
              Firmamız, yasal yükümlülüklerin tamamını yerine getirmiş kurumsal bir yapıya sahiptir. Taşıma sektöründe en önemli güven göstergelerinden olan <strong className="border-b-2 border-amber-500 text-slate-900">K1 ve K3 Yetki Belgelerine sahip olmamız</strong>, ticari eşya ve ev eşyası taşımacılığında devlet tarafından onaylanmış, standartlara uygun bir hizmet verdiğimizin en büyük kanıtıdır. Bu belgeler olmadan korsan ve kayıt dışı hizmet veren firmaların yaratabileceği mağduriyetlerden uzak, tamamen kurumsal bir muhatap bulabileceğiniz bir sistem sunuyoruz. Ayrıca <strong className="text-amber-600">Türkiye'nin 81 iline kesintisiz hizmet ağımız</strong> sayesinde, Çankırı'dan Edirne'ye, Kars'tan Muğla'ya kadar sınır tanımayan bir nakliyat gücüne sahibiz. Evden eve nakliyatın yanı sıra ofis taşımacılığı, fuar taşımacılığı, parça eşya sevkiyatı ve güvenli eşya depolama gibi geniş bir yelpazede çözümler üreterek, tüm lojistik ihtiyaçlarınıza tek çatı altında cevap veriyoruz.
            </p>
          </motion.div>

          {/* Fotoğraf 3: Paketleme Yapan Ekip */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="overflow-hidden rounded-3xl shadow-2xl">
            <img src="/dikmen-sehirler-arasi-nakliyat-2.jpg" alt="Profesyonel Paketleme" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </motion.div>

          {/* Paragraf 4 */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p>
              Eşya taşımacılığında güvenliğin temeli, doğru planlama ve profesyonel paketleme tekniklerinden geçer. Firmamız, uluslararası taşıma standartlarında kullanılan <strong className="text-amber-600">en kaliteli ambalaj malzemelerini</strong> tercih etmektedir. Havalı naylonlar (patpat), kraft kağıtlar, kalın karton koliler, streç filmler ve özel koruyucu kılıflar kullanılarak eşyalarınız darbelere, çizilmelere ve hava koşullarına karşı tam korumaya alınır. Kırılacak mutfak eşyalarından dev ekran televizyonlara, antika mobilyalardan ağır beyaz eşyalara kadar her bir ürün grubu, kendi yapısına uygun özel bir paketleme işleminden geçer. Demonte edilmesi gereken gardırop, yatak odası takımı ve yemek masası gibi büyük mobilyalarınız, <strong className="border-b-2 border-amber-500 text-slate-900">uzman marangozlarımız tarafından sökülerek dikkatlice ambalajlanır</strong>. Yeni evinizde ise bu eşyaların montajı yine kendi personelimiz tarafından eksiksiz bir şekilde yapılarak kullanımınıza hazır halde teslim edilir. Tüm bu detaylar, Çankırı evden eve nakliyat hizmetimizin ne kadar kapsamlı ve hayatınızı kolaylaştıran bir yapıya sahip olduğunu göstermektedir.
            </p>
          </motion.div>

        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}