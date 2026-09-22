import { createFileRoute } from "@tanstack/react-router";
import heroCar from "@/assets/hero-car.jpg";
import galleryBefore from "@/assets/gallery-before.jpg";
import galleryAfter from "@/assets/gallery-after.jpg";
import galleryDetail from "@/assets/gallery-detail.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AURA — Центр премиального детейлинга" },
      {
        name: "description",
        content:
          "Студия премиального автомобильного детейлинга: керамическая защита, коррекция ЛКП, реставрация салона. Москва.",
      },
      { property: "og:title", content: "AURA — Центр премиального детейлинга" },
      {
        property: "og:description",
        content:
          "Керамика, полировка и реставрация салона для автомобилей премиум-класса. Глубина, отражённая в лаке.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#gallery", label: "Галерея" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#booking", label: "Запись" },
];

const services = [
  {
    no: "01",
    title: "Полировка и керамика",
    text: "Многоступенчатая полировка и керамическое покрытие сроком до пяти лет.",
  },
  {
    no: "02",
    title: "Коррекция ЛКП",
    text: "Удаление царапин и затёртостей до состояния оригинального заводского лака.",
  },
  {
    no: "03",
    title: "Уход за салоном",
    text: "Глубокая чистка кожи, алькантары и пластика с защитными составами.",
  },
  {
    no: "04",
    title: "Защитная плёнка PPF",
    text: "Антигравийная полиуретановая плёнка с эффектом самовосстановления.",
  },
  {
    no: "05",
    title: "Полировка стёкол",
    text: "Удаление мелких сколов и помутнений, восстановление прозрачности.",
  },
  {
    no: "06",
    title: "Антидождь",
    text: "Гидрофобное покрытие стёкол и кузова, отталкивающее воду и грязь.",
  },
];

const gallery = [
  { src: galleryBefore, label: "До" },
  { src: galleryAfter, label: "После" },
  { src: galleryDetail, label: "Деталь" },
];

const pricing = [
  {
    name: "Эссенция",
    sub: "Для регулярного ухода",
    price: "68 000",
    features: ["Бесконтактная мойка под давлением", "Однократная полировка", "Восковая защита"],
    popular: false,
  },
  {
    name: "Сигнатура",
    sub: "Полная коррекция",
    price: "185 000",
    features: ["Полная коррекция ЛКП", "Керамическое покрытие 3 года", "Глубокая чистка салона"],
    popular: true,
  },
  {
    name: "Атмосфера",
    sub: "Верхний уровень",
    price: "320 000",
    features: ["Двухслойная керамика 5 лет", "Защитная плёнка PPF", "Персональный консьерж"],
    popular: false,
  },
];

const fadeDelays = ["d1", "d2", "d3", "d4"] as const;

