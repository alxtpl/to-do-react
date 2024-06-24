// user input - includes validation
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form class="alert alert-danger" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        class="form-label"
        placeholder="Add Todo..."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
