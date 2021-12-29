import React, { useState } from 'react';
import Inp from '../ui/input/Inp';
import Btn from '../ui/button/Btn';
import SelectColorComponent from './SelectColor.component';

export default function CreateGamerComponent({createGamer}) {
  const [name, setName] = useState('');
  const [color, setColor] = useState(undefined);

  const create = () => {
    createGamer({name, color});
  }

  const close = () => {
    createGamer(null);
  }

  const selectColor = (color) => {
    setColor(color);
  }

  const getDefaultColor = (color) => {
    setColor(color);
  }

  return (
    <div className="create-gamer">
      <div className="create-gamer__background">
      </div>
      <div className="create-gamer__modal">
        <form className="create-gamer-form">
          <div className="create-gamer-form__item">
            <h3 className="heading-text">Create gamer</h3>
          </div>
          <div className="create-gamer-form__item">
            <div className="create-gamer-form__select-color">
              <SelectColorComponent
                color={color}
                // idx={idx}
                // filtredColors={colors}
                getDefaultColor={getDefaultColor}
                selectColor={selectColor} />
            </div>
            <div className="create-gamer-form__input">
              {/* <label htmlFor="name"
            className="input-label">Name</label> */}
              <Inp id="name"
                placeholder="Name"
                type="text" value={name}
                onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div className="create-gamer-form__item">
            <div className="create-gamer-form__btns">
              <Btn color="primary" type="button" disabled={!name} onClick={create}>Create</Btn>
              <Btn color="secondary" type="button" onClick={close}>Close</Btn>

            </div>
          </div>
        </form >
      </div>
    </div>
  )
}
