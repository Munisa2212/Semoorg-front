import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Companies from "./Components/Companies/Companies";
import Header from "./Components/Header/Header";
import Instructor from "./Components/Instructor/Instructor";
import Learn from "./Components/Learn/Learn";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Questions from "./Components/Questions";
import Join from "./Components/Join";
import Forms from "./Components/Forms";
import Footer from "./Components/Footer";
import Testimonials from "./Components/Testimonials/Testimonials";
import GlobalStyle from "./style/GlobalStyle";
import ThemeContext from "./Context/ThemeContext";
import InitialScreen from "./Components/InitialScreen";

// Image imports
import img0 from "./assets/backgrounds/1.jpg";
import img1 from "./assets/backgrounds/0.png";
import img2 from "./assets/backgrounds/2.jpg";
import img3 from "./assets/backgrounds/3.jpg";
import img4 from "./assets/backgrounds/4.jpg";
import img5 from "./assets/backgrounds/5.jpg";
import img6 from "./assets/backgrounds/6.jpg";
import img7 from "./assets/backgrounds/7.jpg";
import img8 from "./assets/backgrounds/8.jpg";
import img9 from "./assets/backgrounds/9.jpg";
import img10 from "./assets/backgrounds/10.jpg";
import img11 from "./assets/backgrounds/11.jpg";
import img12 from "./assets/backgrounds/12.jpg";

const data = [
  {
    main: img0,
    small: [img1, img2, img3],
    title: "Our specialisation",
    description:
      "We bring your visions to life with cutting-edge architecture.",
    icon: <i className="bi bi-cone-striped"></i>,
  },
  {
    main: img4,
    small: [img5, img6, img7],
    title: "Crafted for Comfort",
    description: "Elegant interiors that elevate your lifestyle.",
    icon: <i className="bi bi-arrow-repeat"></i>,
  },
  {
    main: img8,
    small: [img9, img10, img11],
    title: "Sustainable Spaces",
    description: "Eco-conscious construction for modern living.",
    icon: <i className="bi bi-bank"></i>,
  },
  {
    main: img12,
    small: [img5, img3, img10],
    title: "lorem Ipsum",
    description:
      "We bring your visions to life with cutting-edge architecture.",
    icon: <i className="bi bi-badge-wc"></i>,
  },
];

function App() {
  const [theme, setTheme] = useState("light");
  const [initialScreen, setInitialScreen] = useState(true);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme, setInitialScreen }}>
        <div className="App">
          <GlobalStyle />
          {/* // -----------------====>>>>>))))------------------------------ */}
          {initialScreen && <InitialScreen />}
          <NavigationBar />
          <div id="HeaderId">
            <Header />
          </div>
          <Join data={data} />
          <div id="InstructorId">
            <Instructor />
          </div>
          <div id="TestimonialsId">
            <Testimonials data={data} />
          </div>
          <Companies data={data} />
          <div id="LearnId">
            <Learn data={data} />
          </div>
          <Questions />
          <div id="FormsId">
            <Forms />
          </div>

          {/* // --->>>>>>>>> */}

          <div id="FooterId">
            <Footer theme={theme} />
          </div>
          {/* // ------------------====>>>>>))))----------------------------- */}
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
