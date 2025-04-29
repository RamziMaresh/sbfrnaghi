
import Homepage from "./(homes)/(home-5)/(main-demo)/elegant-one-page/page";
export const metadata = {
  title: {
    template: "Sameer Naghi Est for petroleum Trading | Saudi Arabia",
    default: "Sameer Naghi Est for petroleum Trading", // a default is required when creating a template
    description: "Petrochemicals, Chemicals, ubricant . Gas Engine Lubricant / Diesel Engine, Coal , Chare Coal Had Coal ,Pet Coal, Building Material, Fertilizers, Food Stuff and Oak Wood – Play wood",
  },
  title_two: {
    template: "Sameer Naghi Est for petroleum Trading | Saudi Arabia",
    default: "Sameer Naghi for petroleum Trading", // a default is required when creating a template
    description: "Petrochemicals, Chemicals, ubricant . Gas Engine Lubricant / Diesel Engine, Coal , Chare Coal Had Coal ,Pet Coal, Building Material, Fertilizers, Food Stuff and Oak Wood – Play wood",
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
