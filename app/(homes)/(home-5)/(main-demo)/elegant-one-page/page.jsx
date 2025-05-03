import Footer5 from "@/components/footers/Footer5";

import Header5 from "@/components/headers/Header5";
import Home5 from "@/components/homes/home-5";
import Hero1 from "@/components/homes/home-5/heros/Hero1";
import { elegantOnepage } from "@/data/menu";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export const metadata = {
  title:
    "Sameer Naghi for petroleum Trading | Saudi Arabia",
    default: "Sameer Naghi for petroleum Trading | Saudi Arabia", // a default is required when creating a template
    description: "Our services are Petrochemicals, Chemicals, ubricant . Gas Engine Lubricant / Diesel Engine, Coal , Chare Coal Had Coal ,Pet Coal, Building Material, Fertilizers, Food Stuff and Oak Wood – Play wood",

};
export default function Homepage() {
  return (
    <>
      <div className="">
        <div className="page" id="top">
          <nav className="main-nav transparent wow-menubar pb-100">
            <Header5 links={elegantOnepage} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-dark-alpha-30 parallax-5 light-content z-index-1 scrollSpysection"
              style={{
                backgroundImage:
                "url(/assets/images/banner/main_banner_2.jpg)",
              }}
              id="home"
            >
              <Hero1 />
            </ParallaxContainer>

            <Home5 onePage />
          </main>
          <footer className="footer light-content footer z-index-1 position-relative">
            <Footer5 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
