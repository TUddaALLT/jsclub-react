import { createStyles, Anchor, ActionIcon, Group } from '@mantine/core';
import BrandFacebook from 'tabler-icons-react/dist/icons/brand-facebook';
import BrandInstagram from 'tabler-icons-react/dist/icons/brand-instagram';

import JSLogo from '../../assets/images/JS_logo_230x165.webp';

import { openInNewTab } from '../../utils';

const links = [
  {
    "link": "mailto:doloc181103@gmail.com",
    "label": "Liên hệ"
  },
  {
    "link": "#",
    "label": "Đóng góp"
  },
  {
    "link": "#",
    "label": "Mã nguồn"
  },
  {
    "link": "#",
    "label": "Blog"
  }
]

const useStyles = createStyles((theme) => ({
  footer: {
    padding: '4px 0',
    marginTop: 'auto',
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    zIndex: 0,
    bottom: 0,
    position: "sticky"
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,
    zIndex: 10,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

const FooterCentered = () => {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => link.link === "#" && event.preventDefault()}
      size="md"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <img src={ JSLogo } width={60} />

        <Group className={classes.links}>{items}</Group>

        <Group spacing={0} position="right" noWrap>
          <ActionIcon size="lg" onClick={() => openInNewTab("https://www.facebook.com/fu.jsclub")}>
            <BrandFacebook size={18} />
          </ActionIcon>

          <ActionIcon size="lg" onClick={() => openInNewTab("https://www.instagram.com/fptu.jsclub/")}>
              <BrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}

export default FooterCentered;