import HomeWrapper from "../components/home/wrapper/HomeWrapper";
import Title from "../components/home/title/Title";
import Text from "../components/home/text/Text";
import styles from "../styles/Home.module.css";
import Buttons from "../components/home/buttons";
import BackgroundText from "../components/home/backgroundText";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <HomeWrapper>
        <BackgroundText text="I BUILD WEBSITES" />
        <Title surname="issa" lastname="dia" />
        <Text text="Front end Web Developer" />
      </HomeWrapper>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
