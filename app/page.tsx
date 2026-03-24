'use client'

import Hero from '@/components/Hero'
import Section from '@/components/Section'
import DayBlock from '@/components/DayBlock'
import ActivityCard from '@/components/ActivityCard'
import QuoteBlock from '@/components/QuoteBlock'
import CTA from '@/components/CTA'

export default function Home() {

  const activities = [
    { title: 'Obstacle Run', index: 0 },
    { title: 'Bijlwerpen', index: 1 },
    { title: 'Boomstam Dragen', index: 2 },
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
            Sommige retraites beginnen met stilte.
            <br />
            <span className="text-fire font-semibold mt-4 block">Wij beginnen met een bijl.</span>
          </p>
        </div>
      </Section>

      {/* 3. INTRO */}
      <Section className="bg-black py-32 px-4">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <h2 className="text-display-lg font-display font-bold">
            Drie dagen weg.
            <br />
            Uit je hoofd.
            <br />
            In je lijf.
          </h2>
        </div>
      </Section>

      {/* 4. DAG 1 — AFBREKEN */}
      <Section id="dag1" className="bg-black">
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
      </Section>

      {/* 5. DAG 2 — OERBAZEN GAMES */}
      <Section id="dag2" className="bg-black">
        <DayBlock
          day={2}
          title="OERBAZEN GAMES"
          subtitle={
            <div className="space-y-4">
              <p>Je werkt.</p>
              <p>Je bouwt.</p>
              <p>Je draagt.</p>
              <p>Je lacht.</p>
              <p className="text-fire font-semibold pt-4">
                Voor het soort humor
                <br />
                dat je alleen met mannen begrijpt.
              </p>
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
      <Section id="dag3" className="bg-sand">
        <DayBlock
          day={3}
          title="RESET"
          bgColor="bg-sand"
          textColor="text-black"
          subtitle={
            <div className="space-y-6 text-black">
              <p>Je loopt.</p>
              <p>Alleen.</p>
              <p>Geen afleiding.</p>
              <p className="font-semibold pt-6 text-lg space-y-3">
                <p>Waar ren je voor weg?</p>
                <p>Wat moet stoppen?</p>
                <p>Wat ga je anders doen?</p>
              </p>
            </div>
          }
        />
      </Section>

      {/* 7. QUOTE BLOK */}
      <QuoteBlock
        text="Soms moet een man even verdwijnen.
        Zodat hij sterker terugkomt."
        bgColor="bg-black"
        textColor="text-white"
      />

      {/* 8. TRIBE BLOK */}
      <Section className="bg-black py-32 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-display-md font-display font-bold text-center">
            OERBAZEN IS GEEN EVENT.
          </h2>
          <div className="text-lg leading-relaxed text-center space-y-4">
            <p className="text-fire font-semibold">Het is een tribe.</p>
            <p>
              Mannen die elkaar blijven zien.
              <br />
              Die elkaar scherp houden.
            </p>
          </div>
        </div>
      </Section>

      {/* 9. AFSLUITING */}
      <Section className="bg-black py-32 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-xl md:text-2xl leading-relaxed">
            Je gaat naar huis.
            <br />
            Niet anders.
            <br />
            <span className="text-fire font-semibold">Maar wel scherper.</span>
          </p>
        </div>
      </Section>

      {/* 10. FINALE CTA */}
      <Section className="bg-black py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-8">
            Klaar?
          </h3>
          <CTA
            text="Word Oerbaas"
            href="/aanmelden"
            variant="primary"
          />
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-gray-400 text-sm">
          <p>OERBAZEN © 2024 | Drie dagen vuur, natuur en eerlijke gesprekken</p>
        </div>
      </footer>
    </main>
  )
}
