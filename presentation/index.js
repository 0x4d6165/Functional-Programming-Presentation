// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  math: require("../assets/math.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#5d4f85"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Functional Programming
            </Heading>
            <Heading size={1} fit caps>
              Basically, the best thing ever.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="Lambda Calc and all that" textColor="primary">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              What is functional programming?
            </Heading>
            <List>
              <Appear><ListItem>Declaritive</ListItem></Appear>
              <Appear><ListItem>Stateless (for the most part)</ListItem></Appear>
              <Appear><ListItem>Often lazy (in the case of languages like Haskell)</ListItem></Appear>
              <Appear><ListItem>Immutable</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.math.replace("/", "")} bgDarken={0.75}>
            <Appear>
              <Heading size={1} caps fit textColor="primary">
                Lambda Calculus
              </Heading>
            </Appear>
            <Appear>
              <Heading size={2} caps fit textColor="white">
                  The foundation of functional programming
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "slide"]} bgColor="black" textColor="primary">
            <Heading size={1} caps fit textColor="white">
              What is lambda calculus?
            </Heading>
            <Appear>
              <Text textColor="primary">
                Lambda calculus is a system where computations are expressed as functions. For example:
              </Text>
            </Appear>
            <Appear>
              <CodePane
                lang="clojure"
                source={require("raw!../assets/lcalc.example")}
                margin="20px auto"
              />
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            {/* <Markdown> */}
            {/* {` */}
            {/* ![Markdown Logo](${images.markdown.replace("/", "")}) */}
            {/*  */}
            {/* You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax */}
            {/* * Lists too! */}
            {/* * With ~~strikethrough~~ and _italic_ */}
            {/* * And lets not forget **bold** */}
            {/* `} */}
            {/* </Markdown> */}
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
