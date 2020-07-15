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
import { StepContent } from "@material-ui/core";
import { withRouter } from 'react-router-dom';

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
            text: "Like",
            content: "",
            end: "",
        }
    }

    addToLocalStorage() {
        const booksInStorage = localStorage.getItem("Books");
        let currentArray = [];
        if (booksInStorage) {
          currentArray = JSON.parse(booksInStorage);
          currentArray.unshift(this.props.info._id);
          currentArray = Array.from(new Set(currentArray));
          localStorage.setItem("Books", JSON.stringify(currentArray));
        } else {
          currentArray = [];
          currentArray.unshift(this.props.info._id);
          localStorage.setItem("Books", JSON.stringify(currentArray));
        }
      }

      indexContainingID(currentArray,id) {
        for (let i = 0; i < currentArray.length; i++) {
          if (JSON.stringify(currentArray[i]).includes(id)) {
            return i;
          }
        }
        return -1;
      }
    


      removeFromLocalStorage() {
        const booksInStorage = localStorage.getItem("Books");
        let currentArray = [];
        if (booksInStorage) {
          currentArray = JSON.parse(booksInStorage);
          const index = this.indexContainingID(currentArray, this.props.info._id);
          if (index > -1) {
            currentArray.splice(index, 1);
          }
        }
        localStorage.removeItem("Books");
        localStorage.setItem("Books", JSON.stringify(currentArray));
      }





    onClickPicture() {
        console.log("picture clicked")
    }

    swapText = () => {
        if (this.state.text == "Like") {
            this.setState({ text: "Unlike" })
        }
        else {
            this.setState({ text: "Like" })
            this.removeFromLocalStorage()
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


    async getUpdatedLikeValue() {
        let like;
        let endpoint = "/api/"
        const search = this.props.info.title
        endpoint = endpoint.concat(search);

        await Axios.get(endpoint)
            .then(res => {
                like = res.data.likes
                this.setState({likes:like})
            })
    }


     onClickLike = async (title) => {

        await this.getUpdatedLikeValue()

        let like = this.state.likes
        console.log(like)
        let likeValue

        if (this.state.text == "Like") {
            this.addToLocalStorage()
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

    truncate(str, number) {
        return str.split(" ").splice(0, number).join(" ")
    }

    setContent() {

        let sumarizedContent = this.props.info.content

        sumarizedContent = this.truncate(sumarizedContent, 200)
        sumarizedContent = sumarizedContent.concat("...")
        this.setState({ end: "Continue reading" })

        this.setState({ content: sumarizedContent })
    }

    continue() {
        let url = "/books/"
        url = url.concat(this.props.info.title)
        console.log(url)
        this.props.history.push(url)
        window.location.reload(false);
    }

    checkIfLiked(){
        const booksInStorage = localStorage.getItem("Books");
        let currentArray = [];
        if (booksInStorage) {
          currentArray = JSON.parse(booksInStorage);
          const index = this.indexContainingID(currentArray, this.props.info._id);
          if (index >= 0) {
            this.setState({text:"Unlike"})
          }
        }
    }

    componentDidMount() {

        this.checkIfLiked()

        if (this.props.shorten) {
            this.setContent()
        } else {
            this.setState({ content: this.props.info.content })
        }

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
                                            <Typography variant="body2" style={{ cursor: "pointer" }} onClick={(e) => this.onClickLike(this.props.info.title)}>
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
                                    {this.state.content}
                                    <div className="continue">
                                        <Typography variant="body2" style={{ cursor: "pointer" }} onClick={() => this.continue()}>
                                            {this.state.end}
                                        </Typography>
                                    </div>
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
                            <Button color="primary">
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
export default withRouter((withStyles(styles)(Row)))
