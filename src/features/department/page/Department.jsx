import { useState, useEffect } from "react";
import { styled, Box, Paper } from "@mui/material";
import RocketIcon from "@mui/icons-material/Rocket";
import { createStyles } from "@mantine/core";

import SliderDepartment from "../../../components/Sliders/SliderDepartment";
import DepartmentData from "../../../../data/PostsDepartment.json";
import Dots from "../../member/components/Dots";
import Aos from "aos";
import "aos/dist/aos.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 120,
    paddingBottom: 80,

    "@media (max-width: 755px)": {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    "@media (max-width: 755px)": {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
    },
  },

  description: {
    textAlign: "center",

    "@media (max-width: 520px)": {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      height: 42,
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));
const Department = () => {
  const [showgotop, setShowgotop] = useState(false);
  const posts = DepartmentData.posts;
  const { classes } = useStyles();
  // go toThetop
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowgotop(true);
      } else {
        setShowgotop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toThetop() {
    document.body.scrollTop = 0; // iphone
    document.documentElement.scrollTop = 0;
  }

  //khoi tao aos
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
        data-aos="flip-left"
      >
        <div
          style={{ background: "darkkhaki", width: "950px" }}
          data-aos="zoom-in"
        >
          {posts.map((post) => (
            <Box
              sx={{
                width: 1,
                marginTop: "70px",
              }}
              key={post.department}
            >
              <h1 style={{ textAlign: "center" }}>CÁC BAN NGÀNH TRONG JS</h1>

              <Box
                display="grid"
                gridTemplateColumns="repeat(10, 1fr)"
                gap={2}
                sx={{ padding: 5 }}
              >
                <Box gridColumn="span 10">
                  <Item
                    sx={{
                      backgroundColor: "graymap",
                      borderRadius: "5px",
                      paddingBottom: "55px",
                    }}
                  >
                    <h2>{post.department}</h2>
                    <div data-aos="fade-up-right">
                      <SliderDepartment props={post.img} />
                      <div>
                        <p>Một Số Hình Ảnh Nổi Bật</p>
                        <h3 style={{ lineHeight: "30px" }}>{post.intro}</h3>
                      </div>
                    </div>
                  </Item>
                </Box>
              </Box>
            </Box>
          ))}
        </div>
      </div>
      {showgotop && (
        <button
          style={{
            position: "fixed",
            right: 2,
            bottom: 20,
            color: "red",
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "none",
          }}
          onClick={toThetop}
        >
          <RocketIcon sx={{ borderRadius: "10px", backgroundColor: "white" }} />
        </button>
      )}
    </div>
  );
};

export default Department;
