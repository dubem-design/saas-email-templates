import React from "react";

import { MjmlSection, MjmlColumn, MjmlImage } from "mjml-react";

function Header({ data, config }: { data: any, config: any }) {
  return (
    <MjmlSection
      padding-bottom="0px"
      background-color="#ffffff"
      background-size="cover"
      background-repeat="no-repeat"
      padding-top="20px"
      css-class="body-section"
      border-radius={`${config.borderRadius} ${config.borderRadius} 0px 0px`}
    >
      <MjmlColumn>
        <MjmlImage
          src={config.logo}
          align={config.logoAlign}
          alt="SAT Logo"
          height="auto"
          width="85px"
        />
        <pre>{config.logo}</pre>
      </MjmlColumn>
    </MjmlSection>
  );
}

export default Header;
