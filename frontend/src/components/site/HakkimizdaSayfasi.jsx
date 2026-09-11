import { useEffect } from "react";
import { ShieldCheck, Target, Award, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFab from "./WhatsAppFab";

export default function HakkimizdaSayfasi() {
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
              <Award className="h-4 w-4" /> 35 Yıllık Güven ve Tecrübe
            </span>
            <h1 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Arıcıoğlu Nakliyat <br/>
              <span className="text-amber-500 text-2xl sm:text-4xl lg:text-5xl">Çankaya ve Dikmen'in Lider Taşıma Firması</span>
            </h1>
            <p className="mx-auto max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
              Ankara'nın kalbi Çankaya'dan, Dikmen'in yüksek rakımlı tepelerine kadar; eşyalarınızı sadece bir adresten diğerine değil, güvenle geleceğe taşıyoruz. Modern araç filomuz ve kurumsal altyapımızla hizmetinizdeyiz.
            </p>
          </div>
        </section>

        {/* İÇERİK BÖLÜMÜ */}
        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-16">
          
          {/* ÇANKAYA BÖLÜMÜ - Resim 10 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="order-2 lg:order-1 space-y-5">
              <div className="inline-flex items-center gap-2 text-amber-600 font-bold bg-amber-50 px-3 py-1 rounded-lg text-sm">
                <MapPin className="h-4 w-4" /> Çankaya Şubesi
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Çankaya Evden Eve Nakliyat: <br/> Profesyonellik ve Asansörlü Çözümler
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Ankara'nın en yoğun ve prestijli ilçesi Çankaya'da taşınmak, doğru planlama gerektirir. Arıcıoğlu Nakliyat Çankaya şubesi olarak, yüksek katlı binalarda ve dar sokaklarda operasyon sürecini kusursuz yönetiyoruz. 
              </p>
              <p className="text-slate-600 leading-relaxed">
                Gelişmiş <strong>dış cephe asansör sistemlerimiz</strong> sayesinde eşyalarınız bina içi merdivenlere veya dar kapılara sürtünmeden, doğrudan balkon veya pencerelerden güvenle araçlarımıza aktarılır. Atakule manzarasında, yeni evinize huzurla taşınmanın keyfini çıkarın.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <li className="flex items-center gap-2 text-sm font-bold text-slate-800"><CheckCircle2 className="h-5 w-5 text-amber-500" /> Ücretsiz Ekspertiz</li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-800"><CheckCircle2 className="h-5 w-5 text-amber-500" /> %100 Sigortalı Taşıma</li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-800"><CheckCircle2 className="h-5 w-5 text-amber-500" /> Modern Asansör Sistemleri</li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-800"><CheckCircle2 className="h-5 w-5 text-amber-500" /> Geniş Araç Filosu</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 overflow-hidden rounded-2xl shadow-lg border border-slate-100">
              {/* RESİM 10 BURAYA GELECEK */}
              <img src="/resim10.jpg" alt="Çankaya Evden Eve Nakliyat - Asansörlü Taşımacılık Arıcıoğlu" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </section>

          {/* DİKMEN BÖLÜMÜ - Resim 9 */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="overflow-hidden rounded-2xl shadow-lg border border-slate-100">
              {/* RESİM 9 BURAYA GELECEK */}
              <img src="/resim9.jpg" alt="Dikmen Evden Eve Nakliyat Şubesi Arıcıoğlu Nakliyat" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-amber-600 font-bold bg-amber-50 px-3 py-1 rounded-lg text-sm">
                <MapPin className="h-4 w-4" /> Dikmen Şubesi
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Dikmen Evden Eve Nakliyat: <br/> Semtinizin Güvenilir Nakliyecisi
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Dikmen'in yokuşlu sokakları ve zorlu topoğrafyası bizim için bir engel değil, uzmanlık alanımızdır. Semtin yapısını çok iyi bilen deneyimli şoförlerimiz ve taşıma personellerimiz ile eşyalarınız sarsılmadan, tam zamanında yeni adresinize ulaştırılır.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Bünyemizde bulunan kapalı çelik kasa, logolu özmal araçlarımız ve alanında uzman ekibimizle; koltuk takımlarınızdan beyaz eşyalarınıza kadar her bir parçayı havalı patpatlara sararak sıfır hasar prensibiyle taşıyoruz. <strong>Arıcıoğlu Nakliyat</strong> güvencesiyle Dikmen'de taşınmak artık çok kolay.
              </p>
              <div className="mt-4 inline-flex items-center gap-3 bg-amber-500/10 text-amber-700 p-4 rounded-xl border border-amber-500/20">
                <ShieldCheck className="h-8 w-8 shrink-0" />
                <p className="text-sm font-medium">Bütün taşıma işlemlerimiz K1 ve K3 yasal yetki belgeleri çatısı altında, kurumsal sözleşme ile yapılmaktadır.</p>
              </div>
            </div>
          </section>

          {/* MİSYON VİZYON */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/10 transition-transform group-hover:scale-150" />
              <Target className="h-10 w-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-black text-white mb-3">Misyonumuz</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Müşterilerimizin taşınma stresini sıfıra indirmek; Ankara, Çankaya ve Dikmen başta olmak üzere tüm Türkiye'ye eşya güvenliğini ve zamanında teslimatı garanti eden yenilikçi lojistik çözümleri sunmaktır.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-8 rounded-3xl relative overflow-hidden group shadow-lg shadow-amber-500/20">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 transition-transform group-hover:scale-150" />
              <Award className="h-10 w-10 text-white mb-4" />
              <h3 className="text-xl font-black text-white mb-3">Vizyonumuz</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Modern teknolojiyi, asansörlü sistemleri ve kalifiye personeli tek çatı altında birleştirerek; kurumsal taşımacılık sektöründe kalite standartlarını belirleyen ve en çok tavsiye edilen marka olmak.
              </p>
            </div>
          </section>

          {/* CTA - EYLEME ÇAĞRI */}
          <section className="text-center pb-10">
            <h3 className="text-2xl font-black text-slate-900 mb-4">Yeni Evinize Profesyonellerle Taşının</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Çankaya ve Dikmen bölgesinde ücretsiz ekspertiz hizmetimizden yararlanmak ve size özel fiyat teklifi almak için hemen bizimle iletişime geçin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:05055979406" className="rounded-xl bg-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-amber-500/30 transition-transform hover:scale-105 hover:bg-amber-600">
                Bizi Arayın: 0505 597 94 06
              </a>
              <Link to="/iletisim" className="rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105">
                İletişim Formunu Doldur <ArrowRight className="inline h-4 w-4 ml-1" />
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
