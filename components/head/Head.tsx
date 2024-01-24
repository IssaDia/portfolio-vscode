import Head from 'next/head'

type CustomHeadProps = {
  title: string
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Issa Dia is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="issa dia, issa, dia, web developer portfolio, issa web developer, issa developer, issa dia portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Issa Dia's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

export default CustomHead

CustomHead.defaultProps = {
  title: 'Issa Dia',
}