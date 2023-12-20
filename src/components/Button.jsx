// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  if (props.type === "Primary") {
    return (
      <button
        css={css`
          padding: 1rem 4rem;
          margin-right: 1rem;
          background-color: hsl(221, 94%, 47%);
          font-size: 1rem;
          border-radius: 4px;
          color: white;
        `}
      >
        Large
      </button>
    );
  } else if (props.type === "Secondary") {
    return (
      <button
        css={css`
          padding: 1rem 4rem;
          background-color: hsl(198, 94%, 47%);
          font-size: 1rem;
          border-radius: 4px;
          color: white;
        `}
      >
        Large
      </button>
    );
  }
}

export default Button;
