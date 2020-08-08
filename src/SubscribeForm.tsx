import React from "react";
import { Input, Button } from "antd";

interface IProps {}

interface IState {
  name: string;
  email: string;
}

function makeState(state?: IState): IState {
  if (!!state) {
    return {...state};
  }
  
  return {
    name: 'Joe Doe',
    email: 'tina@topoh.cm'
  }
}

export class SubscribeForm extends React.Component<IProps, IState> {

  constructor(public props: IProps, public state: IState) {
    super(props);

    this.state = makeState();
  }

  render() {
    return (
      <div>
        <p>
          Enter your email to get daily <span>topoh</span>
        </p>
        <Input size="large" value={this.state.name} placeholder="Joe Doe" />
        <Input size="large" value={this.state.email} placeholder="tina@topoh.cm" />
        <Button size="large" block={true} type="primary">Subscribe</Button>
      </div>
    );
  }
}
