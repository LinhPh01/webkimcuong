import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
};

export default useAOS;
