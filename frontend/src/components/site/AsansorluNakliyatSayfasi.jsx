import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowUpToLine, 
  Building, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Settings,
  HardHat
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFab from "./WhatsAppFab";

export default function AsansorluNakliyatSayfasi() {
  // Sayfa açıldığında otomatik en üste kaydırır
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App grain bg-slate-50">
      <Header />
      
      <main className="pt-28 pb-20">
        
        {/* HERO (ÜST) BÖLÜMÜ - SEO H1 Başlığı */}
        <section className="bg-slate-900 py-16 text-white relative overflow-hidden mb-12">
          <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
            <span className="inline-flex items-center gap-2 mb-4 rounded-full bg-amber-500/20 px-4 py-1.5 text-xs font-bold text-amber-400 border border-amber-500/30">
              <ArrowUpToLine className="h-4 w-4" /> Yeni Nesil Taşıma Teknolojisi
            </span>
            <h1 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Ankara Asansörlü Nakliyat <br/>
              <span className="text-amber-500 text-2xl sm:text-4xl lg:text-5xl">Çankaya ve Dikmen'de Hızlı & Güvenli Çözüm</span>
            </h1>
            <p className="mx-auto max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
              Yüksek katlı binalar ve dar merdivenler artık taşınmak için bir engel değil. 25. kata kadar ulaşabilen son teknoloji dış cephe asansör sistemlerimizle eşyalarınızı sıfır riskle taşıyoruz.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-16">
          
          {/* ANA GÖRSEL VE PROFESYONEL SEO İÇERİĞİ (Yaklaşık 1500 Karakter) */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-100 group order-2 lg:order-1">
              {/* ASANSÖRLÜ NAKLİYAT RESMİ */}
              <img 
                src="/asansörlü nakliyat.jpg" 
                alt="Çankaya Dikmen Asansörlü Evden Eve Nakliyat Arıcıoğlu Taşıma" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-2 rounded-lg shadow-md flex items-center gap-2 border border-slate-700">
                <Building className="h-4 w-4 text-amber-500" /> 25. Kata Kadar Kesintisiz Erişim
              </div>
            </div>

            <div className="space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-amber-600 font-bold bg-amber-50 px-3 py-1 rounded-lg text-sm">
                <HardHat className="h-4 w-4" /> İş Güvenliği Standartlarında
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Eşyalarınız Gökyüzünden <br/> Güvenle Yeni Yuvanıza İniyor
              </h2>
              
              {/* 1500 Karakterlik Zengin SEO Metni */}
              <div className="text-slate-600 text-sm leading-relaxed space-y-4">
                <p>
                  Yüksek katlı binalarda taşınmak artık stresli ve yorucu bir süreç olmaktan çıkıyor. Arıcıoğlu Nakliyat olarak, Ankara'nın özellikle <strong>Çankaya ve Dikmen</strong> gibi çok katlı yapılaşmanın ve dar sokakların yoğun olduğu bölgelerinde profesyonel asansörlü nakliyat hizmeti sunuyoruz. Eşyalarınız bina içi dar merdivenlere veya küçük kapasiteli bina asansörlerine sıkışmadan, çizilme veya kırılma riski yaşamadan doğrudan dış cepheden taşıma araçlarımıza aktarılır.
                </p>
                <p>
                  25. kata kadar güvenle ulaşabilen son teknoloji, Alman menşeli modüler dış cephe asansör sistemlerimiz sayesinde taşınma süresini neredeyse yarı yarıya indiriyoruz. Bu sistem sadece hız kazandırmakla kalmaz; aynı zamanda bina sakinlerini rahatsız etmeden, apartman yönetimlerinin hassas olduğu ortak kullanım alanlarına (duvarlar, merdiven boşlukları, bina asansörü) hiçbir hasar vermeden operasyonun tamamlanmasını sağlar. <strong>Dikmen asansörlü nakliyat</strong> ve <strong>Çankaya asansörlü evden eve taşıma</strong> taleplerinizde, uzman operatörlerimiz öncelikle asansör kurulumu yapılacak cepheyi ücretsiz ekspertiz ile inceler ve güvenlik onayı alındıktan sonra operasyonu başlatır.
                </p>
                <p>
                  Beyaz eşyalarınız, geniş koltuk takımlarınız ve kırılabilecek hassas mobilyalarınız, özel ambalajlama işleminden geçtikten sonra asansör sepetine sabitlenerek indirilir veya çıkarılır. İnsan gücüne dayalı taşımacılıkta merdiven dönüşlerinde oluşabilecek devrilme ve çarpma riskleri bu sistemle sıfıra inmektedir. Sadece ev taşımada değil, yüksek katlı ofislerin taşınmasında ve parça eşya sevkiyatlarında da büyük avantaj sağlayan asansörlü sistemimiz, K1-K3 belgeli güvencemizle hizmetinizdedir.
                </p>
              </div>

            </div>
          </section>

          {/* AVANTAJLAR BÖLÜMÜ */}
          <section className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl font-black mb-10 text-center">Asansörlü Taşımacılığın Size Sağladığı Avantajlar</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-colors">
                <Clock className="h-10 w-10 text-amber-500 mb-4" />
                <h4 className="text-lg font-bold mb-2">Zaman Tasarrufu</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  İnsan gücüyle saatler süren kat kat eşya indirme işlemi, asansör sistemi sayesinde dakikalar içinde tamamlanır. Taşınma süreniz %50 kısalır.
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-colors">
                <ShieldCheck className="h-10 w-10 text-amber-500 mb-4" />
                <h4 className="text-lg font-bold mb-2">Sıfır Hasar Garantisi</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Merdiven dönüşlerindeki dar alanlardan geçmeye çalışan eşyaların çizilme ve çarpma riski, asansörün geniş sepetinde tamamen ortadan kalkar.
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-colors">
                <Settings className="h-10 w-10 text-amber-500 mb-4" />
                <h4 className="text-lg font-bold mb-2">Çevreye Rahatsızlık Vermez</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Apartmanınızın içini işgal etmeden, komşularınızı rahatsız etmeden ve bina asansörünü yormadan sessiz ve profesyonel bir tahliye sağlar.
                </p>
              </div>
            </div>
          </section>

          {/* CTA - EYLEME ÇAĞRI */}
          <section className="text-center pb-10">
            <h3 className="text-2xl font-black text-slate-900 mb-4">Eviniz Yükseklerde, Gönlünüz Ferah Olsun</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Bina cephenizin asansör kurulumuna uygun olup olmadığını öğrenmek ve Çankaya ile Dikmen bölgesi için ücretsiz ekspertiz talep etmek için bizi hemen arayın.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:05055979406" className="rounded-xl bg-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-amber-500/30 transition-transform hover:scale-105 hover:bg-amber-600">
                Asansör Talebi: 0505 597 94 06
              </a>
              <Link to="/iletisim" className="rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105">
                Online Keşif İste <ArrowRight className="inline h-4 w-4 ml-1" />
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
