import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import './App.css';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });

let form = (props) => {
    const { classes } = props;
    return(
      <div>
        <TextField
          required
          id="standard-required"
          label="Patient Name"
          // defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          />
    	</div>
    )
}

  
export default withStyles(styles)(form)