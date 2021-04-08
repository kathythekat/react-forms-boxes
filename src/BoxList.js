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
  function renderBoxes() {
    return (
      <ul>
        {boxes.map(box => (
          <li key={box.id}>
            <Box {...box}/>
          <button onClick={() => removeBox(box.id)}>Remove box</button>
          </li>
        ))}
      </ul>
    )
  }

  function addBox(box){
    let newBox = {...box, id: uuid() };
    setBox(boxes => [...boxes, newBox]);
    console.log(boxes)

  }
  //put renderboxes in return
  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
    {renderBoxes()};
    </div>

  )

}

export default BoxList;