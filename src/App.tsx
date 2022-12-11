import React from 'react';
import {
	Mjml,
	MjmlBody,
} from 'mjml-react';


import Head from "./components/layout/Head";
import sectionsMap from './sections-map';

export const emailComponent = ({config, layout, sections}:any) => {
	return (
    <Mjml>
      <Head config={config} />
			<MjmlBody backgroundColor={config.backgroundColor || '#f8f8f8'}>
        {layout.map((content: any, index: number) => {
					return React.createElement(sectionsMap[content.section].component, {
						key: `${content.section}-${index}`,
            content,
            config,
            sections, // for the slots
					});
				})}
			</MjmlBody>
		</Mjml>
	);
};
