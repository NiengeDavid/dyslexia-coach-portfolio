import { Children } from "react";

export const Each = ({ render, of }) => {
  try {
    return Children.toArray(of.map((item, index) => render(item, index)));
  } catch (error) {
    console.error("Error occurred:", error);
    return null;
  }
};
