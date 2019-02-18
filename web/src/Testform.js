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
    section1: {
      maxWidth: '200px',
      display: 'flex',
      margin:'auto',
      flexDirection: 'column',
      justifyContent:'center'
    },
    section2: {
      display: 'flex',
      margin:'auto',
      justifyContent:'center'
    },
    name: {
      // width: '100%'
      //clear:'right',
      //display: 'block'
    },
    device: {
      //display: 'block'
      //clear:'both',
      //clearFix: 'auto'
    },
    date:{

    },
    aside:{
      textAlign: 'center',
      maxWidth: '400px'
    }
  });

class TestForm extends React.Component{
    state = {
      selfSelectedAvg: ''
    }
    avg = (a, b, c) => {
      return ((a + b + c)/3)
    }
    onChange(e) {
      this.setState({})
    }
    render(){
      const { classes } = this.props;
    return(
      <div>
        <section className={classes.section1}>
        <TextField
          required
          id="standard-required"
          label="Patient Name"
          // defaultValue="Hello World"
          className={classes.name}
          margin="normal"
          />
        <TextField
          required
          id="standard-required"
          label="Assisted Device"
          // defaultValue="Hello World"
          className={classes.device}
          margin="normal"
          />
         <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue="2017-05-24"
            className={classes.date}
            InputLabelProps={{
              shrink: true,
            }}
            />
      </section>
      <section className={classes.section2}>
        <aside className={classes.aside}>
          <TextField
            required
            id="standard-required"
            label="Self-Selected Velocity1"
            // defaultValue="Hello World"
            className={classes.textField}
            margin="normal"
            />
          <TextField
            required
            id="standard-required"
            label="Self-Selected Velocity2"
            // defaultValue="Hello World"
            className={classes.textField}
            margin="normal"
            />
          <TextField
            required
            id="standard-required"
            label="Self-Selected Velocity3"
            // defaultValue="Hello World"
            className={classes.textField}
            margin="normal"
            />
          <TextField
            id="standard-required"
            label="Avg Self-Selected Velocity"
            // defaultValue="Hello World"
            className={classes.textField}
            margin="normal"
            value={this.state.selfSelectedAvg}
            />
        </aside>
        <aside className={classes.aside}>
        <TextField
          required
          id="standard-required"
          label="Fast Velocity1"
          // defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          />
        <TextField
          required
          id="standard-required"
          label="Fast Velocity2"
          // defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          />
        <TextField
          required
          id="standard-required"
          label="Fast Velocity3"
          // defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          />
          <TextField
            id="standard-required"
            label="Avg Fast-Selected Velocity"
            // defaultValue="Hello World"
            className={classes.textField}
            margin="normal"
            value={this.state.fastSelectedAvg}
          />
        </aside>
      </section>
    </div>
    )
  }
}

  
export default withStyles(styles)(TestForm)