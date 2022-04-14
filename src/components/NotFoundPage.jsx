import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

const NotFoundPage = () => {
  const { classes } = useStyles();
  let navigate = useNavigate();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>Bạn đã tìm thấy một bí mật</Title>
      <Text color="dimmed" size="lg" align="center" className={classes.description}>
        Thật không may là trang này không tồn tại. Vui lòng kiểm tra lại đường dẫn.
      </Text>
      <Group position="center">
        <Button 
          variant="subtle"
          size="md"
          onClick={() => navigate("/")}
        >
          Quay lại trang chủ
        </Button>
      </Group>
    </Container>
  );
}

export default NotFoundPage;