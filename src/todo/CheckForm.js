import React from 'react';
import './CheckForm.css';

function CheckForm(props) {
  return (
    <React.Fragment>
      <input class='form-check-input' type='checkbox' id='todo' />
      <label class='form-check-label' className='strikethrough' for='todo'>
        {props.todo}
      </label>
    </React.Fragment>
  );
}

export default CheckForm;
