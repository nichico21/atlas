import Image from "next/image";
import OpportunityCluster from "./OpportunityCluster";
import OpportunityLegend from "./OpportunityLegend";
import MapControls from "./OpportunityMapControls";

export default function OpportunityMap() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="relative h-[650px]">

        <Image
          src="/images/world-map-opportunities.png"
          alt="World map"
          fill
          className="object-cover opacity-35"
          priority
        />

        <OpportunityCluster
  label="AMÉRIQUE DU NORD"
  value={128}
  top="36%"
  left="12%"
  size={72}
/>

<OpportunityCluster
  label="EUROPE"
  value={204}
  top="22%"
  left="46%"
  size={82}
/>

<OpportunityCluster
  label="MOYEN-ORIENT"
  value={218}
  top="42%"
  left="53%"
  size={88}
/>

<OpportunityCluster
  label="AFRIQUE"
  value={362}
  top="60%"
  left="46%"
  size={100}
/>

<OpportunityCluster
  label="ASIE"
  value={312}
  top="35%"
  left="69%"
  size={96}
/>

<OpportunityCluster
  label="OCÉANIE"
  value={34}
  top="84%"
  left="80%"
  size={60}
/>

<OpportunityLegend />
<MapControls />

      </div>

    </div>
  );
}