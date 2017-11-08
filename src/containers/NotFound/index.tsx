import * as React from 'react';

export interface NotFoundProps {
}

export interface NotFoundState {
}

export default class NotFound extends React.Component<NotFoundProps, NotFoundState> {
  constructor(props: NotFoundProps) {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        NotFound
      </div>
    );
  }
}
