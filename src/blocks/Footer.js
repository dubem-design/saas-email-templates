import React from "react";

import {
  MjmlWrapper,
  MjmlSection,
  MjmlColumn,
  MjmlImage,
  MjmlSocial,
  MjmlSocialElement,
  MjmlText,
} from "mjml-react";

function Hero({ data, config }) {
  return (
    <MjmlWrapper padding="0px" padding-bottom="0">
      <MjmlSection border-radius="0px 0px 8px 8px">
        <MjmlColumn width="65%">
          <MjmlImage
            src="https://s3.eu-west-3.amazonaws.com/dubem.design/resources/sat-logo.png"
            alt="SAT Logo"
            height="25px"
            align="left"
            width="75px"
          />
        </MjmlColumn>
        <MjmlColumn width="35%">
          <MjmlSocial
            font-size="15px"
            icon-size="25px"
            mode="horizontal"
            align="right"
          >
            <MjmlSocialElement
              name="facebook"
              href="https://mjml.io/"
            ></MjmlSocialElement>
            <MjmlSocialElement
              name="twitter"
              href="https://mjml.io/"
            ></MjmlSocialElement>
            <MjmlSocialElement
              name="linkedin"
              href="https://mjml.io/"
            ></MjmlSocialElement>
          </MjmlSocial>
        </MjmlColumn>
        <MjmlColumn width="100%">
          <MjmlText mj-class="text-small" color="#8c8c8c">
            @ 2020 Logo. All rights reserved
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlWrapper>
  );
}

export default Hero;
