import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MultiLineText } from './MultiLineText';
import { NameTags } from './NameTags';
import { LanguageSelection } from './LanguageSelection';
import { Localization } from './Localization';


export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: 'red',
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multiLineNames: '',
      tagNames: [],
      tempNames: [],
      selectedLanguage: "English"
    }
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }
  /* Update tagnames values */
  handleKeyPress(e) {
    if (e.charCode === 13) {
      this.setState({ tagNames: this.state.tempNames })
    }
  }
  /* Language selection */
  changeLanguage(e) {
    this.setState({ selectedLanguage: e.target.value });
  }
  /* Append names */
  handleChange(e) {
    let vals = e.target.value.split('\n');
    let appendVal = [];
    for (let val of vals) {
      let trimVal = val.trim();
      if (trimVal.length > 0) {
        appendVal.push(trimVal);
      }

    }
    this.setState({ tempNames: appendVal })
  }
  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
    console.log(this.textInput.current.value);
  }

  render() {
    let languages = [];
    for (let val in Localization) {
      languages.push(val);
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input value='Test' ref={this.textInput} />
        <table align="left" border="1">
          <tr><td align="left">Language Selection:</td><td><LanguageSelection languages={languages} changeLanguage={this.changeLanguage} /></td></tr>
          <tr><td align="left">MultiLineText:</td><td><MultiLineText props="values" handleChange={this.handleChange} handleKeyPress={this.handleKeyPress} /></td></tr>
          <tr><td align="left">NameTags:</td><td><NameTags tagNames={this.state.tagNames} lang={this.state.selectedLanguage} /></td></tr>
        </table>



        {/* <ThemeContext.Consumer>

          {theme => (
            <button

              style={{ backgroundColor: theme.background }}

              onClick={() => this.focusTextInput()}
            >Submit</button>

          )}

        </ThemeContext.Consumer> */}
      </div>
    );
  }
}

export default App;
