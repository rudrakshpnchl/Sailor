export default function Register() {
  return (
    <div className="flex place-self-center justify-center items-center">
      <form action="">
        <div className="flex flex-col border-2 rounded-md">
          <h2 className="font-semibold text-xl py-2 px-3">Register in Sailor</h2>
          <hr />
          <div className="flex flex-col gap-6 px-2 py-4 text-sm">
            <div className="grid grid-cols-5 md:grid-cols-2 gap-6">
              <div className="grid gap-4 col-span-2">
                <h3 className="flex items-center justify-end">Handle</h3>{" "}
                <h3 className="flex items-center justify-end">Email</h3>{" "}
                <h3 className="flex items-center justify-end">Password</h3>
              </div>
              <div className="grid gap-4 col-span-3">
                <input type="text" className="p-1 border-2 rounded-md w-9/10" />
                <input type="email" className="p-1 border-2 rounded-md w-9/10" />
                <input
                  type="password"
                  className="p-1 border-2 rounded-md w-9/10"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-gray-300 p-2 rounded-md flex place-self-center border-2 w-2/5 justify-center"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
