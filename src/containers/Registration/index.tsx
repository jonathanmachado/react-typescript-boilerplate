import * as React from 'react';

export interface RegistrationProps {
}

export interface RegistrationState {
}

export default class Registration extends React.Component<RegistrationProps, RegistrationState> {
  constructor(props: RegistrationProps) {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        Registration
      </div>
    );
  }
}
