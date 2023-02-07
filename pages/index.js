import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChallengeWrapper from "@src/components/ChallengeWrapper";

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Poca - Pomodoro Challenge</title>
        <meta
          property="description"
          content="The pomodoro challenge app designed to boost productivity"
        />

        <meta property="og:url" content="https://tpca.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Poca - The Pomodoro Challenge App" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="The pomodoro challenge app designed to boost productivity"
        />
        {/* <meta property="og:image" content={"url of image"} /> */}
      </Head>
      <ChallengeWrapper />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
