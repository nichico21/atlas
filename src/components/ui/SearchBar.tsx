export default function SearchBar() {
  return (
    <div className="mt-10 flex w-full max-w-2xl items-center rounded-2xl bg-white px-4 py-3 shadow-xl">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
        />
      </svg>

      <input
        type="text"
        placeholder="Rechercher un projet, une entreprise, une capacité..."
        className="ml-3 flex-1 border-none bg-transparent text-lg text-gray-700 outline-none"
      />

      <button className="rounded-xl cursor-pointer bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-700">
        Lancer la recherche
      </button>

    </div>
  );
}