import Image from "next/image";

export function BrandMark() {
  return (
    <span className="brand-mark" aria-label="WALS">
      <Image className="brand-logo" src="/wals-logo.png" alt="WALS" width={445} height={181} priority />
    </span>
  );
}
