import React from "react";

import {
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlStyle,
  MjmlFont,
  MjmlAttributes,
  MjmlClass,
  MjmlAll,
} from "mjml-react";

function Head({ config }: {config: any, }) {
  return (
    <MjmlHead>
      <MjmlTitle>{config.title}</MjmlTitle>
      <MjmlPreview>{config.preview}</MjmlPreview>
      <MjmlStyle>{config.css}
      </MjmlStyle>
      <MjmlStyle>{config.css}
      </MjmlStyle>
      <MjmlFont
        name="DM Sans"
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
      />
      <MjmlAttributes>
        <MjmlClass
          name="text-h1"
          font-size="28px"
          font-weight="700"
          display="block"
        />
        <MjmlClass
          name="text-h2"
          font-size="20px"
          font-weight="700"
          display="block"
        />
        <MjmlClass
          name="text-h3"
          font-size="16px"
          font-weight="700"
          display="block"
        />
        <MjmlClass
          name="text-small"
          font-size="14px"
          display="block"
        />
        <MjmlClass
          name="btn"
          color="#ffffff"
          background-color="#2196F3"
          align="left"
          border-radius="4px"
          font-size="17px"
          display="inline"
        />
        <MjmlClass
          name="btn-primary"
          color="#ffffff"
          align="left"
          border-radius="4px"
          font-size="17px"
          display="inline"
        />
        <MjmlClass
          name="btn-success"
          color="#ffffff"
          background-color="#8CCE39"
          align="left"
          border-radius="4px"
          font-size="17px"
          display="inline"
        />
        <MjmlClass
          name="btn-danger"
          color="#ffffff"
          background-color="#D34037"
          align="left"
          border-radius="4px"
          font-size="17px"
          display="inline"
        />
        <MjmlClass name="link" color="#2196F3" font-size="16px" />
        <MjmlAll font-family="DM Sans" line-height="1.5" font-size="16px" />
      </MjmlAttributes>
    </MjmlHead>
  );
}

export default Head;
