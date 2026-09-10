import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, House, MapPinned, Phone, CheckCircle2, Package, ShieldCheck, MessageCircle } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

const STEPS = [
  { id: 1, label: "1. Hacim & Ev" },
  { id: 2, label: "2. Kat & Asansör" },
  { id: 3, label: "3. Güzergah" },
  { id: 4, label: "4. Hizmetler" },
  { id: 5, label: "5. Teklif Sonucu" },
];

const HOME_SIZES = [
  { value: "1+1", title: "1+1 Daire", text: "Küçük hacimli eşyalar" },
  { value: "2+1", title: "2+1 Daire", text: "Standart ev eşyaları" },
  { value: "3+1", title: "3+1 Daire", text: "Geniş ev eşyaları" },
  { value: "4+1", title: "4+1 ve Üzeri", text: "Büyük / villa eşyaları" },
];

const SERVICES = [
  { key: "paketleme", label: "Anahtar Teslim Paketleme", note: "Kırılacaklar dahil tüm eşyalar" },
  { key: "depolama", label: "Eşya Depolama Hizmeti", note: "Teslimat öncesi güvenli depolama" },
  { key: "agir", label: "Piyano / Ağır Kasa Taşıma", note: "Vinç ve özel ekipman desteği" },
  { key: "montaj", label: "Gardrop & Mobilya Montaj", note: "Kurulum ve demonte desteği" },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function OfferPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    houseSize: "2+1",
    fromFloor: "Giriş / Zemin Kat",
    toFloor: "Giriş / Zemin Kat",
    elevatorFrom: true,
    elevatorTo: true,
    fromCity: "Çankaya",
    toCity: "Dikmen",
    distance: 750,
    services: ["montaj"],
  });

  const toggleService = (key) => {
    setForm((current) => ({
      ...current,
      services: current.services.includes(key)
        ? current.services.filter((item) => item !== key)
        : [...current.services, key],
    }));
  };

  const next = () => setStep((current) => Math.min(5, current + 1));
  const back = () => setStep((current) => Math.max(1, current - 1));

  const selectedHome = HOME_SIZES.find((item) => item.value === form.houseSize);
  const selectedServices = SERVICES.filter((item) => form.services.includes(item.key));

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Arıcıoğlu Nakliyat | Teklif Al";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-28 sm:pt-32">
        <section className="relative overflow-hidden pb-20 pt-4 sm:pb-28">
          {/* Hafif turuncu ve gri arka plan parlaması (Opsiyonel ferahlık için) */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,130,21,0.08),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.03),transparent_35%)]" />
          
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <motion.div variants={fade} initial="hidden" animate="show" className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  <span className="h-px w-10 bg-primary" />
                  Teklif Al
                </p>
                <h1 className="font-hero text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                  Nakliyat için özel teklif akışı
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Bu sayfa, ana siteden ayrı açılır. Fotoğraftaki çok adımlı yapıya benzer; ancak fiyat hesaplamaz, sadece teklif toplar.
                </p>
              </div>

              <Link
                to="/"
                data-testid="offer-back-home"
                className="hidden items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary md:inline-flex shadow-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                Ana Sayfa
              </Link>
            </motion.div>

            <motion.div
              variants={fade}
              initial="hidden"
              animate="show"
              className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-xl"
            >
              <div className="grid grid-cols-1 border-b border-border bg-secondary/50 md:grid-cols-5">
                {STEPS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    data-testid={`offer-step-tab-${item.id}`}
                    onClick={() => setStep(item.id)}
                    className={`border-b-2 px-4 py-4 text-sm font-bold transition-colors md:border-b-0 md:border-r border-border md:py-5 ${
                      step === item.id
                        ? "border-primary bg-white text-primary"
                        : "border-transparent text-muted-foreground hover:bg-white hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10 bg-white">
                <div className="rounded-[1.5rem] border border-border bg-white shadow-sm p-6 sm:p-8">
                  {step === 1 && (
                    <div>
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Hacim & Ev</p>
                      <h2 className="text-2xl font-black text-foreground">Taşınacak ev tipi nedir?</h2>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                        Eşya hacmini hızlı görmek için en yakın ev tipini seçin.
                      </p>

                      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
                        {HOME_SIZES.map((item) => (
                          <button
                            key={item.value}
                            type="button"
                            data-testid={`offer-house-${item.value}`}
                            onClick={() => setForm((current) => ({ ...current, houseSize: item.value }))}
                            className={`rounded-2xl border p-5 text-left transition-all ${
                              form.houseSize === item.value
                                ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                                : "border-border bg-white hover:border-border/80 hover:bg-secondary"
                            }`}
                          >
                            <House className={`h-6 w-6 ${form.houseSize === item.value ? "text-primary" : "text-muted-foreground"}`} />
                            <div className="mt-4 font-bold text-foreground">{item.title}</div>
                            <div className="mt-1 text-sm text-muted-foreground">{item.text}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Kat & Asansör</p>
                      <h2 className="text-2xl font-black text-foreground">Yükleme ve varış bilgileri</h2>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                        Asansör ve kat bilgisi, doğru ekip planlaması için önemli.
                      </p>

                      <div className="mt-8 grid gap-5 lg:grid-cols-2">
                        <label className="space-y-2 text-sm font-semibold text-foreground/80">
                          Bulunduğu Kat
                          <select
                            data-testid="offer-from-floor"
                            value={form.fromFloor}
                            onChange={(event) => setForm((current) => ({ ...current, fromFloor: event.target.value }))}
                            className="w-full rounded-2xl border border-border bg-white px-4 py-3 font-normal text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary shadow-sm"
                          >
                            <option>Giriş / Zemin Kat</option>
                            <option>1. Kat</option>
                            <option>2. Kat</option>
                            <option>3. Kat ve üzeri</option>
                          </select>
                        </label>

                        <label className="space-y-2 text-sm font-semibold text-foreground/80">
                          İndirileceği Kat
                          <select
                            data-testid="offer-to-floor"
                            value={form.toFloor}
                            onChange={(event) => setForm((current) => ({ ...current, toFloor: event.target.value }))}
                            className="w-full rounded-2xl border border-border bg-white px-4 py-3 font-normal text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary shadow-sm"
                          >
                            <option>Giriş / Zemin Kat</option>
                            <option>1. Kat</option>
                            <option>2. Kat</option>
                            <option>3. Kat ve üzeri</option>
                          </select>
                        </label>

                        <div className="rounded-2xl border border-border bg-secondary/30 p-4">
                          <div className="text-sm font-semibold text-foreground">Çıkış asansörü var mı?</div>
                          <div className="mt-4 flex flex-wrap gap-3">
                            <label className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors">
                              <input
                                data-testid="offer-elevator-from-yes"
                                type="radio"
                                checked={form.elevatorFrom}
                                onChange={() => setForm((current) => ({ ...current, elevatorFrom: true }))}
                              />
                              Evet var
                            </label>
                            <label className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors">
                              <input
                                data-testid="offer-elevator-from-no"
                                type="radio"
                                checked={!form.elevatorFrom}
                                onChange={() => setForm((current) => ({ ...current, elevatorFrom: false }))}
                              />
                              Hayır, yok
                            </label>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-border bg-secondary/30 p-4">
                          <div className="text-sm font-semibold text-foreground">Varış asansörü var mı?</div>
                          <div className="mt-4 flex flex-wrap gap-3">
                            <label className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors">
                              <input
                                data-testid="offer-elevator-to-yes"
                                type="radio"
                                checked={form.elevatorTo}
                                onChange={() => setForm((current) => ({ ...current, elevatorTo: true }))}
                              />
                              Evet var
                            </label>
                            <label className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors">
                              <input
                                data-testid="offer-elevator-to-no"
                                type="radio"
                                checked={!form.elevatorTo}
                                onChange={() => setForm((current) => ({ ...current, elevatorTo: false }))}
                              />
                              Hayır, yok
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Güzergah</p>
                      <h2 className="text-2xl font-black text-foreground">Nereden nereye taşınacak?</h2>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                        Şehir ve yaklaşık mesafe, sevkiyat planını netleştirir.
                      </p>

                      <div className="mt-8 grid gap-5 lg:grid-cols-2">
                        <label className="space-y-2 text-sm font-semibold text-foreground/80">
                          Nereden (Çıkış ili)
                          <input
                            data-testid="offer-from-city"
                            value={form.fromCity}
                            onChange={(event) => setForm((current) => ({ ...current, fromCity: event.target.value }))}
                            placeholder="Örn. Ankara / Çankaya"
                            className="w-full rounded-2xl border border-border bg-white px-4 py-3 font-normal text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary shadow-sm"
                          />
                        </label>

                        <label className="space-y-2 text-sm font-semibold text-foreground/80">
                          Yaklaşık Yol Mesafesi (KM)
                          <input
                            data-testid="offer-distance"
                            type="number"
                            value={form.distance}
                            onChange={(event) => setForm((current) => ({ ...current, distance: Number(event.target.value) }))}
                            className="w-full rounded-2xl border border-border bg-white px-4 py-3 font-normal text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary shadow-sm"
                          />
                        </label>

                        <label className="space-y-2 text-sm font-semibold text-foreground/80 lg:col-span-2">
                          Nereye (Varış ili)
                          <input
                            data-testid="offer-to-city"
                            value={form.toCity}
                            onChange={(event) => setForm((current) => ({ ...current, toCity: event.target.value }))}
                            placeholder="Örn. DİKMEN / ÇANKAYA"
                            className="w-full rounded-2xl border border-border bg-white px-4 py-3 font-normal text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary shadow-sm"
                          />
                        </label>
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div>
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Hizmetler</p>
                      <h2 className="text-2xl font-black text-foreground">Ek hizmet seçin</h2>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                        Taşınma günü ihtiyaç duyabileceğiniz servisleri seçebilirsiniz.
                      </p>

                      <div className="mt-8 grid gap-4 lg:grid-cols-2">
                        {SERVICES.map((item) => (
                          <label
                            key={item.key}
                            className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition-colors ${
                              form.services.includes(item.key)
                                ? "border-primary bg-primary/10"
                                : "border-border bg-white hover:bg-secondary"
                            }`}
                          >
                            <input
                              data-testid={`offer-service-${item.key}`}
                              type="checkbox"
                              checked={form.services.includes(item.key)}
                              onChange={() => toggleService(item.key)}
                              className="mt-1 h-4 w-4 rounded border-border bg-transparent text-primary focus:ring-primary"
                            />
                            <div>
                              <div className="font-bold text-foreground">{item.label}</div>
                              <div className="mt-1 text-sm text-muted-foreground">{item.note}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div>
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Teklif Sonucu</p>
                      <h2 className="text-2xl font-black text-foreground">Ön bilgi özeti hazır</h2>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                        Bu ekranda fiyat değil, taşınma planı özeti görünüyor. İsterseniz direkt arayabilir veya WhatsApp&apos;tan gönderebilirsiniz.
                      </p>

                      <div className="mt-8 rounded-[1.5rem] border border-border bg-secondary/50 p-6 text-foreground">
                        <div className="flex items-center gap-2 text-primary font-bold">
                          <CheckCircle2 className="h-5 w-5" />
                          Seçilen bilgiler
                        </div>
                        <div className="mt-5 grid gap-3 text-sm text-foreground/80 sm:grid-cols-2">
                          <div>Ev tipi: <span className="font-bold text-foreground">{selectedHome?.title}</span></div>
                          <div>Çıkış: <span className="font-bold text-foreground">{form.fromCity}</span></div>
                          <div>Varış: <span className="font-bold text-foreground">{form.toCity}</span></div>
                          <div>Mesafe: <span className="font-bold text-foreground">{form.distance} KM</span></div>
                          <div>Çıkış asansörü: <span className="font-bold text-foreground">{form.elevatorFrom ? "Var" : "Yok"}</span></div>
                          <div>Varış asansörü: <span className="font-bold text-foreground">{form.elevatorTo ? "Var" : "Yok"}</span></div>
                        </div>
                        <div className="mt-5 text-sm text-foreground/80">
                          Ek hizmetler: <span className="font-bold text-foreground">{selectedServices.length ? selectedServices.map((item) => item.label).join(", ") : "Yok"}</span>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <a
                          href={`tel:${PHONE_TEL}`}
                          data-testid="offer-call-final"
                          className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
                        >
                          <Phone className="h-5 w-5" />
                          {PHONE_DISPLAY}
                        </a>
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid="offer-whatsapp-final"
                          className="inline-flex items-center justify-center gap-3 rounded-full border border-border bg-white px-6 py-4 font-bold text-foreground transition-colors hover:bg-secondary shadow-sm"
                        >
                          <MessageCircle className="h-5 w-5" />
                          WhatsApp&apos;tan Yaz
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
                    <button
                      type="button"
                      data-testid="offer-back-btn"
                      onClick={back}
                      disabled={step === 1}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 font-semibold text-foreground transition-colors disabled:cursor-not-allowed disabled:opacity-40 hover:bg-secondary shadow-sm"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Geri Dön
                    </button>
                    {step < 5 ? (
                      <button
                        type="button"
                        data-testid="offer-next-btn"
                        onClick={next}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
                      >
                        Devam Et
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <Link
                        to="/#iletisim"
                        data-testid="offer-contact-link"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
                      >
                        İletişim sayfasına git
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>

                <aside className="rounded-[1.5rem] border border-border bg-secondary/30 p-6 sm:p-8 self-start">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Nakliyat</div>
                      <div className="text-xl font-bold text-foreground">Hızlı ön görüşme</div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.25rem] border border-border bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <MapPinned className="h-4 w-4 text-primary" />
                      Ankara merkezli taşımacılık
                    </div>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Bu form, müşterinin teklif talebini adım adım toplar. Hesap makinesi gibi çalışmaz; doğrudan iletişim ve planlama için hazırlanmıştır.
                    </p>
                  </div>

                  <div className="mt-6 rounded-[1.25rem] border border-border bg-white p-5 shadow-sm">
                    <div className="text-sm font-semibold text-foreground">Seçim özeti</div>
                    <ul className="mt-4 space-y-3 text-sm text-muted-foreground font-medium">
                      <li>• Ev tipi: {selectedHome?.title}</li>
                      <li>• Güzergah: {form.fromCity} → {form.toCity}</li>
                      <li>• Mesafe: {form.distance} KM</li>
                      <li>• Ek hizmet sayısı: {selectedServices.length}</li>
                    </ul>
                  </div>

                  <Link
                    to="/"
                    data-testid="offer-home-link"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Ana sayfaya dön
                  </Link>
                </aside>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
