import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";

describe("Button", () => {
  test("has Button component", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("has add classNume", () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug();
  });
});
