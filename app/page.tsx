import { ServicesSection } from "@/components/services-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { SuccessStoriesSection } from "@/components/success-stories-section"
import { AiDemoSection } from "@/components/ai-demo-section"
import { GetStartedSection } from "@/components/get-started-section"
import { GrainOverlay } from "@/components/grain-overlay"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <GrainOverlay />
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-16" />

      {/* Services */}
      <ServicesSection />

      {/* Capabilities */}
      <CapabilitiesSection />

      {/* Success Stories */}
      <SuccessStoriesSection />

      {/* AI Demo */}
      <AiDemoSection />

      {/* Get Started */}
      <GetStartedSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
