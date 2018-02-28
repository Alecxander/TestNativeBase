import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
export default class DisabledTextboxExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Item disabled>
            <Input disabled placeholder='Disabled Textbox'/>
            <Icon name='information-circle' />
          </Item>
        </Content>
      </Container>
    );
  }
}