import React from "react";

import {
  MjmlWrapper,
  MjmlSection,
  MjmlColumn,
  MjmlImage,
  MjmlDivider,
  MjmlText,
  MjmlSocial,
  MjmlSocialElement
} from "mjml-react";

function Hero({ data, config }: { data: any, config: any }) {
  return (
    <MjmlWrapper padding-top="0px" padding-bottom="0" backgroundColor={config.bodyColor} border-radius={`0px 0px ${config.borderRadius} ${config.borderRadius}`}>
      <MjmlSection>
        <MjmlDivider borderColor={'#eee'} borderWidth={1} />
        <MjmlColumn width="100%" paddingTop={10}>
          <MjmlSocial
            font-size="15px"
            icon-size="25px"
            mode="horizontal"
            align="left"
          >
            {config.socialLinks.map((social: any) =>
              <MjmlSocialElement name={social.name} href={social.url} />)} </MjmlSocial >
        </MjmlColumn>
        <MjmlColumn width="35%">
          <MjmlText mj-class="text-small" color="#8c8c8c" align="right">
            {config.copyRightText}
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn width="100%">
          <MjmlText mj-class="text-small" color="#8c8c8c" align="left">
            {config.copyrightText}
          </MjmlText>
          <MjmlText mj-class="text-small" color="#8c8c8c" align="left">
            {config.footerText}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlWrapper>
  );
}

export default Hero;
