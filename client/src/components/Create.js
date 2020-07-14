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
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from "axios";

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

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: "100%",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Create extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            url: "",
            description: "",
            content: "",
        }
    }

    changeTitle = (e) => {
        this.setState({ title: e.target.value })
        console.log(this.state.title)
    }
    changeURL = (e) => {
        this.setState({ url: e.target.value })
        console.log(this.state.url)
    }

    changeDescription = (e) => {
        this.setState({ description: e.target.value })
        console.log(this.state.description)
    }

    changeContent = (e) => {
        this.setState({ content: e.target.value })
        console.log(this.state.content)
    }

    submit() {
        console.log("submitting")
        const data = {
            title: this.state.title,
            content: this.state.content,
            url: this.state.url,
            description: this.state.description
        }
        console.log("hello")
        Axios.post('/api/add', data)
            .then(function (data) {
                alert("book added!")
                window.location.reload(false);
            })
            .catch(function (err) {
                
                alert("there appears to be and error, perhaps the book title has already been taken")
            });
    }



    render() {
        const { classes } = this.props;
        return (
            <div className="page">
                <Container component="main">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Enter the book information below
            </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="Booktitle"
                                        variant="outlined"
                                        fullWidth
                                        id="BookTitle"
                                        label="Book Title"
                                        autoFocus
                                        value={this.state.value}
                                        onChange={this.changeTitle}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="url"
                                        label="Book image url"
                                        name="url"
                                        value={this.state.value}
                                        onChange={this.changeURL}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="description"
                                        label="Description"
                                        name="description"
                                        multiline
                                        rowsMax={3}
                                        rows={3}
                                        value={this.state.value}
                                        onChange={this.changeDescription}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        name="Content"
                                        label="Content"
                                        type="Content"
                                        id="Content"
                                        multiline
                                        rowsMax={14}
                                        rows={14}
                                        value={this.state.value}
                                        onChange={this.changeContent}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                fullWidth
                                color="primary"
                                className={classes.submit}
                                onClick={() => this.submit()}
                            >
                                Submit
              </Button>
                        </form>
                    </div>
                </Container>

            </div>

        )
    }
}
export default withStyles(styles, { withTheme: true })(Create);