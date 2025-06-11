import {
  GlowingEffect,
  type GlowingEffectProps,
} from "@/components/ui/glowing-effect";

interface GridItemProps {
  area: string;
  children: React.ReactNode;
}

interface GridItemProps extends GlowingEffectProps {
  area: string;
  children: React.ReactNode;
}

export default ({
  area,
  children,
  blur = 0.25,
  inactiveZone = 0.07,
  proximity = 40,
  spread = 80,
  variant = "default",
  glow = true,
  className,
  movementDuration = 4,
  borderWidth = 1,
  disabled = false,
}: GridItemProps) => {
  return (
    <li className={`w-full list-none ${area}`}>
      <div className="relative w-full h-full rounded-md shadow-lg bg-chuva-white/10">
        <GlowingEffect
          blur={blur}
          inactiveZone={inactiveZone}
          proximity={proximity}
          spread={spread}
          variant={variant}
          glow={glow}
          className={className}
          movementDuration={movementDuration}
          borderWidth={borderWidth}
          disabled={disabled}
        />
        <div className="relative flex flex-col justify-between h-full gap-6 rounded-xl">
          <div className="relative flex flex-col justify-between h-full gap-6 rounded-xl">
            {children}
          </div>
        </div>
      </div>
    </li>
  );
};
