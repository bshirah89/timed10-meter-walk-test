import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from  'axios';
import NoteDialog from './components/NoteDialog'
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
      open: false,
      text:'',
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

    handleClickOpen = () => {
      this.setState({
        open: true,
      });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };

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
      // alert('fired');
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
      var text = `The results of the Patient ${testResults.patientName} 
      is: Self-Selected Velocity1: ${testResults.selfSelectedVelocity1} 'sec,
      Self-Selected Velocity2: ${testResults.selfSelectedVelocity2} 'sec,
      Self-Selected Velocity3: ${testResults.selfSelectedVelocity3} 'sec,
      Average Selected Velocity: ${testResults.selfSelectedAvg}'m/s,
       Fast Velocity1 : ${testResults.fastVelocity1} 'sec,
       Fast Velocity2 : ${testResults.fastVelocity2} 'sec,
       Fast Velocity3 : ${testResults.fastVelocity3} 'sec,
       Average Fast Velocity: ${testResults.fastSelectedAvg} m/s`
      let date = this.state.date;
      axios.post('http://localhost:8080/testResults', {text, date})
      .then(function (response) {
        // console.log(response);
        console.log('[RESPONSE]',response);
      })
      .catch(function (error) {
        console.log(error);
      });
      this.setState({text: text}) 
      this.handleClickOpen()
    }
    render(){
      const { classes } = this.props;
      console.log(this.state.text)
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
            onChange={this.onChange}
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
            onChange={this.onChange}
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
            <NoteDialog 
              text={this.state.text}
              open={this.state.open}
              handleClose={this.handleClose}
            />
      </div>
    )
  }
}

  
export default withStyles(styles)(TestForm)