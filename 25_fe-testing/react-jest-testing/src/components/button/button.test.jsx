import renderer from 'react-test-renderer';
import { expect, test, jest,  } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./button";

describe("Test Button Component", () => {
  // beforeEach(() => { // ini jalan tiap test() berjalan
  // });
  test("Render correctly", () => {
    render(<Button data-testid='button-test'>Hello world</Button>);
    expect(screen.getByTestId("button-test")).toHaveTextContent("Hello world");
  });

  // Updated test case with a Link to a different address
  it("renders correctly", () => {
    const tree = renderer
      .create(<Button data-testid='button-test'>Hello world</Button>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("Test is button can be clicked", () => {
    const handleOnClickMock = jest.fn();
    const { getByTestId } = render(
      <Button data-testid='button-test' onClick={handleOnClickMock}>
        Hello world 2
      </Button>
    );
    const element = getByTestId("button-test");

    fireEvent.click(element);

    expect(handleOnClickMock).toBeCalled();
    expect(element).toHaveTextContent("Hello world 2");
  });
});
