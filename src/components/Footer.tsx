export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Scroll to Top
        </button>
      </div>
    </footer>
  );
}
