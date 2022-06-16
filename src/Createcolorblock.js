
export function Createcolorblock({ arg }) {
  const c2 = {
    backgroundColor: arg
  };
  return (
    <div style={c2} className='colorblock'>{arg}</div>
  );
}
