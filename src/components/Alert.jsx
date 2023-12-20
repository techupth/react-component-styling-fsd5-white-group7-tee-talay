// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert(props) {
  let backgroundColor;
  let icon;

  if (props.type === "error") {
    backgroundColor = "#f9c8c8";
    icon = "/src/assets/frown.svg";
  } else if (props.type === "warning") {
    backgroundColor = "#F9D9C8";
    icon = "/src/assets/alert-triangle.svg";
  } else if (props.type === "info") {
    backgroundColor = "#F9EBC8";
    icon = "/src/assets/alert-circle.svg";
  } else if (props.type === "success") {
    backgroundColor = "#CEF7CD";
    icon = "/src/assets/check-circle.svg";
  }

  return (
    <div
      css={css`
        width: 650px;
        display: flex;
        font-size: 20px;
        font-weight: bold;
        padding: 0.4rem 1.5rem;
        margin-top: 2rem;
        border-radius: 10px;
        gap: 1rem;
        color: black;
        background-color: ${backgroundColor};
      `}
    >
      <img src={icon} alt="" />
      <p>This is {props.type} alert box</p>
    </div>
  );
}

export default Alert;
