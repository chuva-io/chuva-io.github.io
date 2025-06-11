import CodeBlock from "@/components/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type TabsProps = {
  language: "javascript" | "typescript" | "python";
  title: string;
  code: string;
  filename: string;
};

type Props = {
  tabs: TabsProps[];
  showLineNumbers?: boolean;
};

export default ({ tabs, showLineNumbers = false }: Props) => (
  <Tabs defaultValue={tabs[0].language}>
    <TabsList>
      {tabs.map((tab) => (
        <TabsTrigger value={tab.language}>{tab.title}</TabsTrigger>
      ))}
    </TabsList>

    {tabs.map((tab) => (
      <TabsContent value={tab.language}>
        <CodeBlock
          code={tab.code}
          language={tab.language}
          filename={tab.filename}
          showLineNumbers={showLineNumbers}
        />
      </TabsContent>
    ))}
  </Tabs>
);
