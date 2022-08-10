import React from "react";
import { MjmlWrapper, MjmlSection, MjmlColumn, MjmlText, MjmlButton, MjmlDivider } from "mjml-react";
import SimpleLayout from "../layouts/simple";
import Hero from "../components/Hero";


export const generate = (data: any, config: any,) => {
  return (
    <SimpleLayout data={data} config={config}>
      <MjmlWrapper paddingBottom={'0px'} paddingTop={'0px'}>
        {/* <Hero data={data} config={config} /> */}
        <MjmlSection>
          <MjmlColumn width="100%">
            <MjmlText mj-class="text-h2">{data.bodyTitle || 'Welcome onboard'} </MjmlText>
            <MjmlDivider borderWidth={1} borderColor={config.backgroundColor} />
            <MjmlText>
              Hi, {data.name}
            </MjmlText>
            <MjmlText>
              Please enter this confirmation code when logged into your account
            </MjmlText>
            <MjmlButton background-color={config.primaryColor} mj-class="btn-primary" href={data.link}>
              Get started
            </MjmlButton>
          </MjmlColumn>
          {/* <ExecutiveMessage data={data} config={config} /> */}
        </MjmlSection>
      </MjmlWrapper>
    </SimpleLayout>
  );
};
