"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Flame,
  MapPin,
  Users,
  TrendingUp,
  Building2,
  Star,
  Target,
  Quote,
} from "lucide-react";


export default function CrunchiesPitchDeck() {
  return (
    <div className="min-h-screen bg-[#fff8f1] text-gray-800 p-8 flex flex-col items-center space-y-24">
      {/* Page 1: Title */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center flex flex-col items-center space-y-6"
      >
        <div className="flex items-center justify-center">
<img
  src="/crunchies-logo.png"
  alt="Crunchies Logo"
  className="h-32 sm:h-40 lg:h-52 object-contain drop-shadow-md"
/>

        </div>
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#e85d04] mb-2 tracking-tight">
            CRUNCHIES - HOT CHICKEN
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            Hot Chicken redefined. Born in Munich. Inspired by Nashville.
          </p>
        </div>
      </motion.section>

      {/* Page 2: About Us */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="max-w-5xl text-center"
      >
        <h2 className="text-4xl font-semibold text-[#e85d04] mb-6">
          Wer wir sind
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Crunchies ist ein modernes Street-Food-Konzept mit Fokus auf
          Nashville-Style Hot Chicken Sandwiches. Hinter dem Projekt steht ein
          junges Gründerteam mit Background in Management, Technologie und
          Gastronomie. Unser Ziel ist es, ein qualitativ hochwertiges,
          trendbewusstes Angebot aufzubauen, das sich langfristig in München
          etabliert und organisch wachsen kann – vom Pop-up hin zum eigenen
          Standort.
        </p>
      </motion.section>

      {/* Page 2.1: Zielgruppe */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 1 }}
        className="max-w-5xl text-center"
      >
        <h2 className="text-4xl font-semibold text-[#e85d04] mb-6">
          Unsere Zielgruppe
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Crunchies spricht ein urbanes, trendbewusstes Publikum an, das auf
          Qualität, Geschmack und Lifestyle Wert legt. Wir bedienen die
          Generation, die Fast Food neu definiert – frisch, authentisch und
          stylisch.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow-md bg-white border-none">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-2 text-[#e85d04]">18–40 Jahre</h3>
              <p className="text-gray-700 text-sm">
                Junge Erwachsene, Studierende und Berufseinsteiger mit Vorliebe
                für moderne Gastronomie und Streetfood-Kultur.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md bg-white border-none">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-2 text-[#e85d04]">Urban &amp; Social</h3>
              <p className="text-gray-700 text-sm">
                Menschen, die gerne essen gehen, Social Media nutzen und Orte
                mit Charakter suchen – zum Teilen und Wiederkommen.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md bg-white border-none">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-2 text-[#e85d04]">
                Genuss &amp; Qualität
              </h3>
              <p className="text-gray-700 text-sm">
                Gäste, die hochwertige Produkte, guten Geschmack und eine klare,
                ehrliche Küche schätzen – schnell, aber nie beliebig.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Page 3: Produkte & Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 1 }}
        className="max-w-5xl w-full"
      >
        <h2 className="text-4xl font-semibold text-center text-[#e85d04] mb-6">
          Produkte &amp; Experience
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6 text-center max-w-3xl mx-auto">
          Unsere Bilder zeigen, wofür Crunchies steht: knuspriges Nashville Hot
          Chicken, hausgemachte Saucen, Pickles und ein Umfeld, das nach guter
          Laune, Musik und &quot;Spicy Conversations&quot; schreit. So sieht das
          Produkt aus, das Gäste zum Wiederkommen bringt.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-2xl overflow-hidden shadow-md bg-white">
            <img
              src="/images/crunchies-platter-1.png"
              alt="Crunchies Hot Chicken Platter mit Tenders, Fries und Saucen"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md bg-white">
            <img
              src="/images/crunchies-burger-hero.png"
              alt="Nashville Style Hot Chicken Sandwich von Crunchies"
              className="w-full h-64 object-cover object-[center_85%]"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md bg-white">
            <img
              src="/images/crunchies-platter-2.png"
              alt="Crunchies Tenders mit Pickles und Dip auf Branding-Papier"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Page 3.1: Soft Opening Galerie */}
<motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 1 }}
  className="max-w-5xl w-full text-center"
