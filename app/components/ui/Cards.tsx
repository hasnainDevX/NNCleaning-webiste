"use client";
import carpetcleaning from "../../assets/carpetcleaning.jpg";
import condoroom from "../../assets/condoroom.jpg";
import floorcleaning from "../../assets/floorcleaning.jpg";
import sofas from "../../assets/condo.jpg";
import officeroom from "../../assets/office.jpg";
import vaccuming from "../../assets/vacumming.jpg";
import { Card, Carousel } from "./apple-cards-carousel";
const cardStyle = {
  padding: "30px",
  border: "none",
  borderRadius: "15px",
  marginBottom: "30px",
  boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
  background: "linear-gradient(135deg, #fefcea 0%, #f1da36 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out",
} as const;

const ulStyle = {
  padding: "30px",
  border: "none",
  borderRadius: "15px",
  marginBottom: "30px",
  boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
  background: "linear-gradient(135deg, #fefcea 0%, #f1da36 100%)",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out",
} as const;

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full mx-auto md:px-[1rem] px-[2rem] py-[2.5rem]">
      <h2 className="max-w-6xl mx-auto text-xl md:text-5xl font-bold text-neutral-800 font-sans xl:px-0 lg:px-[3.5rem] md:px-[3rem]">
        What we do?
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    title: "Comprehensive House Cleaning",
    src: sofas,
   
  },
  {
    title: "Professional Condo Cleaning services",
    src: condoroom,
  },
  {
    title: "Professional Office Cleaning Services",
    src: officeroom,
  },
  {
    title: "Specialized Floor Cleaning",
    src: floorcleaning,
  },
  {
    title: "Specialized Carpet Cleaning",
    src: vaccuming,
  },
  {
    title: "Specialized Deep Cleaning",
    src: carpetcleaning,
  },
];



