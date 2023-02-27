import React from "react";
import { AiFillRocket, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import courses from "../data/courses.json";
import projects from "../data/projects.json";

// holy grail layout with aura-theme from github

const Main = () => {
  return (
    <div class=" font-mono min-h-screen w-full text-[#a277ff] ">
      <div class="min-h-screen flex flex-col">
        <div class=" font-serif text-xl py-12 text-[#edecee]">
          <ul class="flex justify-start space-x-6">
            <li class="">
              <a href="#">
                {" "}
                <AiFillRocket size={30} />{" "}
              </a>
            </li>
            {/* <li class="hover:text-[#a277ff]">
              <a href="#" class="flex">
                Home
              </a>
            </li> */}
            <li class="hover:text-[#a277ff]">
              <a href="./Divesh_Bakshani.pdf" target="_blank">
                Resume
              </a>
            </li>
            <li class="hover:text-[#a277ff]">
              <a href="https://linkedin.com/in/diveshbakshani" target="_blank">
                LinkedIn
              </a>
            </li>
            <li class="hover:text-[#a277ff]">
              <a href="https://github.com/diveshbakshani/" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div class="">
          <h1 class="text-bold text-5xl">
            Hi I'm <span class="underline underline-offset-auto">Divesh</span>
            &nbsp;
            <span class="underline underline-offset-auto  ">Bakshani</span>. I'm
            a Software Developer with a massive interest in space and rocket
            sciences.
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
            <div class="px-4 pt-4 text-3xl font-extrabold w-full bg-gradient-to-tr from-purple-900 to-blue-900">
              {" "}
              Courses
              <hr class="h-0.5 mx-auto my-0 bg-gray-100 border-0 rounded md:mt-4 dark:bg-purple-700"></hr>
            </div>

            <div class="px-4 pt-4 text-3xl font-extrabold w-full bg-gradient-to-tr from-purple-900 to-blue-900">
              {" "}
              Projects{" "}
              <hr class="h-0.5 mx-auto my-0 bg-gray-100 border-0 rounded md:mt-4 dark:bg-purple-800"></hr>
            </div>
          </div>
          <div class="grid grid-cols-2 justify-items-start divide-x-2 divide-purple-500">
            <div class="px-4 pt-4 text-3xl font-bold w-full">
              {courses.map((course) => {
                return (
                  <div key={course.name} class="">
                    {course.name}{" "}
                    <span class=" bg-purple-800 rounded-md p-1 text-base">
                      {course.year}
                    </span>
                    <div class=" font-thin text-[16px] text-white">
                      Grade: {course.grade}{" "}
                    </div>
                    <hr class="h-0.5 mx-0 my-4 bg-gray-100 border-0 rounded md:mt-4 dark:bg-purple-700"></hr>
                  </div>
                );
              })}
            </div>
            <div class="px-4 pt-4 text-3xl font-bold w-full">
              {projects.map((project) => {
                return (
                  <div key={project.name} class="">
                    {project.name}{" "}
                    <span class=" bg-purple-800 rounded-md p-1 text-base">
                      {project.year}
                    </span>
                    <div class=" font-thin text-[16px] text-white">
                      Desc: {project.desc}{" "}
                    </div>
                    <hr class="h-0.5 mx-0 my-4 bg-gray-100 border-0 rounded md:mt-4 dark:bg-purple-700"></hr>
                  </div>
                );
              })}
            </div>
            {/* <hr class="h-0.5 mx-auto my-0 bg-gray-100 border-0 rounded md:mt-4 dark:bg-purple-700"></hr> */}
          </div>
        </div>
      </div>

      {/* <hr class="h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-purple-700"></hr> */}

      <div class="px-8 py-4 flex justify-between items-center">
        <p> </p>
      </div>
    </div>
  );
};

export default Main;