>
  <h2 className="text-4xl font-semibold text-[#e85d04] mb-6">
    Soft Opening im Rolandseck
  </h2>
  <p className="text-lg leading-relaxed text-gray-700 mb-6 max-w-3xl mx-auto">
    Ein erster Vorgeschmack auf das, was Crunchies ausmacht: echtes Teamwork,
    gute Stimmung und begeisterte Gäste. Unser Soft Opening im Rolandseck war
    der Beweis, dass das Konzept funktioniert – live, laut und lecker.
  </p>
  <div className="grid md:grid-cols-3 gap-5">
    <div className="rounded-2xl overflow-hidden shadow-md bg-white">
      <img
        src="/images/softopening-1.png"
        alt="Crunchies Team im Rolandseck"
        className="w-full h-64 object-cover object-[center_50%]"
      />
    </div>    
    <div className="rounded-2xl overflow-hidden shadow-md bg-white">
      <img
        src="/images/softopening-2.png"
        alt="Crunchies Team serviert Hot Chicken im Rolandseck"
        className="w-full h-64 object-cover object-[center_75%]"
      />
    </div>
    <div className="rounded-2xl overflow-hidden shadow-md bg-white">
      <img
        src="/images/softopening-3.png"
        alt="Gäste-Schlange beim Soft Opening"
        className="w-full h-64 object-cover object-[center_40%]"
      />
    </div>

  </div>
</motion.section>


      {/* Page 4: Konzept */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="grid md:grid-cols-2 gap-8 max-w-5xl"
      >
        <Card className="rounded-2xl shadow-md bg-white border-none">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-[#e85d04] mb-4">
              Unsere Geschäftsidee
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Das Herz von Crunchies sind Nashville-Style Hot Chicken Sandwiches
              in verschiedenen Schärfegraden, ergänzt durch Tenders, Fries,
              Coleslaw und hausgemachte Dips. Wir setzen bewusst auf ein
              schlankes, klar strukturiertes Sortiment, um gleichbleibende
              Qualität, schnelle Abläufe und ein starkes Preis-Leistungs-
              Verhältnis zu gewährleisten.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md bg-[#e85d04] text-white border-none">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              USP &amp; Markenidentität
            </h2>
            <p className="leading-relaxed">
Echtes Nashville Hot Chicken, authentisch umgesetzt für den deutschen Markt.
              <br />
Halal. Handmade. Fresh. – Qualität, die man schmeckt.
              <br />
Eine klare, fokussierte Speisekarte, effiziente Abläufe und ein einprägsamer Markenauftritt, der Vertrauen schafft und im Gedächtnis bleibt.            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Page 5: Key Metrics */}
      {/* Page 5: Soft Opening Performance */}
<motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 1 }}
  className="max-w-5xl w-full"
>
  <h2 className="text-4xl font-semibold text-center text-[#e85d04] mb-3">
    Soft Opening – Performance im Rolandseck
  </h2>
  <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
    Im Oktober waren wir nur an{" "}
    <span className="font-semibold">4 Tagen</span> geöffnet und jeweils von 16:00 bis 21:30 Uhr geöffnet – trotzdem haben wir
    mit einem klar fokussierten Angebot starke Umsätze, hohe Frequenz und eine
    sehr gesunde Wareneinsatzquote erzielt.
  </p>

  <div className="grid md:grid-cols-3 gap-6">
    {/* Gesamtumsatz */}
    <Card className="border-none bg-white text-left shadow-sm">
      <CardContent className="p-5 space-y-2">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <TrendingUp className="w-4 h-4 text-[#e85d04]" />
          Gesamtumsatz Oktober
        </div>
        <div className="text-2xl font-bold">10.746,06 €</div>
      </CardContent>
    </Card>

    {/* Öffnungstage & Gäste */}
    <Card className="border-none bg-white text-left shadow-sm">
      <CardContent className="p-5 space-y-2">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <Users className="w-4 h-4 text-[#e85d04]" />
          Frequenz
        </div>
        <div className="text-2xl font-bold">4 Öffnungstage</div>
        <p className="text-xs text-gray-500">
          ca. 250–300 Gäste pro Tag – häufig ausverkauft
        </p>
      </CardContent>
    </Card>

    {/* Durchschnittlicher Tagesumsatz */}
    <Card className="border-none bg-white text-left shadow-sm">
      <CardContent className="p-5 space-y-2">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <Flame className="w-4 h-4 text-[#e85d04]" />
          Ø Tagesumsatz
        </div>
        <div className="text-2xl font-bold">≈ 2.700 €</div>
        <p className="text-xs text-gray-500">
          auf Basis von 4 Öffnungstagen im Oktober
        </p>
      </CardContent>
    </Card>

    {/* Durchschnittlicher Bon */}
    <Card className="border-none bg-white text-left shadow-sm">
      <CardContent className="p-5 space-y-2">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <TrendingUp className="w-4 h-4 text-[#e85d04]" />
          Durchschnittsbon
        </div>
        <div className="text-2xl font-bold">26,47 €</div>
        <p className="text-xs text-gray-500">
          durchschnittlicher Betrag pro Verkauf im Oktober
        </p>
      </CardContent>
    </Card>

    {/* Wareneinsatzquote */}
    <Card className="border-none bg-white text-left shadow-sm">
      <CardContent className="p-5 space-y-2">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <Target className="w-4 h-4 text-[#e85d04]" />
          Wareneinsatzquote
        </div>
        <div className="text-2xl font-bold">27–30 %</div>
        <p className="text-xs text-gray-500">
          solide Basis für ein profitables Fast-Casual-Konzept
        </p>
      </CardContent>
    </Card>

    {/* Story-Card: Ausverkauft */}
    <Card className="border-none bg-white text-left shadow-sm">
      <CardContent className="p-5 space-y-2">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <MapPin className="w-4 h-4 text-[#e85d04]" />
          Nachfrage
        </div>
        <div className="text-2xl font-bold">Mehr Nachfrage als Kapazität</div>
        <p className="text-xs text-gray-500">
          Mehrere Tage komplett ausverkauft – limitiertes Produktionsvolumen,
          nicht Nachfrage, war die Grenze.
        </p>
      </CardContent>
    </Card>
  </div>
