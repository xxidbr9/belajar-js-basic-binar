import { render } from "@testing-library/react"
import Button from "./button"

describe("Test button.tsx", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<Button data-testid="button-test">Hello world 2</Button>);
    expect(getByTestId("button-test")).toHaveTextContent("Hello world 2")
  })
})