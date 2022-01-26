import React from "react";

import { Menu, Container, Icon, Image, Label } from "semantic-ui-react";
import { Button } from "@material-ui/core";

function Balance({ balance }) {
  return (
    <Menu
      attached="top"
      tabular
      style={{
        backgroundColor: "#fff",
        borderColor: "#fff",
        paddingTop: "1em",
        paddingBottom: "1em",

        borderBottom: "1px solid black",
      }}
    >
      <Container>
        <Menu.Menu
          style={{
            display: "flex",
          }}
        >
          <Image
            src={`${process.env.PUBLIC_URL}/assets/substrate-logo.png`}
            size="mini"
          />
        </Menu.Menu>
        <Menu.Menu position="right" style={{ alignItems: "center" }}>
          <Button
            sx={{
              marginRight: "1rem",
            }}
            size="large"
            icon="user"
            variant="contained"
          />
          <input
            style={{
              width: "25rem",
            }}
            value={"0xdD2FD4581271e230360230F9337D5c0430Bf44C0"}
          />

          <Label pointing="left">
            <Icon name="money" color="green" />
            {balance} ETH
          </Label>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

export default Balance;
