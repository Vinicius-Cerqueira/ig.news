import { GetStaticProps } from "next";
import Head from "next/head";
import styles from "./styles.module.scss";
import Prismic from "@prismicio/client";
export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de Jun de 2018</time>
            <strong>Integração do Material UI com ReactJS</strong>
            <p>
              Algo que acontece com muitos Devs é não ter alguma aptidão ou
              mesmo não ter tempo hábil para fazer os Designs e Layouts de suas
              aplicações, mas quem não gosta de um front-end bonitinho?
            </p>
          </a>

          <a href="#">
            <time>12 de Jun de 2018</time>
            <strong>Integração do Material UI com ReactJS</strong>
            <p>
              Algo que acontece com muitos Devs é não ter alguma aptidão ou
              mesmo não ter tempo hábil para fazer os Designs e Layouts de suas
              aplicações, mas quem não gosta de um front-end bonitinho?
            </p>
          </a>

          <a href="#">
            <time>12 de Jun de 2018</time>
            <strong>Integração do Material UI com ReactJS</strong>
            <p>
              Algo que acontece com muitos Devs é não ter alguma aptidão ou
              mesmo não ter tempo hábil para fazer os Designs e Layouts de suas
              aplicações, mas quem não gosta de um front-end bonitinho?
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