function Index() {
  return (
    <div className="min-h-screen bg-ink text-sand font-body antialiased selection:bg-bronze/30">
      <header className="sticky top-0 z-50 border-b border-sand/10 bg-ink/55 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#" className="font-display text-2xl tracking-[0.35em] text-sand">
            AURA
          </a>
          <nav className="hidden items-center gap-9 text-sm text-mist md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-sand">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#booking"
            className="rounded-full bg-sand px-4 py-2 text-sm text-ink transition-colors hover:bg-bronze"
          >
            Записаться
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-ink2 via-ink to-ink" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-28">
          <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <p className={`fadeup ${fadeDelays[0]} mb-6 text-xs uppercase tracking-[0.4em] text-bronze`}>
                Центр премиального детейлинга
              </p>
              <h1
                className={`fadeup ${fadeDelays[1]} max-w-[18ch] font-display text-5xl leading-[0.95] text-balance text-sand sm:text-6xl lg:text-7xl`}
              >
                Глубина, <span className="italic text-bronze">отражённая</span> в лаке.
              </h1>
              <p
                className={`fadeup ${fadeDelays[2]} mt-8 max-w-[46ch] text-base text-pretty text-mist`}
              >
                Каждый блик — выверен. Мы работаем со светом и тенью, возвращая глубокому чёрному
                цвету ту самую глубину, которую завод терял годами.
              </p>
              <div className={`fadeup ${fadeDelays[3]} mt-10 flex flex-wrap items-center gap-4`}>
                <a
                  href="#booking"
                  className="rounded-full bg-sand px-6 py-3 text-sm text-ink transition-colors hover:bg-bronze"
                >
                  Оставить заказ
                </a>
                <a
                  href="#gallery"
                  className="border-b border-sand/30 pb-1 text-sm text-sand/80 transition-colors hover:text-sand"
                >
                  Смотреть работы
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-5">
              <img
                src={heroCar}
                alt="Чёрный спортивный автомобиль в тёмной студии детейлинга"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-[min(1vw,12px)] object-cover ring-1 ring-sand/10"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-bronze">Что мы делаем</p>
            <h2 className="font-display text-4xl leading-tight text-balance text-sand lg:text-5xl">
              Услуги, доведённые до состояния ритуала
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.no}
                className="rounded-2xl bg-ink2/60 p-8 ring-1 ring-sand/10 backdrop-blur-xl"
              >
                <span className="block font-display text-5xl text-bronze">{s.no}</span>
                <h3 className="mt-6 text-lg font-medium text-sand">{s.title}</h3>
                <p className="mt-3 max-w-[40ch] text-sm text-pretty text-mist">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-bronze">Галерея</p>
              <h2 className="font-display text-4xl leading-tight text-balance text-sand lg:text-5xl">
                До и после
              </h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <div
                key={g.label}
                className={`group relative overflow-hidden rounded-[min(1vw,12px)] ring-1 ring-sand/10 ${
                  i === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <img
                  src={g.src}
                  alt={`${g.label} — детейлинг`}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-sand/85 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-ink">
                  {g.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-bronze">Тарифы</p>
            <h2 className="font-display text-4xl leading-tight text-balance text-pretty text-sand lg:text-5xl">
              Прозрачные пакеты без скрытых условий
            </h2>
          </div>
          <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={
                  p.popular
                    ? "relative rounded-2xl bg-ink2/70 p-8 ring-2 ring-bronze/60 backdrop-blur-xl"
                    : "rounded-2xl bg-ink2/50 p-8 ring-1 ring-sand/10 backdrop-blur-xl"
                }
              >
                {p.popular && (
                  <span className="absolute -top-3 right-8 rounded-full bg-bronze px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-ink">
                    Популярный
                  </span>
                )}
                <h3 className="font-display text-2xl text-sand">{p.name}</h3>
                <p className="mt-1 text-sm text-mist">{p.sub}</p>
                <p className="mt-6 font-display text-4xl text-sand">
                  {p.price} <span className="text-lg text-mist">₽</span>
                </p>
                <ul className="mt-8 space-y-3 text-sm text-mist">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-1 text-bronze">✦</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className={
                    p.popular
                      ? "mt-8 block rounded-xl bg-bronze py-3 text-center text-sm text-ink transition-colors hover:bg-sand"
                      : "mt-8 block rounded-xl border border-sand/15 py-3 text-center text-sm text-sand transition-colors hover:border-bronze hover:text-bronze"
                  }
                >
                  Выбрать
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="rounded-3xl bg-ink2/60 p-8 ring-1 ring-sand/10 backdrop-blur-xl lg:p-14">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-bronze">Запись</p>
                <h2 className="font-display text-4xl leading-tight text-balance text-sand lg:text-5xl">
                  Оставьте заявку —
                  <br /> мы перезвоним в течение часа.
                </h2>
                <p className="mt-6 max-w-[42ch] text-sm text-pretty text-mist">
                  Специалист уточнит детали, подберёт пакет и согласует удобное время визита в
                  мастерскую.
                </p>
                <div className="mt-10 space-y-3 font-display text-lg text-sand">
                  <p>+7 921 000-00-00</p>
                  <p className="text-mist">Москва, Пресненская наб., 12</p>
                  <p className="text-mist">Ежедневно 10:00 — 21:00</p>
                </div>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="mb-2 block text-sm text-mist">Имя</label>
                  <input
                    type="text"
                    placeholder="Александр"
                    className="w-full rounded-xl bg-ink/40 px-4 py-3 text-sm text-sand ring-1 ring-sand/10 placeholder:text-mist/50 focus:outline-none focus:ring-bronze"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-mist">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 900 000 00 00"
                    className="w-full rounded-xl bg-ink/40 px-4 py-3 text-sm text-sand ring-1 ring-sand/10 placeholder:text-mist/50 focus:outline-none focus:ring-bronze"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-mist">Марка и модель</label>
                  <input
                    type="text"
                    placeholder="Porsche 911"
                    className="w-full rounded-xl bg-ink/40 px-4 py-3 text-sm text-sand ring-1 ring-sand/10 placeholder:text-mist/50 focus:outline-none focus:ring-bronze"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-sand py-3 text-sm text-ink transition-colors hover:bg-bronze"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-sand/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span className="font-display text-xl tracking-[0.35em] text-sand">AURA</span>
          <p className="text-sm text-mist">
            © 2026 Aura Detailing. Москва, Пресненская наб., 12
          </p>
        </div>
      </footer>
    </div>
  );
}
