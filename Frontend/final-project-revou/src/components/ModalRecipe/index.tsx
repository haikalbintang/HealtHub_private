import React, { useEffect, useState } from "react";
import Modal from "../Modal";
import food1 from "../../components/images/sliderImagesv2/food1.jpg";
import time from "../../components/images/svg/clock-lines-svgrepo-com.svg";
import food2 from "../../components/images/slidersv3/1.png";
import Author from "../Author";
import { get } from "http";
import { Button } from "../ui/button";

interface RecipeProps {
  image: string;
  title: string;
  description: string;
  ingredients: string[];
  tags: string[];
  instructions: string;
  complexity: string;
  servings: string;
  time: string;
  category: string;
  nutriScore: number;
}
interface ProfileData {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  location: string;
  phone: string;
  image: string;
  role: string;
  bio: string;
}

const ModalRecipe = ({ recipe, setShowModal }) => {
  const [profileData, setProfileData] = useState({} as ProfileData);
  useEffect(() => {
    fetchAuthorName(recipe.author_id);
  }, [recipe]);

  const fetchAuthorName = async (authorId: number) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/users/${authorId}`);
      if (response.ok) {
        const authorData = await response.json();
        setProfileData(authorData);
        console.log("123", authorData);
      } else {
        throw new Error("Failed to fetch author's username");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Modal showModal={true} setShowModal={closeModal} title="Recipe Details">
        {recipe && (
          <div className="flex">
            <div className="flex flex-col gap-4 w-6/12 h-3/6">
              <div className="flex w-full">
                <div className="flex flex-col justify-start ">
                  <div className="flex p-3 ">
                    <div className="p-5 bg-orange-700 flex justify-center items-center rounded-xl shadow-md shadow-black">
                      <h1 className="text-3xl font-extrabold bg-clip-text text-white uppercase text-center flex justify-center items-center">
                        {recipe.title}
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="flex flex-col">
                      <div className="flex gap-2 text-md">
                        <div>
                          <h1>Recipe By:</h1>
                        </div>
                        <div className="flex gap-1 uppercase">
                          <h1 className="">{profileData.first_name}</h1>
                          <h1>{profileData.last_name}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-10 flex justify-center items-center gap-14">
                    <div className="flex flex-col gap-2 ">
                      <div className="flex gap-2 justify-start items-center">
                        <img src={time.src} alt="" className="h-10 w-10" />
                        <h1>: {recipe.complexity}</h1>
                      </div>
                      <div className="flex gap-2 justify-start items-center">
                        <img src={time.src} alt="" className="h-10 w-10" />
                        <h1>: {recipe.cooktime}Minutes</h1>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <div className="flex gap-2 justify-start items-center">
                        <img src={time.src} alt="" className="h-10 w-10" />
                        <h1>: {recipe.nutriscore}</h1>
                      </div>
                      <div className="flex gap-2 justify-start items-center">
                        <img src={time.src} alt="" className="h-10 w-10" />
                        <h1>: {recipe.servings} People</h1>
                      </div>
                    </div>
                  </div>
                  <div className="pt-10 flex flex-col p-5">
                    <h1 className="text-xl flex justify-center items-center">
                      Description:
                    </h1>
                    <h1>{recipe.description}</h1>
                  </div>
                  <div className="flex justify-end items-end p-5">
                    <Button>Read More</Button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex justify-center items-center  overflow-auto"
              style={{ height: "600px", width: "500px" }}
            >
              <img
                src={food1.src}
                alt=""
                className="rounded-tr-xl rounded-br-xl object-cover object-center h-full w-full"
              />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ModalRecipe;