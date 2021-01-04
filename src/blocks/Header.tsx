import React from "react";

import { MjmlSection, MjmlColumn, MjmlImage } from "mjml-react";

function Header({ data, config }: {data: any, config: any}) {
  return (
    <MjmlSection
      padding-bottom="0px"
      background-color="#ffffff"
      background-size="cover"
      background-repeat="no-repeat"
      padding-top="20px"
      css-class="body-section"
      border-radius="8px 8px 0px 0px"
    >
      <MjmlColumn>
        <MjmlImage
          src="https://s3.eu-west-3.amazonaws.com/dubem.design/resources/sat-logo.png"
          alt="SAT Logo"
          height="35px"
          width="85px"
        />
      </MjmlColumn>
    </MjmlSection>
  );
}

export default Header;
