import { SectorLanding, sectorMetadata } from "@/components/SectorLanding";
import { getSector } from "@/lib/sectors";

const sector = getSector("commerces-proximite")!;
export const metadata = sectorMetadata(sector);
export default function Page(){ return <SectorLanding sector={sector} />; }
