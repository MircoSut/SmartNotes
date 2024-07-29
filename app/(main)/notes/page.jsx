import { FiPlusCircle } from "react-icons/fi";

export default function Notes() {
  return (
    <div className="h-screen bg-black text-white">
      <div className="flex flex-row gap-10 justify-center items-center">
        <h1 className="text-xl font-bold p-2">Notes</h1>
        <button>
          <FiPlusCircle className="text-4xl" />
        </button>
      </div>
      <div className="flex flex-wrap p-4 justify-center">
        <div className="w-full sm:w-1/2 md:w-1/3 border-2 border-white p-2 m-4">
          <h2>Health</h2>
          <p>bugwugiuhxiu wuyxb yuvwuyvvw</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 border-2 border-white p-2 m-4">
          <h2>Health</h2>
          <p>bugwugiuhxiu wuyxb yuvwuyvvw</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 border-2 border-white p-2 m-4">
          <h2>Health</h2>
          <p>bugwugiuhxiu wuyxb yuvwuyvvw</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 border-2 border-white p-2 m-4">
          <h2>Health</h2>
          <p>bugwugiuhxiu wuyxb yuvwuyvvw</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 border-2 border-white p-2 m-4">
          <h2>Health</h2>
          <p>bugwugiuhxiu wuyxb yuvwuyvvw</p>
        </div>
      </div>
    </div>
  );
}
