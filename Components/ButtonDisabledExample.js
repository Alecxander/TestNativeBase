import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Icon } from 'native-base';
export default class ButtonDisabledExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button disabled><Text>Default</Text></Button>
          <Button disabled bordered><Text>Bordered</Text></Button>
          <Button disabled rounded><Text>Rounded</Text></Button>
          <Button disabled large><Text>Large</Text></Button>
          <Button disabled iconRight>
            <Text>Icon Button</Text>
            <Icon name="home" />
          </Button>
          <Button disabled block><Text>Block</Text></Button>
          <Button disabled full><Text>Full</Text></Button>
        </Content>
      </Container>
    );
  }
}