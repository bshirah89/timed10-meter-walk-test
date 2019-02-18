import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from  'axios';
//import './App.css';

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
      selfSelectedAvg: null,
      fastSelectedAvg: null,
      patientName: '',
      assistedDevice: '',
      date: '',
      selfSelectedVelocity1: null,
      selfSelectedVelocity2: null,
      selfSelectedVelocity3: null,
      fastVelocity1: null,
      fastVelocity2: null,
      fastVelocity3: null,

    }
    avg = (a, b, c) => {
      return ((a + b + c)/3)
    }
    onChange = (e) => {

      let name = e.target.name
      this.setState({
        [name]: e.target.value
      })
    }
    onSubmit = () => {
      alert('fired');
      // let note = "The results of the test are: "
      let testResults = {
        selfSelectedAvg: this.state.selfSelectedAvg,
        fastSelectedAvg: this.state.fastSelectedAvg,
        patientName: this.state.patientName,
        assistedDevice: this.state.assistedDevice,
        selfSelectedVelocity1: this.state.selfSelectedVelocity1,
        selfSelectedVelocity2: this.state.selfSelectedVelocity2,
        selfSelectedVelocity3: this.state.selfSelectedVelocity3,
        fastVelocity1: this.state.fastVelocity1,
        fastVelocity2: this.state.fastVelocity2,
        fastVelocity3: this.state.fastVelocity3,
      };
      let date = this.state.date;
      axios.post('http://localhost:8080/testResults', {testResults, date})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    render(){
      const { classes } = this.props;
    return(
      <div>
        <form>
        <section className={classes.section1}>
        <TextField
          required
          id="standard-required"
          label="Patient Name"
          name={'patientName'}
          // defaultValue="Hello World"
          className={classes.name}
          onChange={this.onChange}
          value={this.state.patientName}
          margin="normal"
          />
        <TextField
          required
          id="standard-required"
          label="Assisted Device"
          name='assistedDevice'
          // defaultValue="Hello World"
          className={classes.device}
          onChange={this.onChange}
          value={this.state.assistedDevice}
          margin="normal"
          />
         <TextField
            id="date"
            label="Date"
            type="date"
            name="date"
            defaultValue="2017-05-24"
            onChange={this.onChange}
            value={this.state.date}
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
            name="selfSelectedVelocity1"
            // defaultValue="Hello World"
            className={classes.textField}
            onChange={this.onChange}
            value={this.state.selfSelectedVelocity1}
            margin="normal"
            />
          <TextField
            required
            id="standard-required"
            label="Self-Selected Velocity2"
            name="selfSelectedVelocity2"
            // defaultValue="Hello World"
            className={classes.textField}
            onChange={this.onChange}
            value={this.state.selfSelectedVelocity2}
            margin="normal"
            />
          <TextField
            required
            id="standard-required"
            label="Self-Selected Velocity3"
            name="selfSelectedVelocity3"
            // defaultValue="Hello World"
            className={classes.textField}
            onChange={this.onChange}
            value={this.state.selfSelectedVelocity3}
            margin="normal"
            />
          <TextField
            id="standard-required"
            label="Avg Self-Selected Velocity"
            name="selfSelectedAvg"
            // defaultValue="Hello World"
            className={classes.textField}
            //onChange={this.onChange}
            value={this.state.selfSelectedAvg}
            margin="normal"
            />
        </aside>
        <aside className={classes.aside}>
        <TextField
          required
          id="standard-required"
          label="Fast Velocity1"
          name="fastVelocity1"
          // defaultValue="Hello World"
          className={classes.textField}
          onChange={this.onChange}
          value={this.state.fastVelocity1}
          margin="normal"
          />
        <TextField
          required
          id="standard-required"
          label="Fast Velocity2"
          name="fastVelocity2"
          // defaultValue="Hello World"
          className={classes.textField}
          onChange={this.onChange}
          value={this.state.fastVelocity2}
          margin="normal"
          />
        <TextField
          required
          id="standard-required"
          label="Fast Velocity3"
          name="fastVelocity3"
          // defaultValue="Hello World"
          className={classes.textField}
          onChange={this.onChange}
          value={this.state.fastVelocity3}
          margin="normal"
          />
          <TextField
            id="standard-required"
            label="Avg Fast-Selected Velocity"
            name="fastSelectedAvg"
            // defaultValue="Hello World"
            className={classes.textField}
            value={this.state.fastSelectedAvg}
            margin="normal"
          />
        </aside>
      </section>
      <Button onClick={this.onSubmit} variant="contained" color="primary" className={classes.button}>
        Send
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        {/* <Icon className={classes.rightIcon}>send</Icon> */}
      </Button>
        </form>
      </div>
    )
  }
}

  
export default withStyles(styles)(TestForm)