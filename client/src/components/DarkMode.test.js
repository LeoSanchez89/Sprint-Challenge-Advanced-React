import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DarkMode from "./DarkMode";

test("renders button and click", () => {
    const { getByText } = render(<DarkMode />);

    const button = getByText(/Dark Mode/i)

    expect(button).toBeInTheDocument();
    
    fireEvent.click(button);
})