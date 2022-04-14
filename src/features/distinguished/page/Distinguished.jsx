import { useState, useEffect } from "react";
import RocketIcon from "@mui/icons-material/Rocket";
import Aos from "aos";
import "aos/dist/aos.css";
import DistinCard from "../components/DistinCard";
import { createStyles } from "@mantine/core";
import ProfileData from "../../../../data/Profiles.json";
import Dots from "../../member/components/Dots";
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
const Distinguished = () => {
  const { classes } = useStyles();
  const [showgotop, setShowgotop] = useState(false);
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
  // init thư viện aos
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    //css color background
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
        data-aos="flip-up"
      >
        <div style={{ background: "#bdb76b", paddingTop: "15px" }}>
          <h1
            style={{
              alignItems: "center",
              textAlign: "center",
              marginTop: "110px",
            }}
          >
            Bảng Vinh Danh Các Thành Viên Nổi Bật{" "}
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              marginTop: "50px",
              maxWidth: "950px",
            }}
          >
            {ProfileData.map((profile, id) => (
              <DistinCard key={id} profile={profile} />
            ))}
          </div>
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

export default Distinguished;
