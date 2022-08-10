import React from "react";

import { MjmlSection, MjmlText, MjmlWrapper } from "mjml-react";

function Hero({ data, config }: { data: any, config: any }) {
  return (
    <MjmlWrapper paddingRight={0} paddingLeft={0} paddingTop={0} paddingBottom={10}>
      <MjmlSection backgroundColor={'#000'} borderRadius={config.borderRadius} paddingTop="5px" paddingBottom={'5px'} borderLeft="5px solid #ffd500">
        <MjmlText align="center" color={'#fff'}>{config.env} </MjmlText>
      </MjmlSection>
    </MjmlWrapper>
  );
}

export default Hero;
