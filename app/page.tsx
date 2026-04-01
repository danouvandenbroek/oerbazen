'use client'

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import DayBlock from '@/components/DayBlock'
import ActivityCard from '@/components/ActivityCard'
import QuoteBlock from '@/components/QuoteBlock'
import CTA from '@/components/CTA'

export default function Home() {

  const activities = [
    { title: 'Iets met bijlen', index: 0 },
    { title: 'De rivier', index: 1 },
    { title: 'Het bos', index: 2 },
    { title: 'Bouwen', index: 3 },
    { title: 'Precisie', index: 4 },
    { title: 'Teamwork', index: 5 },
  ]

  return (
    <main className="w-full bg-black">
      {/* 1. HERO */}
      <Hero
        subtitle="De Anti-Retraite Retraite"
        cta={{
          text: 'Bekijk het weekend',
          onClick: () => {
            const element = document.getElementById('dag1')
            element?.scrollIntoView({ behavior: 'smooth' })
          },
        }}
      />

      {/* 2. ANTI-RETREAT BLOK */}
      <Section className="bg-black py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl md:text-2xl leading-relaxed">
            Voor mannen die voelen dat het anders moet.
            <br />
            <span className="text-fire font-semibold mt-4 block">
              Maar geen stilteretraite nodig hebben om daarachter te komen.
            </span>
          </p>
        </div>
      </Section>

      {/* 3. INTRO */}
      <Section className="bg-black py-32 px-4">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <h2 className="text-display-lg font-display font-bold">
            Veel mannen houden alles draaiend.
            <br />
            Werk. Thuis. Verantwoordelijkheden.
            <br />
            En precies daarin raak je soms jezelf kwijt.
          </h2>
          <div className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-2xl mx-auto space-y-4 pt-6">
            <p>Niet in één klap. Langzaam.</p>
            <p>Tot je voelt dat er iets moet verschuiven.</p>
            <p>Oerbazen is geen therapie, geen survivaltocht en geen ondernemersclub.</p>
            <p>Het is een plek voor mannen die voelen dat het anders moet.</p>
            <p>Niet om bevestigd te worden, maar om weer stevig te voelen waar ze staan.</p>
          </div>
        </div>
      </Section>

      {/* 4. DAG 1 — AFBREKEN */}
      <Section id="dag1" className="bg-black relative">
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10">
          <DayBlock
            day={1}
            title="AFBREKEN"
            subtitle={
              <div className="space-y-4">
                <p>Je komt aan.</p>
                <p>Telefoon uit.</p>
                <p>Rollen uit.</p>
                <p>Je hoeft even niks te zijn.</p>
              </div>
            }
          />
        </div>
      </Section>

      {/* 5. DAG 2 */}
      <Section id="dag2" className="bg-black">
        <DayBlock
          day={2}
          title="DE ANTI RETRAITERETRAITE"
          subtitle={
            <div className="space-y-4">
              <p className="text-fire font-semibold">Weg uit de ruis. Terug in beweging.</p>
              <p>Dag twee haalt je uit het denken en terug in beweging.</p>
              <p>Niet met praatjes, maar met weerstand, ritme en de tribe om je heen.</p>
              <p>Daar begint het kantelpunt.</p>
            </div>
          }
        >
          {/* Activity grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {activities.map((activity) => (
              <ActivityCard key={activity.index} {...activity} />
            ))}
          </div>
        </DayBlock>
      </Section>

      {/* 6. DAG 3 — RESET */}
      <Section id="dag3" className="bg-sand relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10">
          <DayBlock
            day={3}
            title="RESET"
            bgColor="bg-transparent"
            textColor="text-black"
            subtitle={
              <div className="space-y-6 text-black">
                <p>Je loopt.</p>
                <p>Alleen.</p>
                <p>Geen afleiding.</p>
                <div className="font-semibold pt-6 text-lg space-y-3">
                  <p>Waar ren je voor weg?</p>
                  <p>Wat moet stoppen?</p>
                  <p>Wat ga je anders doen?</p>
                </div>
              </div>
            }
          />
        </div>
      </Section>

      {/* 7. QUOTE BLOK */}
      <QuoteBlock
        text="Soms moet een man even weg, zodat hij sterker terugkomt."
        bgColor="bg-black"
        textColor="text-white"
      />

      {/* 8. TRIBE BLOK */}
      <Section className="bg-black py-32 px-4 relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-display-md font-display font-bold text-center">
            DE TRIBE
          </h2>
          <div className="text-lg leading-relaxed text-center space-y-4">
            <p className="text-fire font-semibold">Je komt alleen. Je gaat weg als één van de mannen.</p>
            <p>
              Mannen die elkaar blijven zien.
              <br />
              Die elkaar scherp houden.
            </p>
          </div>
        </div>
      </Section>

      {/* 9. PRAKTISCHE INFO */}
      <Section className="bg-gray-950 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-display-md font-display font-bold text-center mb-16">
            PRAKTISCH
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="text-4xl mb-2">📅</div>
              <h3 className="font-display text-xl uppercase tracking-wide text-fire">Wanneer</h3>
              <p className="text-gray-300 text-sm">[Datum nog te bepalen]</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl mb-2">📍</div>
              <h3 className="font-display text-xl uppercase tracking-wide text-fire">Waar</h3>
              <p className="text-gray-300 text-sm">[Locatie nog te bepalen]</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl mb-2">👥</div>
              <h3 className="font-display text-xl uppercase tracking-wide text-fire">Groep</h3>
              <p className="text-gray-300 text-sm">Max. 20 mannen</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl mb-2">💰</div>
              <h3 className="font-display text-xl uppercase tracking-wide text-fire">Investering</h3>
              <p className="text-gray-300 text-sm">[Prijs nog te bepalen]</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 10. AFSLUITING */}
      <Section className="bg-black py-32 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="text-xl md:text-2xl leading-relaxed space-y-3">
            <p>Je gaat naar huis met:</p>
            <p className="text-fire font-semibold">meer rust in jezelf</p>
            <p className="text-fire font-semibold">meer vuur in je lijf</p>
            <p className="text-fire font-semibold">minstens één inzicht dat je niet meer kunt negeren</p>
          </div>
        </div>
      </Section>

      {/* 11. FINALE CTA */}
      <Section className="bg-black py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-8">
            Klaar?
          </h3>
          <CTA
            text="Meld je aan"
            href="/aanmelden"
            variant="primary"
          />
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-gray-400 text-sm">
          <p>OERBAZEN © {new Date().getFullYear()} | Drie dagen vuur, natuur en eerlijke gesprekken</p>
        </div>
      </footer>
    </main>
  )
}
