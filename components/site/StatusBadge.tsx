import type { FeatureStatus } from "@/lib/content";

export function StatusBadge({ status }: { status: FeatureStatus | "En préparation" }) {
  return <span className="status-badge">{status}</span>;
}
