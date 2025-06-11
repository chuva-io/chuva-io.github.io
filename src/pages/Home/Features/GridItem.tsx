import { GlowingEffect } from "@/components/ui/glowing-effect";

interface GridItemProps {
  area: string;
  // icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

export default (props: GridItemProps) => {
  return (
    <li className={`${props.area}`}>
      <div className="relative w-full h-full px-2 py-3 bg-chuva-white/10 rounded-2xl">
        <GlowingEffect />
        <div className="space-y-3 text-center">
          <h3 className="font-bold">{props.title}</h3>
          <h2>{props.description}</h2>
        </div>
      </div>
    </li>
  );
};
