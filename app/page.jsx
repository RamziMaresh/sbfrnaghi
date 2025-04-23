
import Homepage from "./(homes)/(home-5)/(main-demo)/elegant-one-page/page";
export const metadata = {
  title:
    "SBFT || Sameer's Bureau For Trading",
  description:
    "Sameer Naghi for Petrochemical products is an Enterprise was established in 2020. ",
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
