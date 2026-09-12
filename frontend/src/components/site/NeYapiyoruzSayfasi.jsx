import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Package, 
  ArrowUpToLine, 
  Map, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFab from "./WhatsAppFab";

export default function NeYapiyoruzSayfasi() {
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
              <Package className="h-4 w-4" /> Arıcıoğlu Nakliyat Hizmetleri
            </span>
            <h1 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Ne Yapıyoruz? <br/>
              <span className="text-amber-500 text-2xl sm:text-4xl lg:text-5xl">Dikmen'de Kusursuz Taşımacılık</span>
            </h1>
            <p className="mx-auto max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
              Eşyalarınızı sadece bir adresten diğerine taşımıyoruz; onlara değer veriyor, sigortalıyor ve yeni yaşam alanınıza hasarsız bir şekilde ulaştırıyoruz. Ankara'nın her noktasına, özellikle Dikmen bölgesine özel VIP nakliyat çözümleri sunuyoruz.
            </p>
          </div>
        </section>

        {/* ANA GÖRSEL VE GİRİŞ BÖLÜMÜ */}
        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-16">
          
          <section className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="relative h-64 sm:h-96 lg:h-[500px] w-full overflow-hidden">
              {/* RESİM 11 BURAYA GELECEK - SEO ALT ETİKETİ İLE */}
              <img 
                src="/dikmen-ne-yapiyoruz.jpg" 
                alt="Dikmen Asansörlü Evden Eve Nakliyat - Atakule Manzaralı Arıcıoğlu Nakliyat" 
                className="absolute inset-0 w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6 sm:p-10">
                <div className="text-white max-w-2xl">
                  <div className="inline-flex items-center gap-2 mb-3 rounded-md bg-amber-500 px-3 py-1 text-xs font-bold text-white">
                    <ShieldCheck className="h-4 w-4" /> K1 & K3 Yetki Belgeli
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white">Ankara'nın Zirvesine Uzanan Hizmet Kalitesi</h2>
                </div>
              </div>
            </div>
          </section>

          {/* HİZMETLER GRID BÖLÜMÜ - SEO ODAKLI İÇERİKLER */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-black text-slate-900 mb-4">Size Nasıl Yardımcı Olabiliriz?</h2>
              <p className="text-slate-600">Her taşınma süreci benzersizdir. İster evinizi, ister ofisinizi taşıyın; ihtiyacınıza en uygun profesyonel çözümü üretiyoruz.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Hizmet 1 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="h-14 w-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Package className="h-7 w-7 text-amber-500" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">Dikmen Evden Eve Nakliyat</h3>
                <p className="text-slate-600 mb-5 leading-relaxed text-sm">
                  Eşyalarınızın paketlenmesinden mobilyalarınızın de-montaj ve montajına kadar tüm süreci anahtar teslim yönetiyoruz. Dikmen bölgesindeki sitelerin ve apartmanların taşıma kurallarına hakim, profesyonel bir ekiple hizmet veriyoruz.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-700 font-medium"><CheckCircle2 className="h-4 w-4 text-amber-500" /> Havalı naylon ile A'dan Z'ye ambalajlama</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700 font-medium"><CheckCircle2 className="h-4 w-4 text-amber-500" /> Marangozlu mobilya kurulumu</li>
                </ul>
              </div>

              {/* Hizmet 2 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="h-14 w-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ArrowUpToLine className="h-7 w-7 text-amber-500" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">Dikmen Asansörlü Taşımacılık</h3>
                <p className="text-slate-600 mb-5 leading-relaxed text-sm">
                  Dikmen'in dar merdivenli veya yüksek katlı binalarında eşyalarınızın zarar görme riskini sıfıra indiriyoruz. Dış cepheye kurulan modern asansör sistemlerimizle, eşyalarınız doğrudan balkonunuza veya pencerenize güvenle ulaştırılır.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-700 font-medium"><CheckCircle2 className="h-4 w-4 text-amber-500" /> 25. kata kadar ulaşabilen sistemler</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700 font-medium"><CheckCircle2 className="h-4 w-4 text-amber-500" /> Merdiven boşluğu hasarlarına son</li>
                </ul>
              </div>

              {/* Hizmet 3 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="h-14 w-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Map className="h-7 w-7 text-amber-500" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">Şehirler Arası Nakliyat</h3>
                <p className="text-slate-600 mb-5 leading-relaxed text-sm">
                  Ankara'dan Türkiye'nin 81 iline kesintisiz, sigortalı nakliyat hizmeti. Dikmen veya Dikmen'deki evinizden alınan eşyalarınız, geniş hacimli ve çelik kasalı araçlarımızla yeni şehrinize zamanında ve eksiksiz teslim edilir.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-700 font-medium"><CheckCircle2 className="h-4 w-4 text-amber-500" /> Tam kapsamlı nakliyat sigortası</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700 font-medium"><CheckCircle2 className="h-4 w-4 text-amber-500" /> Sabit fiyat garantisi</li>
                </ul>
              </div>

              {/* Hizmet 4 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="h-14 w-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Briefcase className="h-7 w-7 text-amber-500" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">Ofis ve İş Yeri Taşımacılığı</h3>
                <p className="text-slate-600 mb-5 leading-relaxed text-sm">
                  Dikmen'daki plazalardan, Dikmen'deki iş merkezlerine kadar ticari taşınmalarınızda iş kaybınızı en aza indiriyoruz. Evraklarınız, elektronik cihazlarınız ve ofis mobilyalarınız sistemli bir şekilde etiketlenerek taşınır.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-700 font-medium"><CheckCircle2 className="h-4 w-4 text-amber-500" /> Gizlilik ve güvenlik öncelikli taşıma</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700 font-medium"><CheckCircle2 className="h-4 w-4 text-amber-500" /> Hafta sonu veya gece taşıma opsiyonu</li>
                </ul>
              </div>

            </div>
          </section>

          {/* CTA - EYLEME ÇAĞRI */}
          <section className="text-center pb-10 mt-10">
            <div className="bg-slate-900 rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-amber-500/20" />
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 relative z-10">Taşınma Planınızı Birlikte Yapalım</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
                Eşyalarınızın miktarına ve taşınacağınız yerin durumuna göre en uygun aracı ve asansör sistemini belirlemek için ücretsiz ekspertiz talep edin.
              </p>
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <a href="tel:05055979406" className="rounded-xl bg-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-amber-500/30 transition-transform hover:scale-105 hover:bg-amber-600">
                  Hemen Arayın: 0505 597 94 06
                </a>
                <Link to="/iletisim" className="rounded-xl bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-lg transition-transform hover:scale-105">
                  Fiyat Teklifi Al <ArrowRight className="inline h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
