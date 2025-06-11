import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  description: string;
};

type SectionCard = {
  title: string;
  description?: string;
  url: string;
  linkTitle: string;
};

export type Props = {
  header: SectionHeaderProps;
  cards: SectionCard[];
  className?: string;
};

export default (props: Props) => (
  <div
    className={cn(
      "flex flex-col items-center justify-center w-full gap-8",
      props.className
    )}
  >
    <h2 className="text-3xl font-semibold tracking-tight text-center">
      {props.header.title}
    </h2>
    {props.header.description && (
      <h3 className="mb-6 text-2xl text-center">{props.header.description}</h3>
    )}

    <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
      {props.cards.map((card, index) => (
        <Card
          key={`tutorial-${index}`}
          className="flex flex-col transition-all bg-white/5 border-white/10 hover:bg-white/10"
        >
          <CardHeader>
            <CardTitle className="text-xl">{card.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-white/80">{card.description}</p>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full text-white bg-white/10 hover:bg-white/20"
              onClick={() => window.open(card.url, "_blank")}
            >
              {card.linkTitle}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
);
