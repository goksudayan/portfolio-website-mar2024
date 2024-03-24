import About from "../Components/About";
import AboveTheFold from "../Components/AboveTheFold";
import RecentWork from "../Components/RecentWork";
import Contact from "../Components/Contact-old";
import ToTop from "../Components/ToTop";
import { Helmet } from 'react-helmet'
import  "../styles/style.css"
import Divider from "../Components/Divider";

export default function Home() {
  return (
    <>
      <Helmet><title>Göksu Dayan | Homepage</title></Helmet>
      <ToTop />
      <AboveTheFold />
      <Divider color="gray" />
      <RecentWork />
      <Divider color="gray" />
      <About />
    </>
  );
}