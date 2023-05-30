import { fireEvent, render, screen } from "@testing-library/react";
import { Calculator } from "components/Calculator";

describe("<Calculator/>", () => {
  //   beforeEach(() => {
  //     render(<Calculator />); // this will run before every test cases
  //   });
  it("has 'Calculator' display somewhere", () => {
    render(<Calculator />); // this line of code in similar for other test cases so we have a function beforEach()
    // screen.debug(); // this will give all
    const textElement = screen.getByText("Calculator"); // this will find only once if it's present multiple time, and gives warning
    screen.debug(textElement);
    expect(textElement.textContent).toBe("Calculator");
  });

  it("has an h1 that contains 'Calculator' ", () => {
    render(<Calculator />);
    const textEl = screen.getByRole("heading", { level: 1 });
    expect(textEl.textContent).toBe("Calculator");
  });

  it("perform 0+0 by default", () => {
    render(<Calculator />);
    const inputAValue = screen.getByTestId("inputA").value; // this will give the value of that element
    const inputBValue = screen.getByTestId("inputB").value;
    const operator = screen.getByTestId("operator").value;
    const result = screen.getByTestId("result").textContent; //
    // screen.debug(); // we can not use this becuase we want value not element
    expect(inputAValue).toBe("0");
    expect(inputBValue).toBe("0");
    expect(operator).toBe("+");
    expect(result).toBe("0");
  });

  it("uses correctly the default values", () => {
    render(<Calculator defaultA={12} defaultB={"10"} defaultOperator={"×"} />);
    // const inputAValue = screen.getByTestId("inputA").value; // this will give the value of that element
    // const inputBValue = screen.getByTestId("inputB").value;
    // const operator = screen.getByTestId("operator").value;
    // const result = screen.getByTestId("result").textContent; //
    // // screen.debug(); // we can not use this becuase we want value not element
    // expect(inputAValue).toBe("0");
    // expect(inputBValue).toBe("0");
    // expect(operator).toBe("+");
    // expect(result).toBe("0");
    const { getValueA, getValueB, getOperator, getResult } = getCalculator();
    expect(getValueA()).toBe("12");
    expect(getValueB()).toBe("10");
    expect(getOperator()).toBe("×");
    expect(getResult()).toBe("120");
  });

  //   it.only("calculates correctly when the user updates an input", () => {
  it("calculates correctly when the user updates an input", () => {
    const { getResult } = getCalculator();
    // it.only  --> it will run only this file
    render(<Calculator defaultA={12} defaultB={"10"} defaultOperator={"×"} />);
    fireEvent.change(screen.getByTestId("inputA"), { target: { value: "3" } });
    // screen.debug(screen.getByTestId("inputA"));
    expect(getResult()).toBe("30");

    fireEvent.change(screen.getByTestId("inputB"), { target: { value: "3" } });
    expect(getResult()).toBe("9");

    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "-" },
    });
    expect(getResult()).toBe("0");
  });
  it("calculates correctly when the user updates an input", () => {
    const { getResult } = getCalculator();
    render(<Calculator defaultA={1} defaultB={0} defaultOperator={"/"} />);
    expect(getResult()).toBe("You can't divide by 0");
  });

  it("Display a message when no operator is provided", () => {
    const { getResult } = getCalculator();
    render(<Calculator defaultA={1} defaultB={0} defaultOperator={"/"} />);
    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "!" },
    });
    expect(getResult()).toBe("No operator provided");
  });

  it("return 0 when the inputs are empty", () => {
    const { getResult } = getCalculator();
    render(<Calculator defaultA={1} defaultB={0} defaultOperator={"×"} />);
    fireEvent.change(screen.getByTestId("inputA"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByTestId("inputB"), {
      target: { value: "" },
    });
    expect(getResult()).toBe("0");
  });
});

function getCalculator() {
  return {
    getValueA: () => screen.getByTestId("inputA").value,
    getValueB: () => screen.getByTestId("inputB").value,
    getOperator: () => screen.getByTestId("operator").value,
    getResult: () => screen.getByTestId("result").textContent,
  };
}
