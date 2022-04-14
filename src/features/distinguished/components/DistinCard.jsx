import { styled } from "@mui/material/styles";
import { Card, CardHeader, CardMedia, CardActions, Avatar, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

const DistinCard = ({ profile }) => {
    const navigate = useNavigate();

    return (
        <div data-aos="flip-left">
            <Card sx={{ maxWidth: 345, margin: 5 }} key={profile.id}>
                <CardHeader
                    avatar={
                        <Avatar
                            sx={{ bgcolor: red[500] }}
                            aria-label="recipe"
                            src={profile.avatar}
                        />
                    }
                    title={profile.name}
                />
                
                <CardMedia
                    component="img"
                    height="194"
                    image={profile.cover}
                />

                <CardActions disableSpacing>
                    <ExpandMore
                        aria-label="show more"
                        onClick={() => navigate(profile.idLink)}
                    >
                        {" "}
                        <p>More Information</p>
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
            </Card>
        </div>
    )
}

export default DistinCard