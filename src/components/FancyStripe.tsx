import React from "react";

import { MjmlWrapper, MjmlSection, MjmlColumn, } from "mjml-react";

function FancyStripe({ data, config }: { data: any, config: any }) {
  const height = '8px'
  return (
    <MjmlWrapper paddingRight={0} paddingLeft={0} paddingTop={0} paddingBottom={0}>
      <MjmlSection backgroundColor={'#f8f8f8'} padding="0px" textAlign="left">
        <MjmlColumn width="10%" paddingTop={height} backgroundColor={'#ffd500'}>
        </MjmlColumn>
        <MjmlColumn width="30%" paddingTop={height} backgroundColor={'#000'}>
        </MjmlColumn>
        <MjmlColumn width="20%" paddingTop={height} backgroundColor={'red'}>
        </MjmlColumn>
        <MjmlColumn width="15%" paddingTop={height} backgroundColor={'teal'}>
        </MjmlColumn>
        <MjmlColumn width="15%" paddingTop={height} backgroundColor={'orange'}>
        </MjmlColumn>
        <MjmlColumn width="10%" paddingTop={height} backgroundColor={'#ffd500'}>
        </MjmlColumn>
      </MjmlSection>
    </MjmlWrapper>
  );
}

export default FancyStripe;
