import React from "react";
import Axios from "axios";
import Row from './Row'
import Typography from '@material-ui/core/Typography';
import ErrorMessage from './ErrorMessage'
import WaitingMessage from './WaitingMessage'
import './FullView.css'
import { Link, browserHistory } from "react-router-dom";

class FullView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: "",
            found: 1,
            book: [],
        }
    }

    setPage() {
        let currentComponent = this
        let endpoint = "/api/"
        const search = this.props.match.params.title
        endpoint = endpoint.concat(search);

        Axios.get(endpoint)
            .then(res => {
                console.log(res.data)


                this.setState({ data: res.data })
                let foundBook = []
                const currentBook = <Row info={res.data} />
                foundBook.push(currentBook)
                this.setState({ book: foundBook })

                if (res.data != null) {
                    this.setState({ found: 2 })
                }
            })
            .catch(function (err) {
                currentComponent.setState({ found: 3 })
            });
    }


    componentDidMount() {
        this.setPage()
    }





    render() {
        console.log(this.props.match.params.title)
        if (this.state.found == 2) {
            return (
                <div>
                    {this.state.book}
                </div>
            )
        } else if (this.state.found == 1) {
            return (
                <WaitingMessage/>
            )

        } else {
            return (
                <Typography component="h1" variant="h4">
                    <ErrorMessage />
                </Typography>

            )

        }

    }
}


export default FullView