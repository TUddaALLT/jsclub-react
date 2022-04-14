import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logojs from "../../assets/images/JS_logo_250x250.webp";
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "Trang Chủ", id: 1, route: "/" },
  { name: "Ban Ngành ", id: 2, route: "/departments" },
  { name: "Vinh Danh ", id: 3, route: "/distinguished" },
  { name: "Thành viên", id: 4, route: "/members" },
  { name: "Blog", id: 5, route: "/blog" },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  const handleCloseNavMenu = () => {
    document.getElementById("loading").style.display = "block";
    setTimeout(function () {
      document.getElementById("loading").style.display = "none";
    }, 500);
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: " #f8f0f0" }}>
      <Container maxWidth="xl" color="red" sx={{ marginLeft: "inherit" }}>
        <Toolbar disableGutters color="red" align="center">
          <Typography
            variant="h4"
            noWrap
            component="div"
            color="#12c2e9 "
            sx={{ mr: 8, display: { xs: "none", md: "flex" } }}
            cursor=" pointer"
          >
            <img
              src={Logojs}
              alt="logo"
              style={{ cursor: "pointer", width: "60px", height: "60px" }}
              onClick={() => navigate("/")}
              onClickCapture={handleCloseNavMenu}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              //trang chu
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: "black" }} />
            </IconButton>

            <Menu
              display="grid"
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.id}
                  onClick={() => navigate(page.route)}
                  onClickCapture={handleCloseNavMenu}
                  // onClickCapture={handleLoading}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </Button>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h4"
            color="#12c2e9 "
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              marginRight: 5,
            }}
          >
            <img
              src={Logojs}
              alt="logo"
              style={{ cursor: "pointer", width: "60px", height: "60px" }}
              onClick={() => navigate("/")}
              onClickCapture={handleCloseNavMenu}
            />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => navigate(page.route)}
                onClickCapture={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <Typography textAlign="center">{page.name}</Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

setTimeout(function () {
  document.getElementById("loading").style.display = "none";
}, 500);
