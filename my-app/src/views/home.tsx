import React from 'react';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import { Card, CardActions, CardContent, CardHeader, Container, Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorder';
import { PAGE_TITLES, TIERS } from '../constants';
import { myStyle } from '../styles';
import withMyTheme from '../HOC';

const Homepage: React.FC = () => {
    const classes = myStyle();
    const tiers = TIERS;
    return (
        <>
            <Container maxWidth="md" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Kính gửi Trainers
                </Typography>
                <Typography variant="h5" align="justify" color="textSecondary" component="p"></Typography>
                <ul className={classes.note}>
                    <li>Có 2 tài khoản admin và test cùng mật khẩu là 123456.</li>
                </ul>
            </Container>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            ${tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary">
                                            /mo
                                        </Typography>
                                    </div>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth color="primary">
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default withMyTheme(Homepage, PAGE_TITLES.home);
