import React from "react";
import { Input, Button } from "antd";

interface IProps {}

interface IState {
  name: string;
  email: string;
}

function makeState(state?: IState): IState {
  if (!!state) {
    return { ...state };
  }

  return {
    name: "",
    email: "",
  };
}

export class SubscribeForm extends React.Component<IProps, IState> {
  constructor(public props: IProps, public state: IState) {
    super(props);
    this.state = makeState();
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (Object.keys(this.state).includes(name)) {
      const updatedState = Object.assign({}, this.state, {
        [name]: value,
      });
      this.setState(updatedState);
    }
  };

  handleSubscribe = () => {
    const { name, email } = this.state;

    // TODO validation BMM
    const errors = Object.keys(this.state).reduce((acc: any, key: string) => {
      // @ts-ignore
      if (!!!this.state[key]) {
        acc = [...acc, {'field': key, 'error': `error with the ${key} field`}];
      }

      return acc;
    }, [])


    if (errors.length > 0) {
      alert(`errors while subscribing: ${errors}`);
      return;
    }

    alert(`subscribing: ${name} ${email}`);
  };

  render() {
    const { name, email } = this.state;

    return (
      <div>
        <p>
          Enter your email to get daily <span>topoh</span>
        </p>
        <Input
          name="name"
          size="large"
          onChange={this.handleInputChange}
          value={name}
          placeholder="Joe Doe"
        />
        <Input
          name="email"
          size="large"
          onChange={this.handleInputChange}
          value={email}
          placeholder="tina@topoh.cm"
        />
        <Button
          size="large"
          block={true}
          type="primary"
          onClick={this.handleSubscribe}
        >
          Subscribe
        </Button>
      </div>
    );
  }
}
