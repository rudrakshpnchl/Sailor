// import Auth from "./auth/auth";
import GameMode from "./gameMode";
import { useState } from "react";
import Login from "./auth/login";
import Signup from "./auth/signup";

export default function Home() {
  const [clickedLogin, isClickedLogin] = useState(false);
  const [clickedSignup, isClickedSignup] = useState(false);

  function login() {
    isClickedLogin(true);
  }
  function signup() {
    isClickedSignup(true);
  }

  return (
    <div className="w-8/10 place-self-center">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold p-4">Sailor</h1>
        <div className="self-center">
          <div>
            <h2 className="text-sm md:text-2xl hover:cursor-pointer">
              <button className="underline text-blue-700" onClick={login}>
                Enter
              </button>{" "}
              |{" "}
              <button className="underline text-blue-700" onClick={signup}>
                Register
              </button>
            </h2>
          </div>
        </div>
      </div>
      <hr />

      <div className="p-6 flex flex-col gap-4 place-self-center">
        <div>
          {clickedLogin ? <Login /> : clickedSignup ? <Signup /> : <GameMode />}
        </div>
      </div>
      <div className="">
        <hr />
        <div className="px-6 py-4">
          <h2 className=" font-semibold text-2xl mb-2">Updates</h2>
          <ul className="list-disc">
            <li>This Week's Theme: Random</li>
            <li>New Lists Updates every Week.</li>
            <li>
              To Contribute to Lists:{" "}
              <a
                href="https://github.com/rudrakshpnchl/Sailor.git"
                className="text-blue-700 underline"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
