import { useState, useEffect, useRef } from "react";

import { styled, Paper, Grid, Box } from "@mui/material";
import RocketIcon from "@mui/icons-material/Rocket";

import Aos from "aos";
import "aos/dist/aos.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function HomeBody() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [size, setSize] = useState(6);
  const [showgotop, setShowgotop] = useState(false);
  const videoRef = useRef(null);

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
  console.log(document.body.clientHeight);
  // window.onload = () => {
  //   videoRef.current.;
  // };
  useEffect(() => {
    const handleScrollToPlayVideo = () => {
      if (window.innerWidth < 670) {
        if (window.scrollY > 0.25 * document.body.clientHeight) {
          videoRef.current.play();
        }
        if (
          window.scrollY > 0.375 * document.body.clientHeight ||
          window.scrollY < 0.25 * document.body.clientHeight
        ) {
          videoRef.current.pause();
        }
      } else {
        if (window.scrollY > 0.15 * document.body.clientHeight) {
          videoRef.current.play();
        }
        if (
          window.scrollY > 0.375 * document.body.clientHeight ||
          window.scrollY < 0.15 * document.body.clientHeight
        ) {
          videoRef.current.pause();
        }
      }
    };

    window.addEventListener("scroll", handleScrollToPlayVideo);
    return () => {
      window.removeEventListener("scroll", handleScrollToPlayVideo);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 890) {
        setSize(12);
      } else {
        setSize(6);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  function toThetop() {
    document.body.scrollTop = 0; // iphone
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <div
        style={{ width: "100%", justifyContent: "center" }}
        data-aos="fade-up"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: " noWrap",
            backgroundColor: "white",
            marginTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <Box sx={{ width: "80%" }}>
            <h1 align="center">JS Club - Japanese Software Engineers​</h1>
            <ul style={{ listStyle: "hiragana", fontSize: "25px" }}>
              <li>
                Tên đầy đủ: Japanese Software Engineers Club – Câu lạc bộ Kỹ sư
                phần mềm Nhật Bản, được đặt theo một chuyên ngành hẹp của ngành
                Kỹ thuật phần mềm tại ĐH FPT.​
              </li>
              <li>Được thành lập vào tháng 2/2014. ​</li>
              <li>
                JS mang sứ mệnh trở thành một cộng đồng kết nối các sinh viên
                theo chuyên ngành hẹp JS. Sau này, câu lạc bộ được mở rộng, trở
                thành nơi chia sẻ kiến thức của các sinh viên YÊU THÍCH TIẾNG
                NHẬT và ĐAM MÊ LẬP TRÌNH.{" "}
              </li>
              <li>
                Hiện tại, JS đang có khoảng 130 thành viên active hàng kỳ.​
              </li>
              <li>
                JS Club là câu lạc bộ đầu tiên và duy nhất tại Đại học FPT Hà
                Nội khi 10 lần liên tiếp được vinh danh tại Lễ tôn vinh với danh
                hiệu Câu lạc bộ xuất sắc.​
              </li>
            </ul>
          </Box>
        </div>
        <video controls loop ref={videoRef} width="100%" muted>
          <source
            src=" https://res.cloudinary.com/dphakhyuz/video/upload/v1647574565/js/269912635_242742634641914_6244514336871273875_n_z1kc9r_online-video-cutter.com_1_csfttf.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <h1 align="center" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        Một Số Sự Kiện Học Thuật Nổi bật
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          width: "80%",
          margin: "auto",
        }}
      >
        {" "}
        <Box sx={{ width: "100%", paddingTop: "35px" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={size}>
              <Item elevation={20} data-aos="fade-right">
                {" "}
                <h3 style={{ margin: "22px 0px 22px 0px" }}>
                  ALGORITHM ARENA​
                </h3>
                <img
                  src="https://res.cloudinary.com/djav5udlk/image/upload/v1648304610/JS_CHALLENGE/others/algorithm_rghwne.webp"
                  width="100%"
                  height="35%"
                />
              </Item>
            </Grid>

            <Grid item xs={size}>
              <Item elevation={20} data-aos="fade-left">
                <h3 style={{ margin: "22px 0px 22px 0px" }}>CODING PROJECT​</h3>
                <img
                  src="https://res.cloudinary.com/djav5udlk/image/upload/v1648304607/JS_CHALLENGE/others/codingProject_vbv7dq.webp"
                  width="100%"
                  height="35%"
                />
              </Item>
            </Grid>
            <Grid item xs={size}>
              <Item elevation={20} data-aos="fade-right">
                {" "}
                <h3 style={{ margin: "22px 0px 22px 0px" }}>CODE BATTLE​</h3>
                <img
                  src="https://res.cloudinary.com/djav5udlk/image/upload/v1648304612/JS_CHALLENGE/others/codeBattle_uq3svf.webp"
                  width="100%"
                  height="35%"
                />
              </Item>
            </Grid>
            <Grid item xs={size}>
              <Item elevation={20} data-aos="fade-left">
                {" "}
                <h3 style={{ margin: "22px 0px 22px 0px" }}>
                  MEMBER RECRUITMENT
                </h3>
                <img
                  src="https://res.cloudinary.com/dphakhyuz/image/upload/v1648524112/js/126141228_3530053987109092_3076579351887505500_n.jpg_xihoo2.jpg"
                  width="100%"
                  height="35%"
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div style={{ marginTop: "10vh" }}>
        <h1 align="center" display="block" margin-top="100px">
          Ban Điều Hành Club Js{" "}
        </h1>
      </div>
      <div
        style={{
          // display: "flex",
          // justifyContent: "center",
          marginTop: "30px",
          backgroundColor: "white",
          width: "80%",
          margin: "auto",
          paddingTop: "100px",
          paddingBottom: "100px",
        }}
      >
        <Grid item xs={12}>
          <Item elevation={20} data-aos="flip-right">
            {" "}
            <h3 style={{ margin: "22px 0px 22px 0px" }}>
              Lê Thanh Bình Chủ Nhiệm JS
            </h3>
            <img
              src="https://res.cloudinary.com/djav5udlk/image/upload/v1648304612/JS_CHALLENGE/others/chuNhiemjs_ax8zdp.webp"
              width="55%"
              height="55%"
            />
          </Item>
        </Grid>
        <Grid item xs={12} marginTop="20px">
          <Item elevation={20} data-aos="flip-left">
            {" "}
            <h3 style={{ margin: "22px 0px 22px 0px" }}>
              Lê Duy Cương Phó Chủ Nhiệm JS
            </h3>
            <img
              src=" https://res.cloudinary.com/dphakhyuz/image/upload/v1648476750/js/274586366_1607585379608865_5484342927052434801_n.jpg_isneyn.jpg"
              width="55%"
              height="55%"
            />
          </Item>
        </Grid>
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
          <RocketIcon sx={{ borderRadius: "10px" }} />
        </button>
      )}
    </>
  );
}
