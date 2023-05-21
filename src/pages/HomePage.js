import { useEffect, useState } from "react";
import HomePageComponent from "./components/HomePageComponent";
import { useSelector } from "react-redux";

function HomePage() {
  const { categories } = useSelector((state) => state.category);

  return (
    <>
      <HomePageComponent categories={categories} />
    </>
  );
}

export default HomePage;
