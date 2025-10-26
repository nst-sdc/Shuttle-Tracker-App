import { registerRootComponent } from 'expo';
import { Text, TextInput } from 'react-native';
import App from './App.js';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

registerRootComponent(App);
