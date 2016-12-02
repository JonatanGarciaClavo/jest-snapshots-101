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
  Text,
  S
} from "spectacle";

// Import CodeSlide
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  jestLogo: require("../assets/jest-logo.png")
};

preloader(images);

const bgIntroColor = "white";
const bgColor = "#222222";

const theme = createTheme({
  primary: "#F49E00",
  secundary: "white"
}, {
  primary: "labbold",
  secundary: "montserratregular",
  tertiary: "montserratbold"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor={bgColor}>
            <Heading margin="0 0 1em 0" size={2} caps textColor="#ca461a" textFont="labmedium">
              Jest snapshots
            </Heading>
            <Image width="45%" src={images.jestLogo.replace("/", "")}/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Summary
            </Heading>
            <List>
              <Appear><ListItem textFont="secundary" textColor="secundary">What is Jest?</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">What is a snapshot?</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Examples</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Pros and Cons</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Why would I use Jest?</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              What is Jest?
            </Heading>
            <List>
              <Appear><ListItem textFont="secundary" textColor="secundary">Made by Facebook</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">JavaScript testing solution</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Virtualizes JavaScript environments and runs tests in parallel across worker processes</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Can capture snapshots</ListItem></Appear>
            </List>
            <Link href="https://facebook.github.io/jest/">
              <Text padding="10px 0 0 0" italic textFont="tertiary" textColor="secundary">More info</Text>
            </Link>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              What is a snapshot?
            </Heading>
            <Text style={{margin: "3em 0"}} textAlign="justify" textFont="secundary" textColor="secundary">Create a file with React trees or other serializable values to simplify testing</Text>
            <Text style={{margin: "3em 0"}} textAlign="justify" textFont="secundary" textColor="secundary">With that snapshot will be avaialbe to do diff</Text>
            <Link href="https://facebook.github.io/jest/docs/tutorial-react.html">
              <Text padding="10px 0 0 0" italic textFont="tertiary" textColor="secundary">How to setup it</Text>
            </Link>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Action snapshot example
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/action-snapshot.example")}
              margin="2em auto"
              textSize="0.8em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Action test example
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/action-test.example")}
              margin="2em auto"
              textSize="0.95em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Reducer snapshot example
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/reducer-snapshot.example")}
              margin="2em auto"
              textSize="0.8em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Reducer test example
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/reducer-test.example")}
              margin="2em auto"
              textSize="0.95em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Component snapshot example
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/component-snapshot.example")}
              margin="1em auto"
              textSize="0.3em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Component test example
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/component-test.example")}
              margin="2em auto"
              textSize="0.95em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Good to know
            </Heading>
            <List>
              <Appear><ListItem textFont="secundary" textColor="secundary">Fast interactive mode wit <S type="italic">--watch</S></ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Create coverage reports <S type="italic">--coverage</S></ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Integrated support for testing with promises and async/await</ListItem></Appear>
            </List>
            <Link href="https://facebook.github.io/jest/docs/api.htmll">
              <Text padding="10px 0 0 0" italic textFont="tertiary" textColor="secundary">Api reference</Text>
            </Link>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Pros
            </Heading>
            <List>
              <Appear><ListItem textFont="secundary" textColor="secundary">Easy to write</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Don’t repeat yourself (DRY)</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">TDD is trivial</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Compatible with React Native</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Error messages on develop time</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Work in progress</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Cons
            </Heading>
            <List>
              <Appear><ListItem textFont="secundary" textColor="secundary">Missing a selector API like Enzyme</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Snapshots can be huge and sometimes it might be tedious to find the part you are looking for (lot of noise). In contrast, pull requests will highlight any changes for you</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Why would I use Jest?
            </Heading>
            <List>
              <Appear><ListItem textFont="secundary" textColor="secundary">You can easily test your React & React Native components</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Snapshots are a plus, but they are totally optional</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">You can easily test Redux or other state management libraries</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">The same community have created React Native & Jest. What does that mean? They will be the ones who care the most about making React Native and Jest to play nicely together in the future</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary" textFont="labmedium">
              Questions?
            </Heading>
            <Link href="https://github.com/JonatanGarciaClavo/jest-snapshots-101">
              <Text padding="100px 0 0 0" italic textSize="1.2em" textFont="montserratregular" textColor="tertiary">Slides: https://github.com/JonatanGarciaClavo/jest-snapshots-101</Text>
            </Link>
            <Link href="https://github.com/JonatanGarciaClavo/ContactsApp">
              <Text padding="50px 0 0 0" italic textSize="1.2em" textFont="montserratregular" textColor="tertiary">Example project: https://github.com/JonatanGarciaClavo/ContactsApp.git</Text>
            </Link>
            <Link href="mailto:jonatan.garcia@mobgen.com">
              <Text padding="50px 0 0 0" italic textSize="1.2em" textFont="montserratregular" textColor="tertiary">Email: jonatan.garcia@mobgen.com</Text>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
