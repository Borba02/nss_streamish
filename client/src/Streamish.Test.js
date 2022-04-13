import { render, screen } from "@testing-library/react";
import Streamish from "./Streamish";

test("renders learn react link", () => {
  render(<Streamish />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
