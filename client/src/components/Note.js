import React from 'react';

const Note = props => (
  <div key={props.id} className="note">
    {props.content}
    <button value={props.id} onClick={props.onUpdate}>Update</button>
    <button value={props.id} onClick={props.onDelete}>Remove</button>
  </div>
)

export default Note;

