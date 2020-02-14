import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";

it("renders App without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test("renders header and main div containing all components", () => {
	const { getByText, getByTestId} = render(<App />);

	const header = getByText(/Most Googled Women's World Cup Players/i);
  const mainDiv = getByTestId("return-div");
  
	expect(header).toBeInTheDocument();
	expect(header).toBeTruthy();
	expect(header).not.toBeFalsy();

  expect(mainDiv).toBeInTheDocument();
  expect(mainDiv).toBeTruthy();
  expect(mainDiv).not.toBeFalsy();


});
