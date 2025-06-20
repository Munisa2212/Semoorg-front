import React from "react";
const ThemeContext = React.createContext({
    theme: "light",
    toggleTheme: () => {},
    initialScreen: true,
    setInitialScreen: () => {},
});

export default ThemeContext;
