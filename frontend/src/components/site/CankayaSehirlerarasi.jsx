import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Truck, ArrowRight, CheckCircle2, Clock, MapPin } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFab from "./WhatsAppFab";

export default function CankayaSehirlerarasi() {
  // Sayfa açıldığında en üste kaydırma
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App grain">
      <Header />
      
      <main className="pt-28 pb-20 bg-slate-50">
        {/* ÜST BAŞLIK ALANI */}
        <div className="bg-slate-900 py-16 text-white relative overflow-hidden mb-12">
          <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
            <span className="inline-block mb-4 rounded-full bg-amber-500/20 px-4 py-1.5 text-xs font-bold text-amber-400 border border-amber-500/30">
              Profesyönel Şehirler Arası Çözümler
            </span>
            <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
              Çankaya Şehirler Arası Nakliyat: <span className="text-amber-500">Başkentten Türkiye'nin Dört Bir Yanına</span> Güvenli Taşınma
            </h1>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Ankara'nın kalbinden yola çıkarak Türkiye'nin tüm şehirlerine sigortalı, asansörlü ve anahtar teslim evden eve nakliyat hizmeti sunuyoruz.
            </p>
          </div>
        </div>

        {/* ANA İÇERİK VE GÖRSELLER */}
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            
            <p>
              Ankara'nın kalbi ve en yoğun nüfuslu ilçesi olan <strong>Çankaya</strong>; memur tayinleri, öğrenci hareketliliği ve iş dünyasının merkezinde yer alması sebebiyle yıl boyunca yoğun bir taşınma sirkülasyonuna sahne olur. Çankaya şehirler arası nakliyat süreci, başkentin dinamik yapısı göz önüne alındığında titiz bir planlama gerektirir. İster İstanbul'un karmaşasına ister Ege'nin sahil kasabalarına taşınıyor olun, sürecin sorunsuz ilerlemesi seçeceğiniz firmanın profesyonelliğine bağlıdır.
            </p>

            {/* 1. GÖRSEL */}
            <div className="my-2 overflow-hidden rounded-2xl shadow-md border border-slate-200">
              <img 
                src="/resim1.jpg" 
                alt="Çankaya Şehirler Arası Nakliyat Araçları" 
                className="w-full h-64 sm:h-80 object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <p className="bg-slate-100 py-2.5 px-4 text-center text-xs font-semibold text-slate-500">
                Geniş filomuz ve deneyimli kadromuzla Çankaya'dan tüm Türkiye'ye güvenli sevkıyat.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                Çankaya'da Nakliyat Sürecini Planlarken Bilmeniz Gerekenler
              </h2>
              <p className="mb-4">
                Çankaya gibi trafiği ve dar sokakları yoğun olabilen bir bölgede taşınma gününü organize etmek stratejik bir yaklaşım ister. Başarılı bir sürecin temellerini atmak için şu adımlara dikkat edilmelidir:
              </p>
              
              <ul className="grid grid-cols-1 gap-3 mt-4">
                <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Erken Rezervasyon:</strong> 
                    Özellikle yaz aylarındaki memur tayin dönemlerinde yoğunluk zirveye ulaşır. Taşınma tarihinden en az 3-4 hafta önce planlama yapılmalıdır.
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Bina Yönetimi İzni:</strong> 
                    Çankaya'daki birçok site ve apartmanda taşınma saatleri belirli kurallara bağlıdır. Nakliye gününden önce yönetimle görüşülüp asansör veya park izinleri alınmalıdır.
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Trafik Durumu:</strong> 
                    Nakliye aracının binaya rahatça yanaşabilmesi için operasyonun trafiğin sakin olduğu zaman dilimlerine denk getirilmesi büyük avantaj sağlar.
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Eşya Ayıklama:</strong> 
                    Sadece gerçekten ihtiyaç duyduğunuz eşyaları yeni evinize götürerek hem taşıma maliyetlerini hem de yerleştirme zahmetini azaltabilirsiniz.
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                Profesyonel Kurumsal Taşıma Hizmetlerinin Avantajları
              </h2>
              <p className="mb-4">
                Bireysel nakliyeciler yerine deneyimli kurumsal firmaları tercih etmek, taşınma stresini ve riskleri ortadan kaldırır.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-100 flex flex-col gap-2">
                  <Truck className="h-6 w-6 text-amber-600" />
                  <h3 className="font-bold text-slate-900">Asansörlü Taşımacılık</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Çankaya'nın yüksek katlı binalarında modüler dış cephe asansörleri kullanılarak eşyalar merdivenlere girmeden yüklenir.</p>
                </div>
                <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-100 flex flex-col gap-2">
                  <ShieldCheck className="h-6 w-6 text-amber-600" />
                  <h3 className="font-bold text-slate-900">Sigortalı Nakliyat</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Şehirler arası uzun yollarda oluşabilecek tüm risklere karşı eşyalarınız resmi olarak güvence altına alınır.</p>
                </div>
              </div>
            </div>

            {/* 2. GÖRSEL */}
            <div className="my-2 overflow-hidden rounded-2xl shadow-md border border-slate-200">
              <img 
                src="/resim2.jpg" 
                alt="Asansörlü Şehirler Arası Nakliyat Hizmeti" 
                className="w-full h-64 sm:h-80 object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <p className="bg-slate-100 py-2.5 px-4 text-center text-xs font-semibold text-slate-500">
                Uzman ambalajlama ve güvenli asansör sistemlerimizle eşyalarınız koruma altındadır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                Çankaya Şehirler Arası Taşımacılık Fiyatlarını Belirleyen Unsurlar
              </h2>
              <p className="mb-4">
                Nakliye bütçesi hesaplanırken sabit bir fiyat listesinden ziyade evinize ve rotanıza özel kriterler devreye girer:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li><strong>Mesafe:</strong> Çankaya ile varış şehri arasındaki kilometre, tüketilecek yakıt ve zaman üzerinden fiyatı belirler.</li>
                <li><strong>Eşya Hacmi:</strong> Evinizin oda sayısı (1+1, 3+1 vb.) tahsis edilecek aracın boyutunu ve personel sayısını belirler.</li>
                <li><strong>Ekstra Hizmetler:</strong> Tam kapsamlı mutfak paketlemesi, her iki adreste asansör kurulumu veya özel taşıma gerektiren eşyalar maliyeti şekillendirir.</li>
              </ul>
            </div>

            {/* ÇAĞRI (CTA) ALANI */}
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 p-8 text-white text-center shadow-lg shadow-amber-500/20">
              <h3 className="text-xl font-black mb-2">Çankaya'dan Şehirler Arasına mı Taşınıyorsunuz?</h3>
              <p className="text-xs sm:text-sm text-amber-100 mb-6">Hemen bizimle iletişime geçin, size özel fiyat teklifini ve ücretsiz ekspertiz fırsatını kaçırmayın.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:05055979406" className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-md transition-transform hover:scale-105">
                  Hemen Ara: 0505 597 94 06
                </a>
                <Link to="/teklif-al" className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-md transition-transform hover:scale-105">
                  Teklif Al <ArrowRight className="inline h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}