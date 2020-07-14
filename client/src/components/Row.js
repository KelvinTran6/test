import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import AccordionActions from '@material-ui/core/AccordionActions';
import './Row.css'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Axios from "axios";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(5),
        margin: "auto",
    },
    image: {
        width: 128,
        height: 128
    },
    img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%"
    },
    details: {
        alignItems: 'center',
    },
});



class Row extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            likes: this.props.info.likes,
            text: "Like"
        }
    }

    onClickPicture() {
        console.log("picture clicked")
    }

    swapText = () => {
        if (this.state.text == "Like") {
            this.setState({ text: "unlike" })
        }
        else {
            this.setState({ text: "Like" })
        }
    }

    onClickDelete(title) {
        console.log("deleting")

        let endpoint = "/api/book/"
        endpoint = endpoint.concat(title)

        Axios.delete(endpoint)
            .then(() => {
                this.setState({ state: this.state });
                console.log("deleted")
            })

            window.location.reload(false);
    }



    onClickLike = (title, like) => {
        let likeValue

        if (this.state.text == "Like") {
            likeValue = like + 1
        }
        else {
            likeValue = like - 1
        }

        this.swapText()


        let endpoint = "/api/update/"
        endpoint = endpoint.concat(title)

        const data = {
            likes: likeValue
        }


        Axios.put(endpoint, data)
            .then(res => console.log(res.data));

        this.setState({ likes: likeValue })
    }

    componentDidMount(){
        console.log("mounted")
        this.setState({likes:this.props.info.likes})
    }


    render() {
        let close = () => this.setState({ show: false })
        const { classes } = this.props;
        return (
            <div className="page">
                <Accordion className="accordion">
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className={classes.root}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img
                                            className={classes.img}
                                            alt="complex"
                                            src={this.props.info.url}
                                        />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                {this.props.info.title}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                {this.props.info.description}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: "pointer" }} onClick={(e) => this.onClickLike(this.props.info.title, this.props.info.likes)}>
                                                {/* {this.state.text} */}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">{this.state.likes} likes</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </AccordionSummary>
                    <div className="wide">
                        <AccordionDetails className={classes.details}>
                            <div className="dropDown">
                                <Typography>
                                    {this.props.info.content}
                                </Typography>
                            </div>
                        </AccordionDetails>
                        <Divider />
                        <AccordionActions>
                            <Button size="small" color="secondary">
                                <Typography variant="body2" style={{ cursor: "pointer" }} onClick={() => this.onClickDelete(this.props.info.title)}>
                                    Delete
                                </Typography>
                                </Button>
                                <Button color ="primary">
                                <Typography variant="body2" style={{ cursor: "pointer" }} onClick={() => this.onClickLike(this.props.info.title, this.state.likes)}>
                                    {this.state.text}
                                </Typography>
                            </Button>
                        </AccordionActions>
                    </div>
                </Accordion>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Row);



// import React from "react";
// import {Typography} from "@material-ui/core";
// import {ButtonBase} from "@material-ui/core";


// class Row extends React.Component{
//   render() {
//     return (
//       <Typography>
//           {this.props.info.title}
//       </Typography>
//     );
//   }
// }
// export default Row;