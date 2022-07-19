import { useEffect } from "react";
import BodyContent from "./Components/BodyContent";
import MainArea from "./Components/MainArea";
import ScrollToTop from "./Components/ScrollToTop";
import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #about,
        #faq,
        #activity,
        #contact
        
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  return (
    <div className="App">
      <ScrollToTop />
      <MainArea />
      <BodyContent />
    </div>
  );
}

export default App;
