import { render } from "@testing-library/react-native";
import { Input } from "./";

describe("Input", () => {
  it("should render input component and match snapshot", () => {
    const input = render(<Input />);

    expect(input).toMatchSnapshot();
  });

  it("should render input component with placeholder", () => {
    const input = render(<Input placeholder="test" />);

    expect(input.getByPlaceholderText("test")).toBeTruthy();
  });

  it("should render input component with value", () => {
    const input = render(<Input value="test" />);

    expect(input.getByDisplayValue("test")).toBeTruthy();
  });

  it("should render input component with secure text entry", () => {
    const input = render(<Input secureTextEntry />);

    expect(input.getByTestId("input").props.secureTextEntry).toBeTruthy();
  });

  it("should render input component with onChangeText", () => {
    const onChangeText = jest.fn();
    const input = render(<Input onChangeText={onChangeText} />);

    input.getByTestId("input").props.onChangeText("test");

    expect(onChangeText).toHaveBeenCalledTimes(1);
  });
});
