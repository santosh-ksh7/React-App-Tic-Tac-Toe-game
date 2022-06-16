import { useState } from "react";
import { Createcolorblock } from "./Createcolorblock";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// TASK-5   --color game
export function Colourgame() {
  let arr = ["red", "blue", "green"];
  const [initial, setInitial] = useState(arr);



  const [colorval, setColorval] = useState("white");
  let c3 = {
    backgroundColor: colorval,
  };


  return (
    <div>
      <TextField style={c3} value={colorval} className='ipfield' id="standard-basic" label="enter a color name" variant="standard" onChange={(ele) => setColorval(ele.target.value)} />
      <Button className='buttonip' onClick={() => setInitial([...initial, colorval])} variant="outlined">Add color</Button>
      {initial.map((ele, index) => (
        <Createcolorblock key={index} arg={ele} />
      ))}
    </div>
  );
}
