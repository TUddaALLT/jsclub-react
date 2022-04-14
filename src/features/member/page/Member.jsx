import { useEffect, useState } from 'react';
import { useNotifications } from '@mantine/notifications';
import { Container, Grid, Button, LoadingOverlay, Skeleton } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';

import MemberHeroHeader from '../components/MemberHeroHeader'
import MemberCard from '../components/MemberCard'

import { getAllMembersPaginate } from '../../../api/members'

const Member = () => {
    const [memberData, setMemberData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageLeft, setPageLeft] = useState(true);
    const [loading, setLoading] = useState(false);

    const { scrollIntoView, targetRef } = useScrollIntoView({ offset: 64 });

    const notifications = useNotifications();
    const errorNotif = () => {
        notifications.showNotification({
            color: 'red',
            autoClose: false,
            title: 'Đã có lỗi xảy ra trong quá trình tải thành viên',
            message: 'Vui lòng load lại trang',
        });
    }

    useEffect(() => {
        const loadMemberData = async () => {
            setLoading(true);

            const newMemberData = await getAllMembersPaginate(page, 2);
            if (newMemberData == 404) {
                errorNotif();
            } else if (newMemberData.length < 2 ) {
                setPageLeft(false);
                setMemberData([...memberData, ...newMemberData]);
            } else {
                setMemberData([...memberData, ...newMemberData]);
            }

            setLoading(false);
        }

        loadMemberData();
    }, [page])

    return (
        <>
            <MemberHeroHeader scrollIntoView={ scrollIntoView } />

            <Container 
                size="lg" px="lg"
                sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
                { page == 1 && loading 
                ? <Skeleton height={300} width="70%" radius="md" />
                :   <>
                        <Grid style={{ textAlign: "center", marginBottom: 20 }} ref={targetRef} >
                            { memberData.map(member => (
                                <Grid.Col sm={6} md={4} lg={3} key={member.id}>
                                    <MemberCard member={ member } />
                                </Grid.Col>
                            ))}
                        </Grid>

                        <Button 
                            sx={{ visibility: pageLeft ? 'visible' : 'hidden' }} 
                            disabled={ loading }
                            onClick={() => pageLeft && setPage(page + 1)}
                        >
                            <LoadingOverlay 
                                visible={loading} 
                                loaderProps={{ size: 'sm', variant: 'bars' }}
                                />
                            Xem thêm
                        </Button>
                    </>
                }
            </Container>
        </>
    )
}

export default Member