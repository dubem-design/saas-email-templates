import React from "react";

import {
  MjmlWrapper,
  MjmlSection,
  MjmlColumn,
  MjmlImage,
  MjmlDivider,
  MjmlText,
} from "mjml-react";

function Hero({ data, config }: { data: any, config: any }) {
  return (
    <MjmlWrapper padding="0px" padding-bottom="0">
      <MjmlSection>
        {/* <MjmlDivider borderColor={'#ddd'} borderWidth={1} /> */}
        {/* <MjmlColumn width="65%">
          <MjmlImage
            src={config.footerLogo}
            alt="SAT Logo"
            align="left"
            width="75px"
            height="auto"
          />
        </MjmlColumn>
        <MjmlColumn width="35%">
          <MjmlText mj-class="text-small" color="#8c8c8c" align="right">
            {config.copyRightText}
          </MjmlText>
        </MjmlColumn> */}
        <MjmlColumn width="100%">
          <MjmlText mj-class="text-small" color="#8c8c8c" align="center">
            {config.footerText}
          </MjmlText>
          <MjmlImage
            src={config.footerLogo}
            alt="SAT Logo"
            align="center"
            width="75px"
            height="auto"
          />
        </MjmlColumn>
      </MjmlSection>
    </MjmlWrapper>
  );
}

export default Hero;
