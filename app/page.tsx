import { CleanModernCta } from "@/components/clean-modern-cta";
import { DayViewComponent } from "@/components/day-view";
import { HeroSectionComponent } from "@/components/hero-section";
import { RecommendedEventsComponent } from "@/components/recommended-events";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSectionComponent />
        <RecommendedEventsComponent />
        <DayViewComponent />
      </main>
      <CleanModernCta />
    </div>
  );
}
