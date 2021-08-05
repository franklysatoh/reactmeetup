import Todo from "./../components/Todo";

function TodosPage() {
  return (
    <>
      <div className="App">
        <h1>My Todos</h1>
        <Todo title="Learn React" description="description" />
        <Todo title="Master React" description="description" />
        <Todo title="Explore the full React course" description="description" />
      </div>
    </>
  );
}

export default TodosPage;
