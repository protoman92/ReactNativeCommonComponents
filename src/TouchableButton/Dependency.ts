import {
  TextProperties,
  TextStyle,
  ViewProperties,
  ViewStyle,
} from 'react-native';

import { Try } from 'javascriptutilities';

export namespace Style {
  /**
   * Style for a native touchable button container component.
   * @extends {ViewStyle} ViewStyle extension.
   */
  export interface ButtonContainerType extends ViewStyle {}

  /**
   * Style for a native touchable button text component.
   * @extends {TextStyle} TextStyle extension.
   */
  export interface ButtonTextType extends TextStyle {}

  /**
   * Style selector for a native touchable button component.
   */
  export interface SelectorType {
    buttonContainer(id: string): Try<ButtonContainerType>;
    buttonText(id: string): Try<ButtonTextType>;
  }

  /**
   * Provide style selector for a native touchable button component.
   */
  export interface ProviderType {
    readonly touchableButton: SelectorType;
  }

  export namespace Conditional {
    /**
     * Insert some properties if not provided by the style selector.
     * @param {ButtonContainerType} style A ButtonContainerType instance.
     * @returns {ButtonContainerType} A ButtonContainerType instance.
     */
    export let buttonContainer = (style: ButtonContainerType): ButtonContainerType => {
      let justifyContent = style.justifyContent || 'center';
      return Object.assign({}, style, { justifyContent });
    };

    /**
     * Insert some properties if not provided by the style selector.
     * @param {ButtonTextType} style A ButtonTextType instance.
     * @returns {ButtonTextType} A ButtonTextType instance.
     */
    export let buttonText = (style: ButtonTextType): ButtonTextType => {
      let textAlign = style.textAlign || 'center';
      return Object.assign({}, style, { textAlign });
    };
  }

  export namespace Compulsory {
    /**
     * Enforce compulsory properties for the button container component.
     * @returns {ButtonContainerType} A ButtonContainerType instance.
     */
    export let buttonContainer = (): ButtonContainerType => {
      return { flexDirection: 'column' };
    };

    /**
     * Enforce compulsory properties for the button text component.
     * @returns {ButtonTextType} A ButtonTextType instance.
     */
    export let buttonText = (): ButtonTextType => ({});
  }
}

export namespace Properties {
  /**
   * Properties for a native touchable button container component.
   * @extends {ViewProperties} ViewProperties extension.
   */
  export interface ButtonContainerType extends ViewProperties {}

  /**
   * Properties for a native touchable button text component.
   * @extends {TextProperties} TextProperties extension.
   */
  export interface ButtonTextType extends TextProperties {}

  /**
   * Properties selector for a native touchable button component.
   */
  export interface SelectorType {
    buttonContainer(id: string): Try<ButtonContainerType>;
    buttonText(id: string): Try<ButtonTextType>;
  }

  /**
   * Provide properties selector for a native touchable button component.
   */
  export interface ProviderType {
    readonly touchableButton?: SelectorType;
  }
}