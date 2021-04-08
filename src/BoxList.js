import { render } from '@testing-library/react';
import React, {useState} from 'react';
import {v4 as uuid } from 'uuid';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

function BoxList() {
  const [boxes, setBox] = useState([]);

  function removeBox(id) {
    // const oldBoxes = [...boxes];
    setBox((oldBoxes) => oldBoxes.filter(box => box.id !== id));
  }

  function addBox(box){
    let newBox = {...box, id: uuid() };
    setBox(boxes => [...boxes, newBox]);
  }

  //put renderboxes in return
  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />

      <div className="BoxList-container">
        {boxes.map(box => (
          <div className="BoxList-box" key={box.id}>
            <Box {...box}/>

          <button className="BoxList-button" onClick={() => removeBox(box.id)}>Remove</button>

          </div>
        ))}
      </div>

    </div>

  )

}

export default BoxList;