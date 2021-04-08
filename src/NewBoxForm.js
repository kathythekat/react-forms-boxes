import React, {useState} from 'react';

function NewBoxForm({addBox}) {
  const initialState = {backgroundColor: '', height:100, width:100}
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value,
    }))
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="width">Width:</label>
      <input
        type="number"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <button>Add a new box!</button>
    </form>
  );
}

export default NewBoxForm;