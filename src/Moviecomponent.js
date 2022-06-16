import { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

// TASK-3   --Movie component
export function Moviecomponent({ obj, id }) {

  const [toggle, setToggle] = useState(true);
  let res = obj.rating >= 8 ? "green" : "red";
  const c1 = {
    color: res
  };

  let res1 = toggle ? "block" : "none";
  const c2 = {
    display: res1
  };

  const navigate = useNavigate();

  return (
    <Card className='outerdiv' style={{height: "min-content", borderRadius: "0px" }}>
      <img className='poster' src={obj.poster} alt={obj.name} />
      <CardContent>
        <div className='innerdiv'>
          <h4>{obj.name}
            <IconButton aria-label="delete" color="primary" onClick={() => navigate(`/movies/${id}`)} >
            <InfoIcon />
            </IconButton>
            <IconButton aria-label="delete" color="primary" onClick={() => setToggle(!toggle)}>
              {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h4>
          <h4 style={c1}>☆{obj.rating}</h4>
        </div>
        <p style={c2}>{obj.summary}</p>
      </CardContent>
      <CardActions>
      <Counter />
      </CardActions>  
    </Card>
  );
}


