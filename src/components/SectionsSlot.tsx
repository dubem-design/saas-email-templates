import React from 'react';

import { MjmlWrapper, MjmlSection, MjmlColumn, MjmlImage } from 'mjml-react';

import sectionsMap from './sections-map';

function Element({ config, layout, sections }: any) {
  return sections.map((content: any, index: number) => {
    const { section } = content;
    return React.createElement(sectionsMap[section].component, {
      key: `${section}-${index}`,
      content,
      config
    })
  })
}

export default Element;

