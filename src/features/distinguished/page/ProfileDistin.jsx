import { Box, Card, CardContent, Typography } from "@mui/material";
import ProfileData from "../../../../data/Profiles.json";
import { useParams } from "react-router-dom";

const ProfileCard = ({ profile }) => {
  return (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} gutterBottom align="center">
          {profile.name}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <img
            src={profile.cover}
            width="100%"
            style={{ marginTop: "30px", borderRadius: "15px" }}
          />
        </Typography>
        <Typography variant="body2" align="center" sx={{ fontSize: 24 }}>
          {profile.intro}
        </Typography>
      </CardContent>
    </>
  );
}

const ProfileDistin = () => {
  let { profileId } = useParams();
  let profile = ProfileData[profileId - 1];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
      <Box sx={{ maxWidth: 1000, borderRadius: 10 }}>
        <Card sx={{ borderRadius: 4 }} variant="outlined">
          <ProfileCard profile={profile} />
          {" "}
        </Card>
      </Box>
    </div>
  )
}

export default ProfileDistin;