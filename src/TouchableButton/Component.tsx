import * as React from 'react';
import { Component } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProperties } from 'react-native';
import { Try } from 'javascriptutilities';
import { Properties, Style } from './Dependency';

export namespace Props {
  /**
   * Props type for a native touchable button component.
   * @extends {TouchableOpacityProperties} TouchableOpacityProperties extension
   * for convenient props passing.
   */
  export interface Type extends TouchableOpacityProperties {
    id: Readonly<string>;
    propertiesProvider?: Readonly<Properties.ProviderType>;
    styleProvider: Readonly<Style.ProviderType>;

    /**
     * Set the button's title. This text will be added to the innermost Text
     * component.
     */
    value?: Readonly<string>;
  }
}

/**
 * Native touchable button component that supports styling. This component can
 * be used to replace the default Button component.
 * @extends {Component<Props.Type>} Component extension.
 */
export class Self extends Component<Props.Type> {
  public constructor(props: Props.Type) {
    super(props);
  }

  public render(): JSX.Element {
    let props = this.props;
    let id = props.id;
    let style = props.styleProvider.touchableButton;
    let buttonProps: TouchableOpacityProperties = props;

    let properties = Try.unwrap(props.propertiesProvider)
      .flatMap(v => Try.unwrap(v.touchableButton));

    return <TouchableOpacity
      {...properties.flatMap(v => v.buttonContainer(id)).value}
      style={style.buttonContainer(id)
        .map(v => Style.Conditional.buttonContainer(v))
        .map(v => Object.assign({}, v, Style.Compulsory.buttonContainer())).value}
      {...buttonProps}>
      <Text
        {...properties.flatMap(v => v.buttonText(id)).value}
        style={style.buttonText(id)
          .map(v => Style.Conditional.buttonText(v))
          .map(v => Object.assign({}, v, Style.Compulsory.buttonText())).value}>
        {props.value}
      </Text>
    </TouchableOpacity>;
  }
}