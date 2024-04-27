"use client";

import React from "react";

import NavbarWrapper from "@/components/NavbarWrapper";
import RecipeHeroPage from "@/components/RecipeHeroPage";
import CatOrNutLoSh from "@/components/CatOrNutLoSh";
import Author from "@/components/Author";
import Ingredients from "@/components/Ingredients";
import Instructions from "@/components/Instructions";
import CommentSections from "@/components/CommentSection";
import SliderImagev2 from "@/components/SliderImagev2";

import { recipeDetailCards } from "@/data";

import Food1 from "../../components/images/sliderImagesv2/food1.jpg";
import Food2 from "../../components/images/sliderImagesv2/food2.jpg";
import Food3 from "../../components/images/sliderImagesv2/food3.jpg";

import Food4 from "../../components/images/sliderImagesv2/food4.jpg";

export default function Recipees() {
  const truncate = (str: string) => {
    if (str.length > 100) {
      return str.substring(0, 150) + "...";
    } else {
      return str;
    }
  };

  const images: string[] = [Food1.src, Food2.src, Food3.src, Food4.src];

  return (
    <div className="px-3 mx-auto justify-center items-center">
      <NavbarWrapper />
      <RecipeHeroPage images={images} />
      <CatOrNutLoSh />
      <Author />
      {/* Recipe summary */}
      {recipeDetailCards.map((card: any) => (
        <div
          key={card.id}
          className="flex flex-col justify-center items-center lg:p-12"
        >
          <h1 className="text-xl font-bold">Recipe Summary :</h1>
          <h1 className="flex justify-center items-center px-36">
            {card.summary}
          </h1>
        </div>
      ))}
      {/* End of recipe summary */}
      {/* Ingredients n Instructions */}
      <div className="lg:flex lg:pl-20">
        <div className="lg:w-1/3">
          <Ingredients className="flex justify-items-center items-center" />
        </div>
        <div className="lg:w-2/3 pt-8 px-5">
          <Instructions />
        </div>
      </div>
      {/* End of ingredients n instructions */}
      {/* Kitchen tools */}
      <div className="lg:flex pt-10 lg:px-20  justify-center items-center gap-3">
        {recipeDetailCards[0].tags.map((tag: any) => (
          <div key={tag.id}>
            <h1 className="bg-slate-200 p-5 gap-2 rounded-xl w-full shadow-lg shadow-slate-500 ">
              {tag}
            </h1>
          </div>
        ))}
        {/* <KitchenTools /> */}
      </div>
      {/* End of kitchen tools */}
      {/* Comment section */}
      <div className="lg:flex lg:pl-20 lg:pt-5">
        <div className="lg:w-1/3 ">
          <CommentSections />
        </div>
        <div className="lg:w-2/3  lg:flex-col justify-start items-start pt-5 pr-10">
          <SliderImagev2
            foodImages={images}
            title="Recipe Galery:"
            className="h-1/3"
          />
        </div>
      </div>
      {/* End of comment section */}
    </div>
  );
}
