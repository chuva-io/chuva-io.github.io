import InfiniteScrollContainer from "@/components/InfiniteScrollContainer";

const images = {
  js: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/6579ccf9e8e7f0519b11e04a_teenyicons_nodejs-solid.svg",
    alt: "JavaScript",
  },
  py: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/6579ccf9126e229a07836e3d_akar-icons_python-fill.svg",
    alt: "Python",
  },
  go: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/6579ccf92b4c15b1f08f39f7_cib_go.svg",
    alt: "Go",
  },
  rs: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/663852b619a4b4e5889dabc1_rust-svgrepo-com%20(2).svg",
    alt: "Rust",
  },
  ts: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/6638520419a4b4e5889d37c7_typescript-16-svgrepo-com.svg",
    alt: "TypeScript",
  },
  net: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/6638520437373f35e05906a7_dot-net-svgrepo-com%20(2).svg",
    alt: ".NET",
  },
  webassembly: {
    src: "/public/images/webassembly.svg",
    alt: "WebAssembly",
  },

  html: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/65a67268ad376843aaaf5e6d_ant-design_html5-filled.svg",
    alt: "HTML",
  },
  swagger: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/6579ccfac2d678d886a8bf9d_simple-icons_swagger.svg",
    alt: "Swagger",
  },
  circleci: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/6579ccf924c53e0509714fdc_logos_circleci.svg",
    alt: "CircleCI",
  },
  npm: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/6579ccf996bf85bce065c338_mdi_npm.svg",
    alt: "NPM",
  },
  mysql: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/6579ccf97bf6187441319e72_fontisto_mysql.svg",
    alt: "MySQL",
  },
  mongodb: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/6579ccf92c4ef929b1d98109_simple-icons_mongodb.svg",
    alt: "MongoDB",
  },
  yarn: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/6579ccf98fabb19301a035ba_akar-icons_yarn-fill.svg",
    alt: "Yarn",
  },
  postgresql: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/6579ccf9efaa60e70665d93d_akar-icons_postgresql-fill.svg",
    alt: "PostgreSQL",
  },
  redux: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/6579ccf9c1694f9720491eda_bxl_redux.svg",
    alt: "Redux",
  },
  newrelic: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/6579ccf9baac14d6f3814dfe_simple-icons_newrelic.svg",
    alt: "New Relic",
  },
  jenkins: {
    src: "https://cdn.prod.website-files.com/65734b2e42e6855718045df6/6579ccf9e8786a28001216fa_devicon-plain_jenkins.svg",
    alt: "Jenkins",
  },
};

const supportedLanguages = [images.js, images.ts, images.py];
const languagesComingSoon = [
  images.go,
  images.rs,
  images.net,
  images.webassembly,
];

export const SupportedLanguages = () => (
  <InfiniteScrollContainer
    items={supportedLanguages.map((image) => (
      <div className="px-8 md:px-16">
        <img src={image.src} alt={image.alt} className=" size-12" />
      </div>
    ))}
    direction="right"
    speed="slow"
    pauseOnHover={false}
  />
);

export const LanguagesComingSoon = () => (
  <div className="flex flex-col gap-6">
    <InfiniteScrollContainer
      items={languagesComingSoon.map((image) => (
        <div className="px-8 md:px-16">
          <img src={image.src} alt={image.alt} className=" size-12" />
        </div>
      ))}
      direction="left"
      speed="slow"
      pauseOnHover={false}
    />
    <p className="text-xs text-chuva-white/60">(coming soon)</p>
  </div>
);
