import React from 'react';
import { library, IconProp } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add the imported icons to the library
library.add(fas);

interface FontAwesomeComponentProps {
  icon: IconProp;
}

const FontAwesomeComponent: React.FC<FontAwesomeComponentProps> = ({ icon }) => {
  return <FontAwesomeIcon icon={icon} />;
};

export default FontAwesomeComponent;
