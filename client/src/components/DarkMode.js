import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { Button } from "reactstrap";

const DarkMode = () => {

    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

	return (
		<Button
			outline
			color="danger"
			onClick={toggleMode}
			className={darkMode ? "toggle toggled" : "toggle"}
		>
			Dark Mode
		</Button>
	);
};

export default DarkMode;
