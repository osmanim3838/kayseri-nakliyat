import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Box, 
  Shield, 
  Camera, 
  ThermometerSun, 
  Key,
  CheckCircle2, 
  ArrowRight,
  Warehouse,
  ClipboardCheck
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFab from "./WhatsAppFab";

export default function DikmenDepolamaSayfasi() {
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
              <Warehouse className="h-4 w-4" /> Arıcıoğlu Depolama Tesisleri
            </span>
            <h1 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Dikmen Eşya Depolama <br/>
              <span className="text-amber-500 text-2xl sm:text-4xl lg:text-5xl">Güvenli, Temiz ve Sigortalı Alanlar</span>
            </h1>
            <p className="mx-auto max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
              Fazla eşyalarınız, ofis arşiviniz veya geçici süreyle saklamanız gereken tüm değerleriniz için Ankara'nın en modern depolama tesisi. Çankaya ve Dikmen bölgesindeki müşterilerimize özel, 7/24 güvenlikli depo kiralama hizmeti sunuyoruz.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 sm:px-8 space-y-16">
          
          {/* ANA GÖRSEL VE TANITIM BÖLÜMÜ */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-100 group order-2 lg:order-1">
              {/* DEPOLAMA RESMİ */}
              <img 
                src="/dikmen-esya-depolama.jpg" 
                alt="Dikmen Eşya Depolama Tesisi Arıcıoğlu Nakliyat Ankara" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-2">
                <Camera className="h-4 w-4" /> 7/24 Kameralı Güvenlik
              </div>
            </div>

            <div className="space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-amber-600 font-bold bg-amber-50 px-3 py-1 rounded-lg text-sm">
                <Shield className="h-4 w-4" /> %100 Güvenli Depolama
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Eşyalarınız Bize Emanet, <br/> Gözünüz Arkada Kalmasın
              </h2>
              <p className="text-slate-600 leading-relaxed">
                İster ev tadilatı sürecinde eşyalarınızı kısa süreli saklamak isteyin, ister yurt dışı görevi nedeniyle uzun süreli bir depoya ihtiyaç duyun... Arıcıoğlu Depolama Tesisleri, Ankara'daki en güvenli sığınağınızdır.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Dikmen ve Çankaya standartlarına yaraşır, Avrupa standartlarındaki lojistik merkezimizde eşyalarınız kişiye özel, <strong>rutubetsiz, haşerelere karşı periyodik ilaçlanan</strong> kapalı odalarda muhafaza edilir. 
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <li className="flex items-center gap-2 text-sm font-bold text-slate-800"><CheckCircle2 className="h-5 w-5 text-amber-500" /> Uluslararası Standartlarda Tesis</li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-800"><CheckCircle2 className="h-5 w-5 text-amber-500" /> Kişiye Özel Kilitli Odalar</li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-800"><CheckCircle2 className="h-5 w-5 text-amber-500" /> Profesyonel Paketleme</li>
                <li className="flex items-center gap-2 text-sm font-bold text-slate-800"><CheckCircle2 className="h-5 w-5 text-amber-500" /> İstenilen Süre Kadar Kiralama</li>
              </ul>
            </div>
          </section>

          {/* DEPOLAMA ÖZELLİKLERİ GRID (SEO DOSTU) */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl font-black text-slate-900 mb-4">Neden Arıcıoğlu Depolama?</h2>
              <p className="text-slate-600">Sıradan bir depo veya bodrum katı değil; eşyalarınızın formunu, kokusunu ve yapısını korumak için özel tasarlanmış profesyonel lojistik tesisiyiz.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-slate-900 flex items-center justify-center mb-4">
                  <Camera className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">Üst Düzey Güvenlik</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tesisimiz 7/24 gece görüşlü kameralarla izlenmekte ve özel güvenlik personeli ile korunmaktadır. Yangın ve hırsızlık alarmları aktiftir.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-amber-500 flex items-center justify-center mb-4">
                  <ThermometerSun className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">İklim & Rutubet Kontrolü</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Depolarımız düzenli olarak havalandırılır. Ahşap mobilyalarınızın ve kumaşlarınızın çürümemesi, nemlenmemesi için iklimlendirme sistemine sahiptir.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-slate-900 flex items-center justify-center mb-4">
                  <ClipboardCheck className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">Özel Barkod Sistemi</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Depoya giren her bir koliniz veya eşyanız numaralandırılarak liste halinde tutanak altına alınır. Kaybolma veya karışma riski sıfırdır.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-amber-500 flex items-center justify-center mb-4">
                  <Key className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">Kişiye Özel Anahtar</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sizin için ayrılan deponun veya odanın kilitlenmesinin ardından, alanınıza sadece siz veya yetki verdiğiniz kişiler erişebilir.
                </p>
              </div>

            </div>
          </section>

          {/* İŞLEYİŞ SÜRECİ */}
          <section className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl font-black mb-8 text-center">Süreç Nasıl İşliyor?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
              <div className="hidden sm:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-slate-700 -z-0" />
              
              <div className="relative z-10 text-center space-y-3">
                <div className="mx-auto h-12 w-12 rounded-full bg-amber-500 flex items-center justify-center text-xl font-black shadow-[0_0_15px_rgba(245,158,11,0.5)]">1</div>
                <h4 className="text-lg font-bold text-amber-400">Ücretsiz Ekspertiz</h4>
                <p className="text-slate-400 text-sm">Dikmen veya Çankaya'daki adresinize gelerek depolanacak eşya hacmini hesaplarız.</p>
              </div>

              <div className="relative z-10 text-center space-y-3">
                <div className="mx-auto h-12 w-12 rounded-full bg-amber-500 flex items-center justify-center text-xl font-black shadow-[0_0_15px_rgba(245,158,11,0.5)]">2</div>
                <h4 className="text-lg font-bold text-amber-400">Ambalaj & Transfer</h4>
                <p className="text-slate-400 text-sm">Tozlanma ve neme karşı eşyalarınız kalın naylonlarla hava almayacak şekilde paketlenip tesise getirilir.</p>
              </div>

              <div className="relative z-10 text-center space-y-3">
                <div className="mx-auto h-12 w-12 rounded-full bg-amber-500 flex items-center justify-center text-xl font-black shadow-[0_0_15px_rgba(245,158,11,0.5)]">3</div>
                <h4 className="text-lg font-bold text-amber-400">Güvenli Depolama</h4>
                <p className="text-slate-400 text-sm">Sözleşme yapılarak eşyalarınız kilitli odalara yerleştirilir. İstediğiniz tarihe kadar güvenle saklanır.</p>
              </div>
            </div>
          </section>

          {/* CTA - EYLEME ÇAĞRI */}
          <section className="text-center pb-10">
            <h3 className="text-2xl font-black text-slate-900 mb-4">Eşyalarınız İçin Güvenli Bir Alan Ayırtın</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Uygun fiyatlı ve yüksek güvenlikli depo kiralama hizmetimiz hakkında bilgi almak için hemen bizimle iletişime geçin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:05055979406" className="rounded-xl bg-amber-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-amber-500/30 transition-transform hover:scale-105 hover:bg-amber-600">
                Depo Fiyatı Al: 0505 597 94 06
              </a>
              <Link to="/iletisim" className="rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105">
                Mesaj Bırakın <ArrowRight className="inline h-4 w-4 ml-1" />
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
