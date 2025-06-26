import GradientText from "@/components/GradientText";
import GlowingGridItem from "@/components/GlowingGridItem";

type Item = {
  icon: React.JSX.Element;
  title: string;
  description?: string;
  url: string;
};

const TERRAFORM_ICON = (
  <svg className="fill-current size-16" viewBox="0 0 16 16">
    <path d="M1 0v5.05l4.349 2.527V2.526L1 0zM10.175 5.344l-4.35-2.525v5.05l4.35 2.527V5.344zM10.651 10.396V5.344L15 2.819v5.05l-4.349 2.527zM10.174 16l-4.349-2.526v-5.05l4.349 2.525V16z" />
  </svg>
);

const DYNAMO_ICON = (
  <svg className="fill-current size-16" viewBox="0 0 24 24">
    <path d="M16.606 20.705v-2.371c-1.263 1.082-3.884 1.795-7.066 1.795-3.184 0-5.805-.714-7.068-1.797v2.369c0 1.168 2.903 2.47 7.068 2.47 4.16 0 7.06-1.3 7.066-2.466zm.001-6.765.817-.005v.005c0 .517-.258.998-.75 1.441.601.54.75 1.071.75 1.449a1661.7 1661.7 0 0 0 0 3.87c0 1.881-3.389 3.3-7.884 3.3-4.471 0-7.846-1.404-7.88-3.27a583.119 583.119 0 0 1-.003-3.909c.001-.375.15-.9.745-1.437-.592-.538-.743-1.062-.746-1.435v-3.892c.002-.377.153-.903.747-1.438-.593-.54-.744-1.062-.747-1.435 0-1.357-.002-2.735.002-3.897C1.674 1.412 5.056 0 9.54 0c2.159 0 4.233.356 5.689.974l-.315.766c-1.36-.58-3.319-.91-5.374-.91-4.165 0-7.067 1.3-7.067 2.47 0 1.168 2.902 2.47 7.067 2.47.115 0 .222 0 .334-.005l.033.828c-.122.006-.245.006-.367.006-3.184 0-5.805-.714-7.068-1.798v2.38c.005.45.45.843.821 1.093 1.116.736 3.114 1.239 5.34 1.342l-.037.829c-2.254-.105-4.23-.59-5.5-1.332-.318.245-.623.573-.623.952 0 1.168 2.902 2.47 7.067 2.47.411 0 .812-.014 1.203-.042l.06.826c-.41.03-.833.045-1.263.045-3.184 0-5.805-.713-7.068-1.797v2.368c.005.462.449.855.821 1.104 1.275.842 3.67 1.366 6.247 1.366h.182v.83H9.54c-2.62 0-4.99-.507-6.444-1.359-.317.245-.623.574-.623.954 0 1.168 2.902 2.47 7.067 2.47 4.159 0 7.058-1.298 7.066-2.465v-.007c0-.377-.303-.705-.62-.948a5.732 5.732 0 0 1-.662.336l-.316-.764c.3-.128.56-.266.776-.412.376-.254.823-.651.823-1.1zm4.377-6.915h-2.717a.406.406 0 0 1-.332-.173.42.42 0 0 1-.055-.375l1.204-3.597h-5.403l-2.583 4.974h2.623c.128 0 .248.06.325.164a.418.418 0 0 1 .069.36l-2.249 8.365zm1.249-.128-10.89 11.608a.408.408 0 0 1-.498.075.418.418 0 0 1-.192-.471l2.534-9.426h-2.766a.407.407 0 0 1-.349-.2.418.418 0 0 1-.012-.407l3.014-5.804a.408.408 0 0 1 .36-.222h6.22c.132 0 .256.065.332.174a.422.422 0 0 1 .055.374l-1.204 3.598h3.1c.164 0 .31.099.375.251a.422.422 0 0 1-.08.45zM3.085 20.723a8.107 8.107 0 0 0 1.72.72l.233-.794a7.32 7.32 0 0 1-1.546-.645zm1.72-5.984.233-.795a7.262 7.262 0 0 1-1.546-.646l-.407.72a8.051 8.051 0 0 0 1.72.72zm-1.72-7.427.407-.719c.418.244.939.462 1.546.646l-.232.794a8.046 8.046 0 0 1-1.72-.72z" />
  </svg>
);

