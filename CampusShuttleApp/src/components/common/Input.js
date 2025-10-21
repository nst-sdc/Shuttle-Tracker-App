import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

/**
 * Constants for styling the input and accessory.
 */
const HORIZONTAL_PADDING = 15;
const VERTICAL_PADDING = 10;
const BORDER_RADIUS = 8;
const INPUT_HEIGHT = 50;
const ACCESSORY_WIDTH = 48; // Approximate width needed for the accessory icon/button
const ACCESSORY_RIGHT_OFFSET = 0; // Distance from the right edge of the input wrapper

/**
 * A common input component that can optionally render a right-aligned accessory
 * (e.g., a password toggle icon) inside the input field.
 *
 * All props not listed here are passed directly to the underlying TextInput component.
 *
 * @param {object} props - The component's props.
 * @param {object} [props.style] - Custom style for the outer View container.
 * @param {React.ReactNode} [props.rightAccessory] - A component to render on the right side of the input.
 * @param {object} [props.inputStyle] - Custom style for the inner TextInput. Note: `paddingRight` will be overridden by the component if `rightAccessory` is present.
 */
const Input = ({
  style,
  rightAccessory,
  inputStyle,
  ...rest
}) => {
  // Calculate paddingRight dynamically to prevent text overlapping the accessory
  const calculatedPaddingRight = rightAccessory
    ? ACCESSORY_WIDTH + ACCESSORY_RIGHT_OFFSET
    : HORIZONTAL_PADDING;

  // Destructure paddingRight from inputStyle to ensure our calculated value takes precedence
  const { paddingRight, ...restOfInputStyle } = inputStyle || {};

  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={[
          styles.input,
          restOfInputStyle, // Apply custom styles from props
          { paddingRight: calculatedPaddingRight }, // Apply our calculated padding last to ensure it wins
        ]}
        placeholderTextColor="#888"
        {...rest}
      />
      {rightAccessory && (
        <View style={styles.rightAccessoryContainer}>
          {rightAccessory}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: INPUT_HEIGHT,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: BORDER_RADIUS,
    backgroundColor: '#fff',
    position: 'relative', // Essential for absolute positioning of the accessory
  },
  input: {
    flex: 1, // Allows TextInput to take up available space
    height: '100%', // Ensures TextInput fills the container height
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingVertical: VERTICAL_PADDING,
    fontSize: 16,
    color: '#333',
  },
  rightAccessoryContainer: {
    position: 'absolute',
    right: ACCESSORY_RIGHT_OFFSET,
    height: '100%', // Ensures the accessory container is vertically centered
    width: ACCESSORY_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Input;