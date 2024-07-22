export default function Home() {
  return (
    <main className="bg-black flex-row p-8 ">
      <div className=" bg-white w-5/6 border-gray-500 border-2 rounded-lg p-4 m-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Make your Notes{" "}
          <span className="bg-black px-3 -rotate-2 inline-block">
            <span className="text-white rotate-2 inline-block">Smart</span>
          </span>
        </h1>
        <p>
          Bored of pathetic note taking app and want to scroll throw them
          easily?
        </p>
      </div>
      <div className=" bg-white w-5/6 border-gray-500 border-2 rounded-lg p-4 m-4 my-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Use AI chatbot to resume and ask your notes
        </h1>
        <p>Exploit AI to make notes less complicated to read and find</p>
      </div>
      <div className=" bg-white w-5/6 border-gray-500 border-2 rounded-lg p-4 m-4 my-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Create conceptual maps
        </h1>
        <p>Take advantage of the best effective way to take notes</p>
      </div>
    </main>
  );
}
