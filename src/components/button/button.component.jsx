import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, button_type, ...otherProps }) => {
  return (
    <button
      className={`${BUTTON_TYPE_CLASSES[button_type]} button-container`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
