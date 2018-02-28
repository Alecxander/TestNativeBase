import React, { Component } from 'react';
import { Container, Header, Content, Item, Input } from 'native-base';
export default class UnderlinedTextboxExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Item>
            <Input placeholder="Underline Textbox" />
          </Item>
        </Content>
      </Container>
    );
  }
}