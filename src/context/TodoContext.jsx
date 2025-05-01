import { createContext, useContext, useReducer, useEffect } from "react";

const TodoContext = createContext();

const initialState = {
  todos: [],
  currentCategory: "All",
  loading: false,
  error: null,
};

function todoReducer(state, action) {
  switch (action.type) {
    case "SET_TODOS":
      return { ...state, todos: action.payload, loading: false };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false,
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                text: action.payload.text,
                category: action.payload.category,
              }
            : todo
        ),
        loading: false,
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        loading: false,
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        loading: false,
      };
    case "SET_CATEGORY":
      return { ...state, currentCategory: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Load todos from localStorage on initial render
  useEffect(() => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        dispatch({ type: "SET_TODOS", payload: JSON.parse(savedTodos) });
      }
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: "Failed to load todos" });
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(state.todos));
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: "Failed to save todos" });
    }
  }, [state.todos]);

  const addTodo = (text, category) => {
    dispatch({ type: "SET_LOADING", payload: true });
    const newTodo = {
      id: Date.now(),
      text,
      category,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  const editTodo = (id, text, category) => {
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "EDIT_TODO", payload: { id, text, category } });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const setCategory = (category) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
  };

  const value = {
    todos: state.todos,
    currentCategory: state.currentCategory,
    loading: state.loading,
    error: state.error,
    addTodo,
    editTodo,
    toggleTodo,
    deleteTodo,
    setCategory,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
}
