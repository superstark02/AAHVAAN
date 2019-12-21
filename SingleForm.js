import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

// ----- Function for form ------
const SingleForm = ({ classes }) => {
    // Logic for the drop-down menu.
    // List of events to choose from. Change it to add the events.
    const sportsEvents = [
      'Event1',
      'Event2',
      'Event3',
      'Event4',
      'Event5',
      'Event6'
    ];
  
    const [choosenEvents, setChoosenEvents] = React.useState([])
  
    const handleChangeMultiple = event => {
      setChoosenEvents(event.target.value)
      console.log(choosenEvents)
      // console.log(event.target.value)
    };
  
    // Function for handling form submissions.
    const handleSubmissionSingle = (event) => {
      // Handle the form submission.
      console.log(event)
    }
  
    return (
      <form className={classes.root} Validate autoComplete="off" onSubmit={handleSubmissionSingle} >
        <TextField id="name-single" label="Name" variant="outlined" fullWidth={true} required />
        <TextField id="id-single" label="Email" type="email" variant="outlined" fullWidth={true} required />
        {/*Dropdopwn for events*/}
        <InputLabel id="mutiple-event-label">Events*</InputLabel>
        <Select
          labelId="mutiple-event-label"
          id="mutiple-events"
          multiple
          value={choosenEvents}
          onChange={handleChangeMultiple}
          input={<Input />}
          fullWidth={true}
          required
        >
          {sportsEvents.map(event=> (
            <MenuItem key={event} value={event}>
              {event}
            </MenuItem>
          ))}
        </Select>
        {/*-------------------*/}
        <TextField id="college-single" label="College" variant="outlined" fullWidth={true} required />
        <FormControlLabel id="stay-single" control={<Checkbox value="checkedA" fullWidth={true} />}
          label="Check here if you need accommodation"
        />
        {/*---Submit button---*/}
        <Button variant="contained" color="secondary" type="submit">
          Submit
        </Button>
        {/*------------------*/}
      </form>
    )
  }
  //-------------------------------

  export default SingleForm