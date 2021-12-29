import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const colors = ['red', 'green', 'blue', 'black', 'yellow'];
const defaultColor = colors[0];

export default function SelectColorComponent({
  color = defaultColor,
  idx = 0,
  filtredColors = colors,
  selectColor,
  getDefaultColor = () => {} }) {

  const [showSelectColor, setShowSelectColor] = useState(false);

  const switchSelectColorHandler = () => setShowSelectColor((prev) => !prev);

  // run once to pass default color to parent component
  useEffect(() => { getDefaultColor(color, idx) }, [color, getDefaultColor, idx]);

  const selectHandler = (color) => selectColor(color, idx);
  return (
    <div className="select-color"
      style={{ 'backgroundColor': color }}
      onClick={() => switchSelectColorHandler(idx)}>

      {showSelectColor && <div className="select-color__popup select-color-popup">
        <FontAwesomeIcon className="select-color-popup__close-icon" icon={faCircleXmark} />
        {filtredColors.map((color) =>
          <div className="select-color-popup__item"
            key={color} style={{ 'backgroundColor': color }}
            onClick={() => selectHandler(color)}>
          </div>
        )}
      </div>}
    </div>
  );
}