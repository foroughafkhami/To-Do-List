import { Box, Typography, Paper } from "@mui/material";
import { useTodo } from "../context/TodoContext";

function TodoStats() {
  const { todos } = useTodo();

  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        mt: 3,
        borderRadius: 2,
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="body2" color="text.secondary">
          Total Tasks
        </Typography>
        <Typography variant="h6" color="primary">
          {totalTasks}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary">
          Completed
        </Typography>
        <Typography variant="h6" color="success.main">
          {completedTasks}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary">
          Remaining
        </Typography>
        <Typography variant="h6" color="warning.main">
          {remainingTasks}
        </Typography>
      </Box>
    </Paper>
  );
}

export default TodoStats;
