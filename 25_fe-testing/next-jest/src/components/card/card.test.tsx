import { fireEvent, render, screen } from "@testing-library/react"
import Card from "./card"

describe("Test card.tsx", () => {
  test("should render correctly", () => {
    const countTestID = "count-test";
    const buttonTestID = "button-test"
    render(<Card countTestID={countTestID} buttonTestID={buttonTestID} />);

    // check hasil render di screen
    expect(screen.getByTestId(countTestID)).toBeInTheDocument();
  });

  test("should change count number", () => {
    const countTestID = "count-test";
    const buttonTestID = "button-test"
    render(<Card countTestID={countTestID} buttonTestID={buttonTestID} />);

    // check hasil render di screen
    const button = screen.getByTestId(buttonTestID);

    fireEvent.click(button); // menjalankan printah click component yang di ambil
    expect(screen.getByTestId(countTestID)).toHaveTextContent("1")
  })
});