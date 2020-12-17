import React from "react";

import {
  MjmlWrapper,
  MjmlSection,
  MjmlColumn,
  MjmlText,
  MjmlButton,
} from "mjml-react";

import ExecutiveMessage from "./ExecutiveMessage";

function Body({ data, config }) {
  return (
    <MjmlWrapper padding="0px" padding-bottom="0">
      <MjmlSection border-radius="0px 0px 8px 8px" background-color="#ffffff">
        <MjmlColumn width="100%">
          <MjmlText mj-class="text-h2">Hi, there</MjmlText>
          <MjmlText>
            Hello there, You are getting this email because you signup to our
            survey of as a result of a follow up from one of our team memberes.
            Which evere way we would like you to help us fill this survey as we
            seek to learn more on the problem of real estate sight inspection.
          </MjmlText>
          <MjmlButton background-color="#21AA64" mj-class="btn-primary">
            Fill Survey
          </MjmlButton>
        </MjmlColumn>
        <ExecutiveMessage />
      </MjmlSection>
    </MjmlWrapper>
  );
}

export default Body;
