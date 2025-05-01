import {
  Box,
  Container,
  Typography,
  Alert,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import { TodoProvider, useTodo } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import CategoryTabs from "./components/CategoryTabs";
import TodoItem from "./components/TodoItem";
import TodoStats from "./components/TodoStats";

function TodoApp() {
  const { todos, currentCategory, loading, error, addTodo } = useTodo();

  const filteredTodos = todos.filter(
    (todo) => currentCategory === "All" || todo.category === currentCategory
  );

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          mb: 4,
          textAlign: "center",
          fontWeight: 600,
          color: "primary.main",
        }}
      >
        Todo List
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <TodoForm onAddTodo={addTodo} />
      <CategoryTabs />

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <CircularProgress />
        </Box>
      ) : filteredTodos.length === 0 ? (
        <Box
          sx={{
            textAlign: "center",
            py: 4,
            color: "text.secondary",
          }}
        >
          <Typography variant="body1">
            {currentCategory === "All"
              ? "No todos yet. Add one to get started!"
              : `No todos in the ${currentCategory} category.`}
          </Typography>
        </Box>
      ) : (
        <Box sx={{ mt: 2 }}>
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </Box>
      )}

      <TodoStats />
    </Container>
  );
}

function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

export default App;
