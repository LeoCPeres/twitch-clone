import React from "react";

import { Container, Avatar, OnlineStatus, RightSide, Button } from "./styles";

import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import colors from "../../styles/colors";

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <OnlineStatus></OnlineStatus>
      </Avatar>

      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          ></MaterialIcons>
        </Button>
        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          ></MaterialCommunityIcons>
        </Button>
        <Button>
          <Feather name="search" size={26} color={colors.black}></Feather>
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
