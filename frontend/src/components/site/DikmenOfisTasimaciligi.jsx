import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Monitor,
  Building2,
  Files
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFab from "./WhatsAppFab";

export default function DikmenOfisTasimaciligi() {
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
              <Briefcase className="h-4 w-4" /> Kurumsal Taşımacılık Çözümleri
            </span>
            <h1 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Dikmen Ofis Taşımacılığı <br/>
              <span className="text-amber-500 text-2xl sm:text-4xl lg:text-5xl">İş Kaybına Son Veren Nakliyat</span>
            </h1>
            <p className="mx-auto max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
              Dikmen ve Çankaya'daki iş yerinizi, plazanızı veya kliniğinizi taşırken zamanın sizin için nakit olduğunun farkındayız. Arıcıoğlu Nakliyat güvencesiyle, şirketiniz sadece bir hafta sonu içinde yeni adresinde çalışmaya hazır hale gelir.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-16">
          
          {/* ANA İÇERİK VE GÖRSEL */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-amber-600 font-bold bg-amber-50 px-3 py-1 rounded-lg text-sm">
                <Building2 className="h-4 w-4" /> Profesyonel İş Yeri Taşıma
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Ofisinizi Güvenle, <br/> İşinizi Kesintiye Uğratmadan Taşıyoruz
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Dikmen bölgesindeki modern iş merkezleri, ofisler ve kurumlar için özel olarak geliştirdiğimiz taşıma konseptimizle hizmetinizdeyiz. 
                Masa, evrak dolabı, elektronik cihazlar ve şirket arşiviniz, özel <strong>barkodlama ve etiketleme</strong> sistemiyle sıfır karışıklık garantisiyle paketlenir.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Alanında uzman, kadrolu ekibimiz bilgisayar, sunucu (server) ve fotokopi makinesi gibi hassas elektronik eşyalarınızı 
                özel havalı ambalajlarla sarar. Kurumsal taşımacılıkta 35 yıllık Arıcıoğlu Nakliyat kalitesiyle tanışın.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <li className="flex items-center gap-2 text-sm font-bold text-slate-800"><CheckCircle2 className="h-5 w-5 text-amber-500" /> Ücretsiz Kurumsal Ekspertiz</li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-800"><CheckCircle2 className="h-5 w-5 text-amber-500" /> Hafta Sonu / Gece Mesaisi</li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-800"><CheckCircle2 className="h-5 w-5 text-amber-500" /> Gizlilik Sözleşmeli Taşıma</li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-800"><CheckCircle2 className="h-5 w-5 text-amber-500" /> Geniş Araç Filosu</li>
              </ul>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-100 group">
              {/* OFİS TAŞIMACILIĞI RESMİ */}
              <img 
                src="/dikmen-ofis-tasimaciligi.jpg" 
                alt="Dikmen Ofis Taşımacılığı - Arıcıoğlu Kurumsal Nakliyat Ankara" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white font-bold text-sm bg-amber-500 px-3 py-1 rounded-md">
                  Sıfır Hasar, Kusursuz Paketleme
                </span>
              </div>
            </div>
          </section>

          {/* OFİS TAŞIMACILIĞI DETAYLI HİZMETLERİ */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl font-black text-slate-900 mb-4">Dikmen Kurumsal Nakliyat Sürecimiz</h2>
              <p className="text-slate-600">Sistematik ve planlı çalışma prensibimiz sayesinde, ofisinizin büyüklüğü ne olursa olsun anahtar teslim kurulum yapıyoruz.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Aşama 1 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
                <Files className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-black text-slate-900 mb-3">Arşiv ve Evrak Taşıma</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Şirketinizin en önemli değeri olan evraklarınız ve arşiv dosyalarınız, departman ve dolap sırasına göre özel numaralandırılıp kolilenir. Yeni ofisinizde aynı düzende yerleştirilir.
                </p>
              </div>

              {/* Aşama 2 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
                <Monitor className="h-10 w-10 text-slate-700 mb-4" />
                <h3 className="text-xl font-black text-slate-900 mb-3">Elektronik Eşya Güvenliği</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Bilgisayarlar, yazıcılar ve sunucu kabinleri statik elektriklenmeyi önleyen özel kalın patpat naylonlarla sarılır, çelik kasalı araçlarımızda sarsıntısız bir şekilde taşınır.
                </p>
              </div>

              {/* Aşama 3 */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
                <Clock className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-black text-slate-900 mb-3">Esnek Zamanlama</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  İşleyişinizin durmaması için Cuma akşamı başlayan operasyonumuz, Pazartesi sabahı personeliniz işbaşı yapmadan önce anahtar teslim olarak tamamlanır.
                </p>
              </div>

            </div>
          </section>

          {/* NEDEN BİZ (MİNİ BÖLÜM) */}
          <section className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black mb-2">Resmi ve Kurumsal Güvence</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Dikmen ve Çankaya bölgesindeki birçok kurumsal firmanın referansına sahibiz. Tüm ofis taşıma işlemlerimiz <strong>K1 ve K3 Yetki Belgeleri</strong> çatısı altında, tamamen faturalı ve nakliyat sigortası dahilinde yapılmaktadır. Taşıma öncesi imzalanan sözleşme ile haklarınız güvence altına alınır.
              </p>
              <div className="flex items-center gap-4 text-amber-400 font-bold">
                <ShieldCheck className="h-8 w-8" />
                <span>Sigortalı Taşıma Sözleşmesi</span>
              </div>
            </div>
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h4 className="text-lg font-bold mb-4 border-b border-slate-600 pb-2">Ücretsiz Ekspertiz Aşamaları</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0 font-bold text-xs">1</div>
                  <p className="text-sm text-slate-300">Ofisinizin yerinde incelenmesi ve hacim hesaplaması.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0 font-bold text-xs">2</div>
                  <p className="text-sm text-slate-300">Gerekli asansör, araç ve ambalaj malzemesi tespiti.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0 font-bold text-xs">3</div>
                  <p className="text-sm text-slate-300">Zaman planlaması yapılarak sabit fiyat teklifi sunulması.</p>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA - EYLEME ÇAĞRI */}
          <section className="text-center pb-10">
            <h3 className="text-2xl font-black text-slate-900 mb-4">Şirketinizi Profesyonel Ellere Teslim Edin</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Siz sadece yeni ofisinizin keyfini çıkarın; geriye kalan tüm detayları biz düşünelim. Ankara'nın kurumsal ofis taşıma uzmanıyla hemen iletişime geçin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:05055979406" className="rounded-xl bg-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-amber-500/30 transition-transform hover:scale-105 hover:bg-amber-600">
                Ekspertiz Çağır: 0505 597 94 06
              </a>
              <Link to="/iletisim" className="rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105">
                Kurumsal Fiyat Teklifi Al <ArrowRight className="inline h-4 w-4 ml-1" />
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
