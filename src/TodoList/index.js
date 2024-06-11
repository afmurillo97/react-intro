import './TodoList.css';

function TodoList(props) {
  
  const renderTodoList = props.children || props.render;

  return (
    <section className='TodoList-container'>
      { props.error && props.onError() }
      { props.loading && props.onLoading() }
      
      { (!props.loading && !props.totalTodos) && props.onEmptyTodos() }

      { (!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchValue) }
  
      { props.searchedTodos.map((todo, index) => renderTodoList(todo, index)) }
  
      <ul className='TodoList'>
          { props.children }
      </ul>
    </section>
  );
}

export { TodoList };