import React from "react";

const Nav = () => {
  return (
    <div class="bg-black py-12 px-64 text-slate-200">
      <ul class="flex justify-start space-x-4">
        <li class="hover:text-purple-700">
          <a href="#">Divesh Bakshani</a>
        </li>
        <li class="hover:text-purple-700">
          <a href="#">Projects</a>
        </li>
        <li class="hover:text-purple-700">
          <a href="#">Courses</a>
        </li>
        <li class="hover:text-purple-700">
          <a href="#">Resume</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
