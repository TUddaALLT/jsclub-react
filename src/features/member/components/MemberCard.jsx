import { Card, Text, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";

import JSLogo from '../../../assets/images/JS_logo_230x165.webp';

const MemberCard = ({ member }) => {
    const navigate = useNavigate();
    let { name, nickname, avatar, slug, details } = member;
    details = details.length > 50 ? details.slice(0, 50) + "......" : details;

    return (
        <Card
            shadow="md"
            p="xl"
            radius="md"
            sx={{
                height: '100%',
                width: '100%',

                '&:hover': {
                    cursor: "pointer"
                }
            }}
            onClick={() => navigate(slug)}
        >
            <Card.Section>
                <Image src={ avatar } height={160} withPlaceholder placeholder={<img src={JSLogo} width="80" />} />
            </Card.Section>

            <Text weight={500} size="lg" style={{ marginTop: 12 }}>
                { name }
            </Text>

            <Text size="md" sx={{ minHeight: '1rem' }}>
                { nickname }
            </Text>

            <Text size="sm">
                { details }
            </Text>
        </Card>
    )
}

export default MemberCard