</motion.section>

{/* Page 6: Gäste-Feedback */}
<motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.45, duration: 1 }}
  className="max-w-5xl w-full"
>
  <h2 className="text-4xl font-semibold text-center text-[#e85d04] mb-3">
    Was unsere Gäste sagen
  </h2>
  <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
    Die Rückmeldungen aus dem Soft Opening sprechen für sich. Echtes Feedback
    von Gästen, die Crunchies zum ersten Mal erlebt haben.
  </p>

  <div className="grid md:grid-cols-3 gap-6">
    {/* Review 1 */}
    <Card className="border-none bg-white shadow-md h-full flex flex-col justify-between">
      <CardContent className="p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <Quote className="w-4 h-4 text-[#e85d04]" />
            <span>Google Review</span>
          </div>
          <div className="text-xs text-gray-400">5,0 ★</div>
        </div>

        <p className="text-sm text-gray-800 leading-relaxed">
          <span className="font-semibold">
          Sehr gelungenes Konzept – frisches, saftiges Hähnchen mit richtig guter Würzung, faire Preise und ehrlicher Geschmack. Preis-Leistung passt absolut. Auch meine Kinder waren begeistert. Wir kommen definitiv wieder.
          </span>
        </p>

        <div className="flex flex-col items-start gap-1 text-xs text-gray-500">
          <div className="flex items-center gap-1 text-[#e85d04] text-sm">
            <span>★★★★★</span>
          </div>
          <span className="font-semibold text-gray-700">Bahram Zafaryar</span>
          <span>über Google Reviews</span>
        </div>
      </CardContent>
    </Card>

    {/* Review 2 */}
    <Card className="border-none bg-white shadow-md h-full flex flex-col justify-between">
      <CardContent className="p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <Quote className="w-4 h-4 text-[#e85d04]" />
            <span>Google Review</span>
          </div>
          <div className="text-xs text-gray-400">5,0 ★</div>
        </div>

        <p className="text-sm text-gray-800 leading-relaxed">
          <span className="font-semibold">
          Waren spontan mit der Familie da, das Essen sowie Service waren eine 10/10.
Sehr entgegenkommend und leckeres Essen.
Wiederholungsbedarf.
          </span>
        </p>

        <div className="flex flex-col items-start gap-1 text-xs text-gray-500">
          <div className="flex items-center gap-1 text-[#e85d04] text-sm">
            <span>★★★★★</span>
          </div>
          <span className="font-semibold text-gray-700">Subhan Kia</span>
          <span>über Google Reviews</span>
        </div>
      </CardContent>
    </Card>

    {/* Review 3 */}
    <Card className="border-none bg-white shadow-md h-full flex flex-col justify-between">
      <CardContent className="p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <Quote className="w-4 h-4 text-[#e85d04]" />
            <span>Google Review</span>
          </div>
          <div className="text-xs text-gray-400">5,0 ★</div>
        </div>

        <p className="text-sm text-gray-800 leading-relaxed">
          <span className="font-semibold">
Hätte nicht gedacht, dass wir in Deutschland noch einmal etwas auf dem Niveau von Dave’s Hot Chicken oder Raising Cane’s bekommen – wenn nicht sogar Besser! Definitiv einmalig und empfehlenswert!          </span>{" "}
        </p>

        <div className="flex flex-col items-start gap-1 text-xs text-gray-500">
          <div className="flex items-center gap-1 text-[#e85d04] text-sm">
            <span>★★★★★</span>
          </div>
          <span className="font-semibold text-gray-700">Ibrahim Qaddoumi</span>
          <span>über Google Reviews</span>
        </div>
      </CardContent>
    </Card>
  </div>
</motion.section>

      {/* Page 7: Warum wir ein idealer Partner sind */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-5xl text-center"
      >
        <h2 className="text-4xl font-semibold text-[#e85d04] mb-6">
          Warum wir ein idealer Partner sind
        </h2>
        <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
          Crunchies verbindet ein starkes Produkt mit einem fokussierten
          Betriebskonzept und nachweislicher Nachfrage. Für Vermieter und
          Partner bedeutet das: ein zuverlässiger, professioneller Mieter mit
          Wachstumsperspektive.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow-md bg-white border-none">
            <CardContent className="p-6">
              <Building2 className="text-[#e85d04] w-10 h-10 mb-4 mx-auto" />
              <h3 className="font-bold text-xl mb-2">
                Zuverlässig &amp; professionell
              </h3>
              <p className="text-gray-700 text-sm">
                Klare Abläufe, strukturierter Betrieb und ein Team, das
                langfristig denkt – Crunchies ist nicht als einmaliges Pop-up
                gedacht, sondern als Marke mit Perspektive.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md bg-white border-none">
            <CardContent className="p-6">
              <Star className="text-[#e85d04] w-10 h-10 mb-4 mx-auto" />
              <h3 className="font-bold text-xl mb-2">Bewiesene Nachfrage</h3>
              <p className="text-gray-700 text-sm">
                Mehrere Tage ausverkauft, starke Google-Bewertungen und hohe
                Wiederkehrrate zeigen: Standort und Konzept funktionieren – selbst
                mit begrenzter Kapazität.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md bg-white border-none">
            <CardContent className="p-6">
              <Target className="text-[#e85d04] w-10 h-10 mb-4 mx-auto" />
              <h3 className="font-bold text-xl mb-2">Skalierbares Konzept</h3>
              <p className="text-gray-700 text-sm">
                Schlanke Karte, klar definierte Prozesse und starke Marke –
                ideale Voraussetzungen, um vom ersten Standort auf weitere
                Locations in München und darüber hinaus zu wachsen.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Page 8: Kontakt & Call to Action */}
{/* Page 8: Kontakt & Call to Action */}
<motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 1 }}
  className="text-center max-w-5xl"
>
  <h2 className="text-4xl font-semibold mb-4 text-[#e85d04]">
    Let&apos;s grow together.
  </h2>
  <p className="text-gray-600 mb-6 max-w-xl mx-auto">
    Wir suchen Partner, Betreiber und Vermieter, die gemeinsam mit uns den
    nächsten Crunchies-Standort in München aufbauen möchten. Lassen Sie uns
    ins Gespräch kommen und prüfen, wie Crunchies an Ihrem Standort
    aussehen kann.
  </p>

  <div className="flex flex-col items-center gap-4">
    <Button
      asChild
      className="px-8 py-3 rounded-full text-lg bg-[#e85d04] hover:bg-[#d94f00] text-white"
    >
      <a href="mailto:crunchies.muc@gmail.com">Kontakt aufnehmen</a>
    </Button>

    <div className="text-sm text-gray-700 leading-relaxed mt-4">
      <div className="font-semibold text-[#e85d04] mb-1">
        Kontakt & Social Media
      </div>
      <div>
        📧{" "}
        <a
          href="mailto:crunchies.muc@gmail.com"
          className="underline hover:text-[#e85d04]"
        >
          crunchies.muc@gmail.com
        </a>
      </div>
      <div>
        📱{" "}
        <a
          href="tel:+4917677177677"
          className="underline hover:text-[#e85d04]"
        >
          +49 176 77177677
        </a>
      </div>
      <div>
        📸 Instagram:{" "}
        <a
          href="https://www.instagram.com/crunchies.muc"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#e85d04]"
        >
          @crunchies.muc
        </a>
      </div>
      <div>
        🎬 TikTok:{" "}
        <a
          href="https://www.tiktok.com/@crunchies.muc"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#e85d04]"
        >
          @crunchies.muc
        </a>
      </div>
    </div>
  </div>
</motion.section>


    </div>
  );
}
