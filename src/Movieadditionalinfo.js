import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function Movieadditionalinfo({ movieli }) {
  const { id } = useParams();
  const movie = movieli[id];
  let res = movie.rating >= 8 ? "green" : "red";
  const c1 = {
    color: res
  };

  const navigate = useNavigate();
  return (
    <div>
      <iframe width="90%"
        height="700"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <div className="additionalinfocontainer">
        <div className='innerdiv'>
          <h4>{movie.name}</h4>
          <h4 style={c1}>☆{movie.rating}</h4>
        </div>
        <p>{movie.summary}</p>
        <Button variant="outlined" startIcon={<ArrowBackIosIcon />} onClick={() => navigate(-1)} >
          Back
        </Button>
      </div>
    </div>
  );
}
