import React from "react";

import {
  MjmlWrapper,
  MjmlSection,
  MjmlColumn,
  MjmlText,
  MjmlButton,
} from "mjml-react";

const avatarStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50px",
  backgroundColor: "#000",
};

function Element({ data, content }: {data: any, content: any}) {
  return (
    <MjmlColumn width="100%">
      <MjmlSection>
        <MjmlColumn width="50px">
          <MjmlButton
            width="50px"
            height="50px"
            border-radius="25px"
            align="left"
          >Button</MjmlButton>
        </MjmlColumn>
        <MjmlColumn width="50px">
          <MjmlButton
            width="50px"
            height="50px"
            border-radius="25px"
            align="left"
          >Button</MjmlButton>
        </MjmlColumn>
      </MjmlSection>
      <MjmlText mj-class="text-h2">Hi, there</MjmlText>
    </MjmlColumn>
  );
}

export default Element;
