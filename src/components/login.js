import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
var user = ""
class SignIn extends React.Component {
    state = {
        classes: useStyles,
        redirect: false
    }

    // const classes = useStyles();
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            axios.post('http://localhost:8080/login', {
                username: this.state.username,
                password: this.state.password
            })
                .then( (response) => {
                    console.log(response);
                    user = response.data;
                    // console.log(user);
                    console.log(this.state.redirect)
                    this.setState({ redirect: true });

                })
                .catch((error)  => {
                    console.log(error);
                });

        }

    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
        // console.log(this.state)

    }
    render() {
        const { redirect } = this.state;
        // console.log(redirect)
        if (redirect) {
            return  <Redirect to='/' />;
        }else {  
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={this.state.classes.paper}>
                    <Avatar className={this.state.classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
              </Typography>
                    <form className={this.state.classes.form} onSubmit={this.handleSubmit} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="user_name"
                            label="user name"
                            name="username"
                            autoComplete="user_name"
                            autoFocus
                            onChange={this.myChangeHandler}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={this.myChangeHandler}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={this.state.classes.submit}

                        >
                            Sign In
                </Button>
                        <Grid container>

                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        );
    }
    }
}

export default SignIn;

