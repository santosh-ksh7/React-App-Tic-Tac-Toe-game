import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function Createandupdate({ movies, setMovies }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  return (
    <div>
      <div className="movies-form">
        <TextField onChange={(event) => setName(event.target.value)} id="standard-basic" label="name" variant="standard" />
        <TextField onChange={(event) => setPoster(event.target.value)} id="standard-basic" label="poster" variant="standard" />
        <TextField onChange={(event) => setRating(event.target.value)} id="standard-basic" label="rating" variant="standard" />
        <TextField onChange={(event) => setSummary(event.target.value)} id="standard-basic" label="summary" variant="standard" />
        <TextField onChange={(event) => setTrailer(event.target.value)} id="standard-basic" label="trailer" variant="standard" />
        <Button onClick={() => {
          const newmovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer
          };
          setMovies([...movies, newmovie]);
        }}
          variant="outlined">Add Movie</Button>
      </div>

    </div>
  );
}
