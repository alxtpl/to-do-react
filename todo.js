function Todo({ todo, index, remove }) {
  function handle() {
    console.log("Ping:", index);
    remove(index);
  }
  return (
    <div className="todo" class="alert alert-info" role="alert">
      <div class="container text-center">
        <div class="row">
          <div class="col-8">{todo.text}</div>
          <div class="col-4">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={handle}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
