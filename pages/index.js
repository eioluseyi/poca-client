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
        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#ef842d" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        <meta property="og:url" content="https://tpca.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Poca" />
        <meta property="og:title" content="Poca - The Pomodoro Challenge App" />
        <meta
          property="og:image"
          content={
            "https://res.cloudinary.com/dfe4nl5xi/image/upload/v1675798271/poca/thumbnail_pwb43i.png"
          }
        />
        <meta
          property="og:description"
          content="The pomodoro challenge app designed to boost productivity"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tpca.netlify.app" />
        <meta property="twitter:site_name" content="Poca" />
        <meta
          property="twitter:title"
          content="Poca - The Pomodoro Challenge App"
        />
        <meta
          property="twitter:image"
          content={
            "https://res.cloudinary.com/dfe4nl5xi/image/upload/v1675798271/poca/thumbnail_pwb43i.png"
          }
        />
        <meta
          property="twitter:description"
          content="The pomodoro challenge app designed to boost productivity"
        />
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
