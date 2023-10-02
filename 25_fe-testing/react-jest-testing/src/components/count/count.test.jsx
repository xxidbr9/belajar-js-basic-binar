import { expect, test } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import Count from "./count";

describe("Test Count Component", () => {
  test("should count change", () => {
    const testID = "button-count-test";
    const { getByTestId } = render(
      <Count data-testid-span='span-element' data-testid-button={testID} />
    );
    const element = getByTestId(testID);

    fireEvent.click(element);
    expect(screen.getByTestId("span-element")).toHaveTextContent("1");
  });
});
