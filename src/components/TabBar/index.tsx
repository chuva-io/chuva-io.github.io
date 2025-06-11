import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { JSX } from "react";

type TabsProps = {
  id: string;
  title: string;
  content: JSX.Element;
};

type Props = {
  tabs: TabsProps[];
  className?: string;
};

export default ({ tabs, className }: Props) => (
  <Tabs defaultValue={tabs[0].id} className={className}>
    <TabsList>
      {tabs.map((tab) => (
        <TabsTrigger value={tab.id}>{tab.title}</TabsTrigger>
      ))}
    </TabsList>

    {tabs.map((tab) => (
      <TabsContent value={tab.id}>{tab.content}</TabsContent>
    ))}
  </Tabs>
);
