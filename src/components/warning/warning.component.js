import React from 'react';

import { WarningContainer, Title, P } from './warning.styles';

const Warning = () => {
    return (
        <WarningContainer>
            <Title>通知</Title>
            <P>網站營運不易，人力、營運皆依靠廣告生存，請您考慮將本站 https://rd.fharr.com/ 網域加入廣告阻攔器白名單，或者將廣告阻攔器功能關閉。或者您可以考慮用現金單純贊助我們。</P>
        </WarningContainer>
    );
};

export default Warning;