import { opportunities } from "@/data/opportunities";
import OpportunityCard from "./OpportunityCard";

export default function OpportunityGrid() {
  return (
    <div className="grid grid-cols-3 gap-8">

      {opportunities.map((opportunity) => (

        <OpportunityCard
          key={opportunity.id}
          opportunity={opportunity}
        />

      ))}

    </div>
  );
}