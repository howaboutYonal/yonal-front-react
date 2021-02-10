import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtons() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <RadioGroup row aria-label="anonymity" name="anonymity" defaultValue="top">
        <FormControlLabel
          value="익명"
          control={<Radio color="primary" />}
          label="익명"
          labelPlacement="top"
        />
        <FormControlLabel
          value="실명"
          control={<Radio color="primary" />}
          label="실명"
          labelPlacement="top"
        />
      </RadioGroup>
    </FormControl>
  );
}