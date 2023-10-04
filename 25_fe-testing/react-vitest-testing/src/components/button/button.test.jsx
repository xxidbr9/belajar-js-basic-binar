import React from "react";
import { describe, expect, test } from "vitest";
import renderer from "react-test-renderer";
import Button from ".";
import { render, screen } from "@testing-library/react";

describe("Test button render", () => {
  test("check button is render", () => {
    const component = renderer.create(<Button>Hello</Button>);
    const json = component.toJSON();

    expect(json).toBeDefined();
  });

  test("Render correctly", () => {
    render(<Button data-testid='button-test'>Hello world</Button>);
    expect(screen.getByTestId("button-test").textContent).toBe("Hello world")
  });
});
