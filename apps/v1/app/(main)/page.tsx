import { AboutSection } from '@/app/(main)/_components/about'
import { HeroSection } from '@/app/(main)/_components/hero'
import {
  CertificationSection,
  EducationSection,
  ExperienceSection,
} from '@/app/(main)/_components/resume-sections'
import { SkillSection } from '@/app/(main)/_components/skill'
import { createMetadata } from '@/lib/metadata'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <CertificationSection />
      <ExperienceSection />
      <EducationSection />
    </main>
  )
}

export const metadata = createMetadata({
  openGraph: {
    images: `/api/og?image=/assets/logotype.png`,
  },
})
