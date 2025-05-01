import { Tabs, Tab, Box, Paper } from "@mui/material";
import { useTodo } from "../context/TodoContext";

const CATEGORIES = ["All", "Personal", "Work", "Shopping", "Other"];

/**
 * CategoryTabs component
 * Provides category filtering functionality
 * @param {Object} props - Component props
 * @param {string} props.currentCategory - Currently selected category
 * @param {Function} props.onCategoryChange - Callback for category change
 */
function CategoryTabs() {
  const { currentCategory, setCategory } = useTodo();

  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 1, md: 2 },
          borderRadius: 2,
          bgcolor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          mb: { xs: 2, md: 3 },
          overflow: "hidden",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <Tabs
          value={currentCategory}
          onChange={(_, newValue) => setCategory(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            width: "100%",
            "& .MuiTabs-indicator": {
              height: 3,
              borderRadius: 3,
              backgroundColor: "primary.main",
            },
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 500,
              minWidth: "auto",
              px: { xs: 2, md: 3 },
              py: { xs: 1, md: 1.5 },
              fontSize: { xs: "0.875rem", md: "1rem" },
              borderRadius: 2,
              transition: "all 0.2s ease",
              color: "text.secondary",
              "&:hover": {
                color: "primary.main",
                bgcolor: "rgba(74, 144, 226, 0.08)",
              },
              "&.Mui-selected": {
                color: "primary.main",
                fontWeight: 600,
              },
            },
          }}
        >
          {CATEGORIES.map((category) => (
            <Tab
              key={category}
              label={category}
              value={category}
              sx={{
                "&.Mui-selected": {
                  bgcolor: "rgba(74, 144, 226, 0.08)",
                },
              }}
            />
          ))}
        </Tabs>
      </Paper>
    </Box>
  );
}

export default CategoryTabs;
