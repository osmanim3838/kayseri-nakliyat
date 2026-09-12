import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ThumbsUp, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  MapPin,
  Star,
  Award
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFab from "./WhatsAppFab";

export default function NedenBizSayfasi() {
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
              <Star className="h-4 w-4 fill-amber-400" /> Ankara'nın Tercihi
            </span>
            <h1 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Neden Arıcıoğlu Nakliyat? <br/>
              <span className="text-amber-500 text-2xl sm:text-4xl lg:text-5xl">Çankaya ve Dikmen'deki Ayrıcalığınız</span>
            </h1>
            <p className="mx-auto max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
              Yüzlerce nakliye firması arasından sıyrılmamızın bir sebebi var: Biz sadece eşya taşımıyoruz; 35 yıllık tecrübemizle güven, hız ve sıfır hasar garantisi sunuyoruz.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-16">
          
          {/* İÇİ BİLGİ DOLU GÖRSEL ALANI (RESİM 12) */}
          <section className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full">
              {/* ANA RESİM */}
              <img 
                src="/resim12.jpg" 
                alt="Çankaya Dikmen Asansörlü Evden Eve Nakliyat Neden Biz Arıcıoğlu" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              
              {/* RESİM ÜZERİNDEKİ BİLGİ KUTUCUKLARI (OVERLAYS) */}
              <div className="absolute inset-0 bg-slate-900/20" /> {/* Hafif Karartma */}
              
              {/* Kutu 1: Sol Üst */}
              <div className="absolute top-6 left-6 sm:top-10 sm:left-10 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/50 max-w-[200px] animate-fade-in-up">
                <div className="flex items-center gap-3 mb-1">
                  <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                    <Award className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="font-black text-slate-900 text-xl">35+ Yıl</span>
                </div>
                <p className="text-xs font-bold text-slate-600">Sektörel Tecrübe</p>
              </div>

              {/* Kutu 2: Sağ Üst (Mobilde gizlenebilir veya küçülebilir, burada duyarlı yapıldı) */}
              <div className="absolute top-6 right-6 sm:top-10 sm:right-10 bg-slate-900/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-700 max-w-[220px]">
                <div className="flex items-center gap-3 mb-1">
                  <div className="h-8 w-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-amber-400" />
                  </div>
                  <span className="font-black text-white text-lg">25. Kat</span>
                </div>
                <p className="text-xs font-bold text-slate-300">Modüler Asansör Erişimi</p>
              </div>

              {/* Kutu 3: Alt Orta */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl border border-white/50 flex items-center justify-between gap-6">
                <div>
                  <h4 className="font-black text-slate-900 text-sm sm:text-base mb-0.5">Çankaya & Dikmen Uzmanı</h4>
                  <p className="text-[10px] sm:text-xs font-medium text-slate-500">Yerel bölge hakimiyeti ile sorunsuz operasyon.</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </section>

          {/* DETAYLI SEO İÇERİK: NEDEN BİZİ SEÇMELİSİNİZ? */}
          <section className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-black text-slate-900 mb-4">Arıcıoğlu Farkını Yaşayın</h2>
              <p className="text-slate-600">
                Ev taşımak yeterince stresli bir süreçtir. Bu stresi sizin omuzlarınızdan alıp, baştan sona profesyonelce yönetiyoruz. İşte Ankara'da en çok tercih edilen nakliyat firması olmamızın temel nedenleri:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Madde 1 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-shadow flex flex-col sm:flex-row gap-6 items-start">
                <div className="h-14 w-14 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0">
                  <MapPin className="h-7 w-7 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Çankaya ve Dikmen'de Bölgesel Hakimiyet</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Çankaya'nın site kurallarını, Dikmen'in dik yokuşlarını ve dar sokaklarını çok iyi biliyoruz. Diğer firmaların araç sokamadığı veya asansör kuramadığı noktalarda, biz önceden yaptığımız fizibilite sayesinde operasyonu kusursuz tamamlıyoruz.
                  </p>
                </div>
              </div>

              {/* Madde 2 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-shadow flex flex-col sm:flex-row gap-6 items-start">
                <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-7 w-7 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">%100 Sigortalı ve Garantili Taşıma</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Sözde değil, belgede sigorta! Eşyalarınız aracımıza yüklendiği andan itibaren geniş kapsamlı nakliyat sigortası ile güvence altındadır. Kırılma, çizilme veya hasar durumlarında tüm sorumluluğu üstleniyoruz.
                  </p>
                </div>
              </div>

              {/* Madde 3 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-shadow flex flex-col sm:flex-row gap-6 items-start">
                <div className="h-14 w-14 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0">
                  <TrendingUp className="h-7 w-7 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Kendimize Ait Modern Asansör ve Araç Filosu</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Taşeron veya kiralık araç kullanmıyoruz. Tamamı Arıcıoğlu logolu, çelik kasalı evden eve nakliyat araçlarımız ve 25. kata kadar çıkabilen Alman menşeli dış cephe asansörlerimizle hizmetinizdeyiz.
                  </p>
                </div>
              </div>

              {/* Madde 4 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-shadow flex flex-col sm:flex-row gap-6 items-start">
                <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                  <ThumbsUp className="h-7 w-7 text-slate-700" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Eğitimli ve Kadrolu Personel</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Toplama ekiplerle değil, yıllardır bizimle çalışan, ambalajlama ve montaj konusunda uzmanlaşmış kadrolu personelimizle evinize giriyoruz. Mobilyalarınız kendi ustalarımız tarafından sökülüp yeni yerinde aynı kalitede kurulur.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* HIZLI KARŞILAŞTIRMA (SEO İÇİN HARİKA BİR YAPI) */}
          <section className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl font-black mb-8 text-center">Neden Sıradan Firmalar Değil?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-amber-500 font-bold border-b border-amber-500/30 pb-2">Arıcıoğlu Nakliyat</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" /> Sabit ve şeffaf fiyat garantisi.</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" /> Özmal araçlar ve asansör sistemleri.</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" /> Patpat ve hijyenik sıfır ambalaj malzemesi.</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" /> Resmi K1, K3 yetki belgeleri ve sözleşme.</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-slate-500 font-bold border-b border-slate-700 pb-2">Sıradan Firmalar</h4>
                <ul className="space-y-3 opacity-60">
                  <li className="flex items-center gap-2 text-sm text-slate-400">İş bitiminde ortaya çıkan sürpriz ek ücretler.</li>
                  <li className="flex items-center gap-2 text-sm text-slate-400">Taşeron ekipler ve kiralık, standart araçlar.</li>
                  <li className="flex items-center gap-2 text-sm text-slate-400">Kullanılmış, kalitesiz paketleme malzemeleri.</li>
                  <li className="flex items-center gap-2 text-sm text-slate-400">Sözleşmesiz, sigortasız ve güvencesiz taşıma.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA - EYLEME ÇAĞRI */}
          <section className="text-center pb-10">
            <h3 className="text-2xl font-black text-slate-900 mb-4">Farkı Kendiniz Görün</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Siz de eşyalarınızı riske atmak istemiyorsanız, Ankara'nın en güvenilir nakliyat firmasıyla tanışın. Çankaya ve Dikmen bölgesi için anında fiyat alın.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:05055979406" className="rounded-xl bg-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-amber-500/30 transition-transform hover:scale-105 hover:bg-amber-600">
                Bizi Arayın: 0505 597 94 06
              </a>
              <Link to="/iletisim" className="rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105">
                Hemen Fiyat Teklifi Al <ArrowRight className="inline h-4 w-4 ml-1" />
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
