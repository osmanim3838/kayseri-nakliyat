import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Truck, 
  ShieldCheck, 
  PackageCheck, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Home,
  Clock,
  Wrench
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFab from "./WhatsAppFab";

export default function EvdenEveNakliyatSayfasi() {
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
              <Truck className="h-4 w-4" /> Profesyonel Şehir içi & Şehirler Arası Taşıma
            </span>
            <h1 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Ankara Evden Eve Nakliyat <br/>
              <span className="text-amber-500 text-2xl sm:text-4xl lg:text-5xl">Çankaya ve Dikmen'in En Güvenilir Nakliye Firması</span>
            </h1>
            <p className="mx-auto max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
              Ev taşımak artık gözünüzü korkutmasın! Arıcıoğlu Nakliyat olarak 35 yıllık tecrübemiz, sigortalı sözleşmeli altyapımız ve uzman kadromuzla eşyalarınızı yeni yuvanıza güvenle taşıyoruz.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-16">
          
          {/* ANA GÖRSEL VE TANITIM BÖLÜMÜ */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-amber-600 font-bold bg-amber-50 px-3 py-1 rounded-lg text-sm">
                <Home className="h-4 w-4" /> Anahtar Teslim Ev Taşıma
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Evden Eve Nakliyatta <br/> Kusursuz Hizmet Anlayışı
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Ankara genelinde, özellikle <strong>Çankaya ve Dikmen</strong> bölgelerinde binlerce mutlu müşteriye ulaştık. Evden eve nakliyat sürecini baştan sona planlıyor; eşyalarınızın ambalajlanmasından mobilyalarınızın montajına kadar her adımı titizlikle yönetiyoruz.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Kullandığımız yüksek kaliteli havalı patpat naylonlar, özel koliler ve sıfır risk politikamız sayesinde eşyalarınız darbelere karşı tamamen koruma altındadır. Arıcıoğlu Nakliyat ile taşınmak sadece bir yer değiştirme değil, yeni bir başlangıçtır.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <li className="flex items-center gap-2 text-sm font-bold text-slate-800"><CheckCircle2 className="h-5 w-5 text-amber-500" /> Ücretsiz Ekspertiz</li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-800"><CheckCircle2 className="h-5 w-5 text-amber-500" /> %100 Kapsamlı Sigorta</li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-800"><CheckCircle2 className="h-5 w-5 text-amber-500" /> Uzman Marangozlu Kadro</li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-800"><CheckCircle2 className="h-5 w-5 text-amber-500" /> Asansörlü Nakliye Opsiyonu</li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-100 group">
              {/* EVDEN EVE NAKLİYAT RESMİ */}
              <img 
                src="/evden-eve-nakliyat.jpg" 
                alt="Ankara Çankaya Dikmen Evden Eve Nakliyat - Arıcıoğlu Nakliyat" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-xs sm:text-sm bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                  Özmal Geniş Araç Filosu ve Profesyonel Ekip
                </span>
              </div>
            </div>
          </section>

          {/* TAŞIMA ADIMLARI (4'LÜ GRID) */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl font-black text-slate-900 mb-4">Evden Eve Nakliyat Sürecimiz Nasıl İşler?</h2>
              <p className="text-slate-600">Sizin için karmaşık ve yorucu olan bu süreci, 4 basit ve sistemli adımda profesyonellikle tamamlıyoruz.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-lg mb-4">01</div>
                <h3 className="text-lg font-black text-slate-900 mb-2">Ekspertiz ve Planlama</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Evinize gelerek eşyalarınızı inceler; kullanılacak araç boyutunu, ambalaj miktarını ve asansör gereksinimini belirleriz.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-lg mb-4">02</div>
                <h3 className="text-lg font-black text-slate-900 mb-2">Profesyonel Ambalaj</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Kırılacak eşyalarınız, mobilyalarınız ve beyaz eşyalarınız türüne uygun patpat malzemelerle özenle sarılıp kolilenir.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-lg mb-4">03</div>
                <h3 className="text-lg font-black text-slate-900 mb-2">Güvenli Araç Yerleşimi</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Çelik kasalı, kapalı kamyonlarımıza eşyalarınız sarsılmayacak ve üst üste sıkışmayacak şekilde düzenli olarak istiflenir.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-lg mb-4">04</div>
                <h3 className="text-lg font-black text-slate-900 mb-2">Kurulum ve Teslimat</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Yeni adresinizde mobilyalarınız marangozumuz tarafından kurulur, eşyalarınız istediğiniz odalara yerleştirilip teslim edilir.
                </p>
              </div>

            </div>
          </section>

          {/* VURUCU BİLGİ ALANI */}
          <section className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">Güvencemiz Altındasınız</span>
              <h3 className="text-2xl sm:text-3xl font-black">Neden Evden Eve Nakliyatta Bizi Seçmelisiniz?</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Sektörde korsan ve belgesiz taşımacılık yapan birçok merdiven altı firma bulunmaktadır. Arıcıoğlu Nakliyat; resmi <strong>K1 ve K3 yetki belgeleri</strong>, faturalı çalışma prensibi ve tam kapsamlı nakliyat sigortası ile yasal ve kurumsal güvence sunar.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-slate-800 p-4 rounded-xl border border-slate-700">
                <ShieldCheck className="h-6 w-6 text-amber-500 shrink-0" />
                <span className="text-sm font-bold">Resmi Sözleşmeli ve Sigortalı Ev Taşıma</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800 p-4 rounded-xl border border-slate-700">
                <Wrench className="h-6 w-6 text-amber-500 shrink-0" />
                <span className="text-sm font-bold">Uzman Marangoz Desteği (Söküm & Kurulum)</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800 p-4 rounded-xl border border-slate-700">
                <PackageCheck className="h-6 w-6 text-amber-500 shrink-0" />
                <span className="text-sm font-bold">Hijyenik ve Sıfır Ambalaj Malzemeleri</span>
              </div>
            </div>
          </section>

          {/* CTA - EYLEME ÇAĞRI */}
          <section className="text-center pb-10">
            <h3 className="text-2xl font-black text-slate-900 mb-4">Evini Taşımak İsteyenlerin Doğru Adresi</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Çankaya, Dikmen ve tüm Ankara ilçelerinde evden eve nakliyat fiyat teklifi almak için hemen arayın, taşınma yükünüzü hafifletelim.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:05055979406" className="rounded-xl bg-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-amber-500/30 transition-transform hover:scale-105 hover:bg-amber-600">
                Hemen Ara: 0505 597 94 06
              </a>
              <Link to="/iletisim" className="rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105">
                Ücretsiz Teklif Al <ArrowRight className="inline h-4 w-4 ml-1" />
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
