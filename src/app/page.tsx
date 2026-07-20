import Hero from "@/components/home/Hero";
import QuickActions from "@/components/home/QuickActions";

import RecentOpportunities from "@/components/dashboard/RecentOpportunities";
import RecentCompanies from "@/components/dashboard/RecentCompanies";
import StatsCards from "@/components/dashboard/StatsCards";

export default function Home() {
  return (
    <>
      <Hero />

      <QuickActions />

      <main className="mx-auto mt-8 mb-8 max-w-7xl px-6">

        {/* Ligne 1 */}
        <div className="grid grid-cols-3 items-stretch gap-8">

          <div className="col-span-2 h-full">
            <RecentOpportunities />
          </div>

          <div className="h-full">
            <StatsCards />
            </div>

        </div>

        {/* Ligne 2 */}
        <div className="mt-8 grid grid-cols-3 gap-8">

          <div className="col-span-2">
            <RecentCompanies />
          </div>

          <div>
            {/* Bloc libre pour plus tard */}
          </div>

        </div>

      </main>
    </>
  );
}