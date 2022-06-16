import { Moviecomponent } from './Moviecomponent';

export function Showmovies({ movies }) {
  return (
    <div class="mainmovieconatiner">
      {movies.map((ele, index) => (
        <Moviecomponent key={index} obj={ele} id={index} />
      ))}
    </div>
  );
}
