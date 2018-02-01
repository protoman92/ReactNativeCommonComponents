import * as React from 'react';
import { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Try } from 'javascriptutilities';
import { Properties, Style } from './Dependency';

export namespace Props {
  /**
   * Props type for a native touchable button component.
   */
  export interface Type {
    id: Readonly<string>;
    properties?: Readonly<Properties.ProviderType>;
    style: Readonly<Style.ProviderType>;
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
    let style = props.style.touchableButton;

    let properties = Try.unwrap(props.properties)
      .flatMap(v => Try.unwrap(v.touchableButton));

    return <TouchableOpacity
      {...properties.map(v => v.buttonContainer(id).value)}
      style={style.buttonContainer(id)
        .map(v => Style.Conditional.buttonContainer(v))
        .map(v => Object.assign({}, v, Style.Compulsory.buttonContainer())).value}>
      <Text
        {...properties.map(v => v.buttonText(id)).value}
        style={style.buttonText(id)
          .map(v => Style.Conditional.buttonText(v))
          .map(v => Object.assign({}, v, Style.Compulsory.buttonText())).value}>
        {props.value}
      </Text>
    </TouchableOpacity>;
  }
}