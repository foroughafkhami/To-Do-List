import { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  TextField,
  Select,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  MoreVert as MoreVertIcon,
  Edit as EditIcon,
  Schedule as ScheduleIcon,
} from "@mui/icons-material";
import { useTodo } from "../context/TodoContext";
import { formatDistanceToNow } from "date-fns";

/**
 * TodoItem component
 * Displays a single todo item with interactive controls
 * @param {Object} props - Component props
 * @param {Object} props.todo - Todo item data
 */
function TodoItem({ todo }) {
  // Get todo management functions from context
  const { toggleTodo, deleteTodo, editTodo } = useTodo();

  // State for menu and hover effects
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // State for edit dialog
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editCategory, setEditCategory] = useState(todo.category);

  // State for delete confirmation
  const [isDeleting, setIsDeleting] = useState(false);

  // Menu handlers
  const openMenu = (event) => setMenuAnchor(event.currentTarget);
  const closeMenu = () => setMenuAnchor(null);

  // Delete handlers
  const startDelete = () => {
    setIsDeleting(true);
    closeMenu();
  };
  const confirmDelete = () => {
    deleteTodo(todo.id);
    setIsDeleting(false);
  };

  // Edit handlers
  const startEdit = () => {
    setIsEditing(true);
    closeMenu();
  };
  const saveEdit = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText, editCategory);
      setIsEditing(false);
    }
  };
  const cancelEdit = () => {
    setIsEditing(false);
    setEditText(todo.text);
    setEditCategory(todo.category);
  };

  // Task item styles
  const taskStyles = {
    display: "flex",
    alignItems: "center",
    padding: 2,
    marginBottom: 1,
    borderRadius: 2,
    backgroundColor: "background.paper",
    border: "1px solid",
    borderColor: "divider",
    transition: "all 0.2s ease",
    "&:hover": {
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      transform: "translateY(-1px)",
    },
  };

  // Text styles for completed tasks
  const textStyles = {
    textDecoration: todo.completed ? "line-through" : "none",
    color: todo.completed ? "text.secondary" : "text.primary",
    fontWeight: todo.completed ? 400 : 500,
  };

  return (
    <>
      {/* Main task item */}
      <Box
        sx={taskStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Checkbox for completion status */}
        <Checkbox
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          sx={{
            color: "primary.main",
            "&.Mui-checked": { color: "primary.main" },
          }}
        />

        {/* Task content */}
        <Box sx={{ flex: 1, marginLeft: 2 }}>
          <Typography variant="body1" sx={textStyles}>
            {todo.text}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.secondary",
              marginTop: 0.5,
            }}
          >
            <ScheduleIcon sx={{ fontSize: 14, marginRight: 0.5 }} />
            {formatDistanceToNow(new Date(todo.createdAt), { addSuffix: true })}
          </Typography>
        </Box>

        {/* Action menu button (shown on hover) */}
        {isHovered && (
          <Tooltip title="More actions">
            <IconButton
              size="small"
              onClick={openMenu}
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
        )}

        {/* Action menu */}
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={closeMenu}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={startEdit}>
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>
          <MenuItem onClick={startDelete}>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {/* Edit dialog */}
      <Dialog open={isEditing} onClose={cancelEdit} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task"
            type="text"
            fullWidth
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={editCategory}
              label="Category"
              onChange={(e) => setEditCategory(e.target.value)}
            >
              <MenuItem value="Personal">Personal</MenuItem>
              <MenuItem value="Work">Work</MenuItem>
              <MenuItem value="Shopping">Shopping</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelEdit}>Cancel</Button>
          <Button onClick={saveEdit} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete confirmation dialog */}
      <Dialog
        open={isDeleting}
        onClose={() => setIsDeleting(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Delete Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this task? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleting(false)}>Cancel</Button>
          <Button onClick={confirmDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default TodoItem;
