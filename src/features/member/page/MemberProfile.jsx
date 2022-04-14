import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createStyles ,Loader, Container } from "@mantine/core";
import { useNotifications } from "@mantine/notifications";

import NotFoundPage from "../../../components/NotFoundPage";
import MemberProfileContent from "../components/MemberProfileContent";

import { getMember } from "../../../api/members";

const useStyles = createStyles((theme) => ({
    loading_container: { 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        justifyContent: "center",
        height: "50vh" 
    },
}));

const MemberProfile = () => {
    const { classes } = useStyles();

    const [loading, setLoading] = useState(true);
    const [member, setMember] = useState(null);

    let { profileId } = useParams();

    const notifications = useNotifications();
    const errorNotif = () => {
        notifications.showNotification({
            color: 'red',
            title: 'Thành viên không tồn tại',
            message: '',
        });
    }

    useEffect(() => {
        const loadMemberData = async () => {
            const memberData = await getMember(profileId);
            console.log(memberData);
            if (memberData == 404) {
                errorNotif();
            }

            setMember(memberData);
            setLoading(false);
        }

        loadMemberData();
    }, [])

    return (
        <Container 
            size="lg" px="lg"
            className={ loading ? classes.loading_container : ''}
        >
            {   member == null && loading
                ? <Loader size="xl" />
                : member == 404 
                ? <NotFoundPage />
                : (
                    <MemberProfileContent member={ member } />
                )
            }
        </Container>
    )
}

export default MemberProfile