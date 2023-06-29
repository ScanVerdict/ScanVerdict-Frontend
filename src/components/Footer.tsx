export default function Footer() {
  return (
    <footer className="fixed bottom-0 h-20 w-full flex justify-center">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center focus:outline-none focus:shadow-outline"
      >
        Scroll to Top
      </button>
    </footer>
  );
}
