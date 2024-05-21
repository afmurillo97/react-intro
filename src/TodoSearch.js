import './TodoSearch.css'

function TodoSearch() {
  return (
    <input 
      className='TodoSearch' 
      placeholder="Pill Onion" 
      onChange={(event) => {
        console.log('You write in TODO search bar...')
        // console.log(event);
        console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };