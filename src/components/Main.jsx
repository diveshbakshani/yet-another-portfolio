import React from "react";
import { AiFillRocket, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

// holy grail layout with aura-theme from github

const Main = () => {
  return (
    <div class="font-mono h-screen w-full text-[#a277ff] ">
      <div class="min-h-screen flex flex-col">
        <div class="font-sans text-xl py-12 text-[#edecee]">
          <ul class="flex justify-start space-x-6">
            <li class="">
              <a href="#">
                {" "}
                <AiFillRocket size={30} />{" "}
              </a>
            </li>
            <li class="hover:text-[#a277ff]">
              <a href="#" class="flex">
                Divesh Bakshani
              </a>
            </li>
            <li class="hover:text-[#a277ff]">
              <a href="#">Resume</a>
            </li>
            <li class="hover:text-[#a277ff]">
              <a href="https://linkedin.com/in/diveshbakshani" target="_blank">
                <AiFillLinkedin size={30} />
              </a>
            </li>
            <li class="hover:text-[#a277ff]">
              <a href="https://github.com/diveshbakshani/" target="_blank">
                <AiFillGithub size={30} />
              </a>
            </li>
          </ul>
        </div>
        <div class="">
          <h1 class="text-bold text-5xl">
            Hi I'm Divesh Bakshani. I'm a Software Developer with a massive
            interest in space and rocket sciences.
          </h1>
          <hr class="h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-purple-700"></hr>
          <div class="flex">
            <div class="flex-none w-32">
              <AiFillRocket size={100} />
            </div>
            <div class="flex-auto text-3xl">
              I have a vast experience of developing fast and efficient apps for
              a wide variety of use cases ranging from WebApps to Machine
              Learning and AI Models.
            </div>
          </div>
          <hr class="h-0.5 mx-auto my-0 bg-gray-100 border-0 rounded md:mt-10 dark:bg-purple-700"></hr>
          <div class="grid grid-cols-2 justify-items-start divide-x-2 divide-purple-500">
            <div class="px-4 pt-4 text-3xl font-bold w-full">
              {" "}
              Projects
              <hr class="h-0.5 mx-auto my-0 bg-gray-100 border-0 rounded md:mt-4 dark:bg-purple-700"></hr>
            </div>

            <div class="px-4 pt-4 text-3xl font-bold w-full">
              {" "}
              Courses{" "}
              <hr class="h-0.5 mx-auto my-0 bg-gray-100 border-0 rounded md:mt-4 dark:bg-purple-700"></hr>
            </div>
          </div>
          <div class="grid grid-cols-2 justify-items-start divide-x-2 divide-purple-500">
            <div class="px-4 pt-4 text-3xl font-bold w-full">
              <div>Project 1 ALLALA</div> <div>Project 1 ALLALA</div>
              <hr class="h-0.5 mx-auto my-0 bg-gray-100 border-0 rounded md:mt-4 dark:bg-purple-700"></hr>
            </div>
            <div class="px-4 pt-4 text-3xl font-bold w-full">
              {" "}
              Courses{" "}
              <hr class="h-0.5 mx-auto my-0 bg-gray-100 border-0 rounded md:mt-4 dark:bg-purple-700"></hr>
            </div>
          </div>
        </div>

        <hr class="h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-purple-700"></hr>

        <div class="px-8 py-4 flex justify-between items-center">
          <p> </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
