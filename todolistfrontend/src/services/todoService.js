const API_URL = "http://localhost:8080/api/todos";

const getAllTodos = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

const getCompletedTodos = async (completed) => {
  const response = await fetch(`${API_URL}/completed?completed=${completed}`);
  return await response.json();
};

const createTodo = async (todo) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: todo.task, completed: todo.completed }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Post:", responseData);
    return responseData;
  } catch (error) {
    console.error("Failed to create todo:", error);
  }
};

const updateTodo = async (id, todo) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  return await response.json();
};

const deleteTodo = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

const deleteCompletedTodos = async () => {
  await fetch(API_URL, { method: "DELETE" });
};

export {
  getAllTodos,
  getCompletedTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  deleteCompletedTodos,
};
