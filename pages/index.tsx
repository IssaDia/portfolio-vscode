import HomeWrapper from "../components/home/wrapper/HomeWrapper";
import Title from "../components/home/title/Title";
import Text from "../components/home/text/Text";
import styles from "../styles/Home.module.css";
import Buttons from "../components/home/buttons/Buttons";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <HomeWrapper>
        <Title surname="issa" lastname="dia" />
        <Text text="Front end Web Developer" />
        <Buttons />
      </HomeWrapper>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
