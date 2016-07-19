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
  math: require("../assets/math.jpg"),
  haskellbg: require("../assets/haskellbg.png"),
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
            <Layout>
              <Fill>
                <Appear>
                  <CodePane
                    lang="haskell"
                    source={require("raw!../assets/lcalc.example")}
                    margin="20px auto"
                  />
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <CodePane
                    lang="haskell"
                    source={require("raw!../assets/lcalchs.example")}
                    margin="20px auto"
                  />
                </Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.haskellbg.replace("/", "")} bgDarken={0.75}>
            <Heading caps fit>Haskell</Heading>
            <List textColor="primary">
              <Appear><ListItem>Purely functional</ListItem></Appear>
              <Appear><ListItem>Lazy (most of the time)</ListItem></Appear>
              <Appear><ListItem>Compiled</ListItem></Appear>
              <Appear><ListItem>Obsessed with recursion</ListItem></Appear>
              <Appear><ListItem>AWESOME</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading caps fit size={1} textColor="primary">
              Examples...
            </Heading>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Fibonacci Sequence
            </Heading>
            <Layout>
              <Fill>
                <Appear>
                  <CodePane
                    lang="cpp"
                    source={require("raw!../assets/fibcpp.example")}
                    margin="20px auto"
                  />
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <CodePane
                    lang="haskell"
                    source={require("raw!../assets/fibhs.example")}
                    margin="20px auto"
                  />
                </Appear>
              </Fill>
            </Layout>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
