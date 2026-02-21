import GameMode from "./gameMode";

export default function Home() {
  return (
    <>
      <h1 className="text-6xl font-semibold font-serif place-self-center p-4">
        Sailor
      </h1>
      <hr className="w-3/4 place-self-center" />

      <div className="p-6 flex flex-col gap-4 place-self-center">
        <div>
          <GameMode />
        </div>
      </div>
      <div className="flex flex-col w-3/4 place-self-center gap-4">
        <h2 className="flex bg-blue-200 p-2 rounded-md place-self-center">
          Note: Don't Refresh the Page as it will Reset the Game.
        </h2>
      </div>
      <div className="w-3/4 place-self-center mt-4">
        <hr />
        <div className="px-6 py-4">
          <h2 className=" font-semibold text-2xl mb-2">Updates</h2>
          <ul className="list-disc">
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
    </>
  );
}
