import React from "react";

import { Text } from "react-native";

import { HeadingText, Container } from "./styles";

const Heading: React.FC = ({ children }) => {
  return (
    <Container>
      <HeadingText>{children}</HeadingText>
    </Container>
  );
};

export default Heading;