const NODES_ICON = (
  <svg className="fill-current size-16" viewBox="0 0 32 32">
    <path d="M26 21.25c-1.581 0.003-2.981 0.781-3.839 1.974l-0.010 0.014-11.642-5.821c0.152-0.422 0.24-0.909 0.24-1.417s-0.088-0.995-0.249-1.447l0.009 0.030 11.642-5.82c0.87 1.19 2.261 1.953 3.831 1.953 2.614 0 4.733-2.119 4.733-4.733s-2.119-4.733-4.733-4.733c-2.614 0-4.733 2.119-4.733 4.733 0 0.006 0 0.012 0 0.018v-0.001c0.007 0.509 0.095 0.995 0.25 1.449l-0.010-0.033-11.642 5.821c-0.872-1.209-2.277-1.987-3.864-1.987-2.623 0-4.75 2.127-4.75 4.75s2.127 4.75 4.75 4.75c1.587 0 2.992-0.778 3.855-1.974l0.010-0.014 11.642 5.821c-0.146 0.422-0.233 0.908-0.24 1.414l-0 0.003c0 2.623 2.127 4.75 4.75 4.75s4.75-2.127 4.75-4.75c0-2.623-2.127-4.75-4.75-4.75v0zM26 2.75c1.795 0 3.25 1.455 3.25 3.25s-1.455 3.25-3.25 3.25c-1.795 0-3.25-1.455-3.25-3.25v0c0.002-1.794 1.456-3.248 3.25-3.25h0zM6 19.25c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25c1.795 0 3.25 1.455 3.25 3.25v0c-0.002 1.794-1.456 3.248-3.25 3.25h-0zM26 29.25c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25c1.795 0 3.25 1.455 3.25 3.25v0c-0.001 1.794-1.456 3.249-3.25 3.25h-0z"></path>
  </svg>
);

const content: Item[] = [
  {
    icon: TERRAFORM_ICON,
    title: "Less vs. Terraform",
    description: "Learn how Less is 97% more efficient than Terraform.",
    url: "https://docs.less.chuva.io/blog/2024/04/05/creating-rest-apis-less-vs-terraform",
  },
  {
    icon: NODES_ICON,
    title: "Implementing Microservice Workflows",
    description:
      "Less is no joke! Learn how to use Less to easily implement the Choreography Coordination Microservices Pattern.",
    url: "https://docs.less.chuva.io/blog/2024/03/27/implementing-microservices-workflows-choreography-coordination-pattern-using-less",
  },
  {
    icon: DYNAMO_ICON,
    title: "Boosting API Performance with Caching",
    description:
      "Learn to leverage Less's built-in Key-Value Store to set up caching for your REST API.",
    url: "https://docs.less.chuva.io/blog/2024/07/17/boosting-api-performance-with-caching-using-aws-dynamodb",
  },
];

type Props = {
  title: string;
  icon: any;
  url: string;
  description?: string;
};

const BlogPost = (item: Props) => (
  <a
    className="flex flex-col items-center gap-4 px-6 py-8"
    key={item.title}
    href={item.url}
    target="_blank"
  >
    {item.icon}
    <div className="flex flex-col gap-2">
      <h1>{item.title}</h1>
      {item.description && (
        <p className="font-light text-md">{item.description}</p>
      )}
    </div>
  </a>
);

export default () => (
  <div className="flex flex-col items-center justify-center gap-16">
    <h1>
      <GradientText text="QUICK-START GUIDES AND TUTORIALS" />
    </h1>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {content.map((item) => (
        <GlowingGridItem
          blur={0.25}
          inactiveZone={0.07}
          proximity={80}
          spread={120}
          variant="default"
          glow={true}
          movementDuration={1}
          borderWidth={1}
          disabled={false}
        >
          <BlogPost
            title={item.title}
            icon={item.icon}
            url={item.url}
            description={item.description}
          ></BlogPost>
        </GlowingGridItem>
      ))}
    </div>
  </div>
);
