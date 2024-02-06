import Head from "next/head";

type CustomHeadProps = {
  title: string;
};

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Issa Dia is a passionate front end web developer that builds websites and applications"
      />
      <meta
        name="keywords"
        content="issa dia, issa, dia, web developer portfolio, issa web developer, issa frontend developer, issa dia portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Issa Dia's Portfolio" />
      <meta
        property="og:description"
        content="My portfolio based on my VScode interface"
      />
      <meta property="og:image" content="https://postimg.cc/bG3StTpZ" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Issa Dia",
};
