import * as React from 'react';
import * as style from './style.css';
import LoginForm from './components/loginForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export interface LoginProps {
}

export interface LoginState {
}

export default class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super();
    this.state = {
    }
  }

  render() {
    return (
        <div className={style.loginContent}>
          <LoginForm />
        </div>
    );
  }
}
