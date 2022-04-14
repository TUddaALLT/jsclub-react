import { createStyles, Text, Title, Image } from '@mantine/core';

import JSLogo from '../../../assets/images/JS_logo_230x165.webp';


const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,


    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  
  body: {
    paddingRight: theme.spacing.xl * 4,
    width: '60%',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  }
}));

 function MemberProfileContent({ member }) {
    const { classes } = useStyles();
    let { name, nickname, avatar, slug, details } = member;

    return (
        <div className={ classes.wrapper }>
            <div className={ classes.body }>
                <Title className={ classes.title }>{ name }</Title>

                <Text weight={400} size="lg" mb={5}>
                    { nickname }
                </Text>

                <Text size="sm" color="dimmed">
                    { details }
                </Text>
            </div>

            <Image 
                src={ avatar } 
                height={200}
                width={200} 
                radius="md"  
                withPlaceholder 
                placeholder={<img src={ JSLogo } width="80" />} 
            />
        </div>
    )
}  

export default MemberProfileContent; 