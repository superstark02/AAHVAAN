import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

const TeamForm = ({ classes }) => {
  const handleSubmissionTeam = (event) => {
    // Handle the form submission.
  }

  // ----Event handler for member count input----
  const handleTeamNumberChange = (event) => {
    setAdditionalMembers(event.target.value)
  }
    
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
  
  const [additionalTeamMembers, setAdditionalMembers] = React.useState('')
  // Function to generate the field for members.
  const generateNameFields = (num) => {
    const inputFields = []
    for (let i = 0; i < num; i++)
      inputFields.push(<TextField key={i} id={`member-name${i+1}`} label={`Member ${i+1}`} variant="outlined" fullWidth={true} />)
    return inputFields
  }

  return(
    <form className={classes.root} Validate autoComplete="off" onSubmit={handleSubmissionTeam}>
      <TextField id="name-team-leader" label="Name (Leader)" variant="outlined" fullWidth={true} required />
      <TextField id="id-team" label="Email (Leader)" type="email" variant="outlined" fullWidth={true} required />
      <TextField id="number-team-member" label="Members count (excluding leader)" variant="outlined" 
      type="number" InputProps={{ inputProps: { min: 1} }} fullWidth={true} value={additionalTeamMembers}
      onChange={handleTeamNumberChange} required />
      {generateNameFields(additionalTeamMembers)}
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
      <TextField id="college-team" label="College" variant="outlined" fullWidth={true} required />
      <FormControlLabel control={<Checkbox value="checkedA" fullWidth={true} />}
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

export default TeamForm