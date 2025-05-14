//import "swiper/css";
import "../public/assets/css/styles.css";
import "jarallax/dist/jarallax.min.css";
//import "swiper/css/effect-fade";
//import "react-modal-video/css/modal-video.css";
//import "photoswipe/dist/photoswipe.css";

//


export const metadata = {
  title: {
    template: "Sameer Naghi Est for petroleum Trading | Saudi Arabia",
    default: "Sameer Naghi Est for petroleum Trading", // a default is required when creating a template
  description: "Supply Products are Petrochemicals, Chemicals, ubricant. Gas Engine Lubricant / Diesel Engine, Coal , Chare Coal Had Coal ,Pet Coal, Building Material, Fertilizers, Food Stuff and Oak Wood – Play wood",
  },
  title_two: {
    template: "About us",
    default: "Sameer Naghi Est for petroleum Trading | Petroleum Supply", // a default is required when creating a template
  description: "Supply Products are Petrochemicals, Chemicals, ubricant. Gas Engine Lubricant / Diesel Engine, Coal , Chare Coal Had Coal ,Pet Coal, Building Material, Fertilizers, Food Stuff and Oak Wood – Play wood",
  },

  description: "Supply Products are Petrochemicals, Chemicals, ubricant. Gas Engine Lubricant / Diesel Engine, Coal , Chare Coal Had Coal ,Pet Coal, Building Material, Fertilizers, Food Stuff and Oak Wood – Play wood",
};




export default function RootLayout({ children }) {


  return (
    <html lang="en" className="no-mobile no-touch ">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500&family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="appear-animate body">{children}</body>
    </html>
  );
}
