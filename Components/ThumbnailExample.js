import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text } from 'native-base';
export default class ThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Text>Square Thumbnail</Text>
          <Thumbnail square source={{uri: 'Image URL'}} />
          <Thumbnail square small source={{uri: 'Image URL'}} />
          <Text>Circular Thumbnail</Text>
          <Thumbnail source={{uri: 'Image URL'}} />
          <Thumbnail large source={{uri: 'Image URL'}} />
        </Content>
      </Container>
    );
  }
}