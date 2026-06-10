import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl rounded-[32px] bg-[#087EA4] px-6 py-12 text-center text-white sm:px-12 sm:py-16">
        <h2 className="text-3xl font-black leading-tight sm:text-5xl">
          Sie benötigen ein individuelles Angebot?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/80">
          Kontaktieren Sie uns. Wir melden uns schnellstmöglich bei Ihnen zurück.
        </p>

        <Link
          href="/kontakt"
          className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-bold text-[#052B48]"
        >
          Angebot anfordern
        </Link>
      </div>
    </section>
  );
}