import * as React from 'react';
import * as style from './style.css';
import * as browserHistory from 'react-router';

import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import { FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

import Button from 'material-ui/Button';
import ArrowForward from 'material-ui-icons/ArrowForward';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Red from 'material-ui/colors/red';

import history from '../../../utils/history';

import Grid from 'material-ui/Grid';

const theme = createMuiTheme({
  palette: {
    primary: Red
  }
});

export namespace LoginForm {
  export interface Props {

  }

  export interface State {
    checked: boolean;
  }
}

export default class LoginForm extends React.Component<LoginForm.Props, LoginForm.State> {
  constructor(props: LoginForm.Props) {
    super();
    this.state = {
      checked: false
    }
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
  }

  componentWillMount(){
    //history.push('/');
  }

  handleCheckboxClick(e) {
    this.setState({ checked: e.target.checked });
  }

  render() {
    return (
      <div className={style.loginForm}>
          <Grid container>
            <Grid item xs={12}>
              <Icon className={style.icon}>person</Icon>
              <FormControl
                className={style.field}
                error={false}>
                <TextField
                  label="Username"
                  placeholder="Username"
                />
                {/* <FormHelperText>Error</FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Icon className={style.icon}>accessibility</Icon>
              <FormControl
                className={style.field}
                error={false}>
                <TextField
                  label = "Password"
                  placeholder="Password"
                  type="password"
                />
                {/* <FormHelperText>Error</FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checked}
                    onClick={this.handleCheckboxClick}
                  />
                }
                label="Keep me signed in"
              />
            </Grid>
          </Grid>
          <MuiThemeProvider theme={theme}>
            <Button fab color="primary" aria-label="add" className={style.loginButton}>
              <ArrowForward />
            </Button>
          </MuiThemeProvider>
        </div>
    );
  }
}
