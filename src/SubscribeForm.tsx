import React from "react";
import { Input } from "antd";

interface IProps {}

interface IState {}

export class SubscribeForm extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        <p>
          Enter your email to get daily <span>topoh</span>
        </p>
        <Input size="large" value="Joe Doe" placeholder="Joe Doe" />
        <Input size="large" value="tina@topoh.cm" placeholder="tina@topoh.cm" />
      </div>
    );
  }
}
