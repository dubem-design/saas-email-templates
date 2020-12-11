import React from "react";

import { MjmlSection, MjmlColumn, MjmlImage } from "mjml-react";

function Hero({ data, config }) {
  return (
    <MjmlSection
      background-color="#000000"
      background-repeat="no-repeat"
      text-align="center"
      padding="0 0 0 0"
    >
      <MjmlColumn>
        <MjmlImage
          align="center"
          border="none"
          padding-bottom="0px"
          padding-left="0px"
          padding-right="0px"
          padding="0px 25px"
          src="http://5vph.mj.am/img/5vph/b/1g86w/0696u.jpeg"
          target="_blank"
          title=""
          width="780px"
        />
      </MjmlColumn>
    </MjmlSection>
  );
}

export default Hero;
