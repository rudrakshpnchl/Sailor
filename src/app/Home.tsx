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
    </>
  );
}
