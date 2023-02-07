import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChallengeWrapper from "@src/components/ChallengeWrapper";

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Poca - The Pomodoro Challenge App</title>
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
