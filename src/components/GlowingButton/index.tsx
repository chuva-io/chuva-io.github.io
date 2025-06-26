import GlowingGridItem from "@/components/GlowingGridItem";

export type Props = {
  title: string;
  href: string;
  newTab?: boolean;
  className?: string;
};

export default ({ title, href, newTab, className }: Props) => (
  <GlowingGridItem
    blur={0.25}
    inactiveZone={0.07}
    proximity={80}
    spread={120}
    variant="default"
    glow={true}
    className={className}
    movementDuration={1}
    borderWidth={1}
    disabled={false}
  >
    {newTab ? (
      <a
        className="flex items-center justify-center h-12 px-6 py-4 text-lg font-medium transition-all sm:h-16 hover:text-chuva-white/80"
        key={title}
        href={href}
        target="_blank"
      >
        {title}
      </a>
    ) : (
      <a
        className="flex items-center justify-center h-12 px-6 py-4 text-lg font-medium transition-all sm:h-16 hover:text-chuva-white/80"
        key={title}
        href={href}
      >
        {title}
      </a>
    )}
  </GlowingGridItem>
);
