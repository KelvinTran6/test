// import React from "react";
// import { withStyles } from "@material-ui/core/styles";
// import {Grid} from "@material-ui/core";
// import {Paper} from "@material-ui/core";
// import {Typography} from "@material-ui/core";
// import {ButtonBase} from "@material-ui/core";

// import './Row.css'
// import Axios from "axios";

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(5),
//     margin: "auto",
//   },
//   image: {
//     width: 128,
//     height: 128
//   },
//   img: {
//     margin: "auto",
//     display: "block",
//     maxWidth: "100%",
//     maxHeight: "100%"
//   },
// });



// class Row extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       title: "",
//       likes: this.props.info.likes,
//       text: "Like"
//     }
//   }

//   onClickPicture() {
//     console.log("picture clicked")
//   }

//   swapText = () => {
//     if (this.state.text == "Like") {
//       this.setState({ text: "unlike" })
//     }
//     else {
//       this.setState({ text: "Like" })
//     }
//   }

//   onClickLike = (title, like) => {
//     let likeValue

//     if (this.state.text == "Like") {
//       likeValue = like + 1
//     }
//     else {
//       likeValue = like - 1
//     }

//     this.swapText()


//     let endpoint = "http://localhost:5000/books/update/"
//     endpoint = endpoint.concat(title)

//     const data = {
//       likes: likeValue
//     }


//     Axios.put(endpoint, data)
//       .then(res => console.log(res.data));

//     this.setState({ likes: likeValue })
//   }



//   render() {
//     let close = () => this.setState({ show: false })
//     const { classes } = this.props;
//     return (
//       <div >
//         <Typography variant="body2" style={{ cursor: "pointer" }} onClick={() => this.onClickLike(this.props.info.title, this.state.likes)}>
//           {this.state.text}
//         </Typography>
//             aria-controls="panel1a-content"
//             id="panel1a-header"
//           >
//             <div className={classes.root}>
//               <Paper className={classes.paper}>
//                 <Grid container spacing={2}>
//                   <Grid item>
//                     <ButtonBase className={classes.image}>
//                       <img
//                         className={classes.img}
//                         alt="complex"
//                         src={this.props.info.url}
//                         onClick={this.onClickPicture}
//                       />
//                     </ButtonBase>
//                   </Grid>
//                   <Grid item xs={12} sm container>
//                     <Grid item xs container direction="column" spacing={2}>
//                       <Grid item xs>
//                         <Typography gutterBottom variant="subtitle1">
//                           {this.props.info.title}
//                         </Typography>
//                         <Typography variant="body2" gutterBottom>
//                           {this.props.info.description}
//                         </Typography>
//                       </Grid>
//                       <Grid item>
//                         <Typography variant="body2" style={{ cursor: "pointer" }} onClick={(e) => this.onClickLike(this.props.info.title, this.props.info.likes)}>
//                           {/* {this.state.text} */}
//                         </Typography>
//                       </Grid>
//                     </Grid>
//                     <Grid item>
//                       <Typography variant="subtitle1">{this.state.likes} likes</Typography>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Paper>
//             </div>
//       </div>
//     );
//   }
// }

// export default withStyles(styles, { withTheme: true })(Row);



import React from "react";

class Row extends React.Component {

    render() {
        return (
            <div>
                testing
            </div>
        );
    }

}

export default Row;