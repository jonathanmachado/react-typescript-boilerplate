import * as React from 'react';
import * as HelloWorldActions from "../../actions/helloworld";
import { RootState } from '../../reducers';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from '../../store';

export namespace App {
  export interface Props {
    actions: typeof HelloWorldActions;
  }
  export interface State {
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component<App.Props, App.State> {
  constructor(props: App.Props) {
    super(props);
    this.state = {
    }
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    //console.log(store.getState());
    this.props.actions.helloWorld({ text: "test2" });
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <br/>
        <input
          type="button"
          value="Hello World"
          onClick={this.handleSave}
          />
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    test: state.test
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HelloWorldActions as any, dispatch)
  }
}
