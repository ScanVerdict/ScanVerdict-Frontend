import { useEffect, useRef } from "react";

function ScrollToTopButton(): JSX.Element {
  const mainRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    const mainElement = mainRef.current;

    function handleScrollToTop(): void {
      if (mainElement) {
        // Temporarily disable the snap effect
        mainElement.style.scrollSnapType = "none";
        mainElement.style.overflowY = "auto";

        window.scrollTo({ top: 0, behavior: "smooth" });

        // Re-enable the snap effect after a short delay
        clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
          if (mainElement) {
            mainElement.style.scrollSnapType = "y mandatory";
            mainElement.style.overflowY = "scroll";
          }
        }, 500); // Adjust the delay as needed
      }
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={mainRef}
      className="snap max-h-screen snap-y snap-mandatory overflow-y-scroll"
    >
      {/* Your website content */}
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-24 right-0 bg-gray-900 text-white hover:bg-gray-800 font-bold py-2 px-4 rounded inline-flex items-center focus:outline-none focus:shadow-outline"
      >
        Scroll to Top
      </button>
    </div>
  );
}

export default ScrollToTopButton;
