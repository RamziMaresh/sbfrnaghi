
import Homepage from "./(homes)/(home-5)/(main-demo)/elegant-one-page/page";
export const metadata = {
  title: {
    template: "Sameer Naghi for petrochemical Trading | Saudi Arabia",
    default: "Sameer Naghi for petrochemical Trading", // a default is required when creating a template
    description: "Petrochemicals, Chemicals, ubricant . Gas Engine Lubricant / Diesel Engine, Coal , Chare Coal Had Coal ,Pet Coal, Building Material, Fertilizers, Food Stuff and Oak Wood – Play wood",
  },
  title_two: {
    template: "Sameer Naghi for petrochemical Trading | Saudi Arabia",
    default: "Sameer Naghi for petrochemical Trading", // a default is required when creating a template
    description: "The production capacity of SAFRA refinery is continuously expanding to meet increasing demand for products while keeping pace with the latest technological developments and simultaneously meeting...",
  },
};

export default function Home() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          {/* Main Panel */}
          <Homepage />
          {/*  Panel */}
        </div>
      </div>
    </>
  );
}
