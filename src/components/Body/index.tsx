import React, { useContext } from 'react';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

interface BodyProps {
  toggleTheme(): void;
}

const Body: React.FC<BodyProps> = ({ toggleTheme }) => {
  
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
        <span>Hello World</span>

        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor={colors.text}
          onColor={colors.primary}
        />
    </Container>
  );
};

export default Body;
