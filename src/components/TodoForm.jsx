import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  Alert,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Personal");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError("Task cannot be empty");
      return;
    }
    setError("");
    onAddTodo(text, category);
    setText("");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, md: 3 },
          borderRadius: 2,
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          mb: { xs: 2, md: 3 },
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            gap: { xs: 2, md: 3 },
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "stretch", sm: "center" },
            width: "100%",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Add a new task..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              if (error) setError("");
            }}
            error={!!error}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                },
              },
            }}
          />
          <FormControl
            sx={{
              minWidth: { xs: "100%", sm: 140, md: 160 },
              order: { xs: 2, sm: 1 },
            }}
          >
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
              sx={{
                borderRadius: 2,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "divider",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                },
              }}
            >
              <MenuItem value="Personal">Personal</MenuItem>
              <MenuItem value="Work">Work</MenuItem>
              <MenuItem value="Shopping">Shopping</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              borderRadius: 2,
              px: 3,
              py: 1.5,
              order: { xs: 1, sm: 2 },
            }}
          >
            Add Task
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default TodoForm;
