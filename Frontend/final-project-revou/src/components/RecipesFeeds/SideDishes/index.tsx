import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { chefMainCard, chefMainCard2 } from "@/data";

const SideDishes: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="item-list">
      <h2>SideDishes</h2>
      <div className="">
        {chefMainCard2[0].recipe.map((recipeCategory, index) => (
          <div className="grid grid-cols-5 gap-2 px-10 pt-5" key={index}>
            {showAll
              ? recipeCategory.category.SideDishes.map(
                  (recipe, recipeIndex) => (
                    <div key={recipeIndex}>
                      <img src={recipe.image} alt="" className="rounded-xl" />
                    </div>
                  )
                )
              : recipeCategory.category.SideDishes.slice(0, 5).map(
                  (recipe, recipeIndex) => (
                    <div key={recipeIndex}>
                      <img src={recipe.image} alt="" className="rounded-xl" />
                    </div>
                  )
                )}
          </div>
        ))}
        {chefMainCard2[0].recipe.some(
          (category) => category.category.SideDishes.length > 5
        ) && (
          <div className="px-10 pt-5 flex justify-end items-center">
            <Button onClick={toggleShowAll} className="text-white">
              {showAll ? "Show Less" : "Show More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideDishes;
