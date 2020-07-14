import * as React from 'react';
import {withRouter} from 'react-router-dom';
class Navbar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            search:""
        }
    }


    clickHandler(){
        let url = "/books/"
        url = url.concat(this.state.search)
        console.log(url)
        this.props.history.push(url)
        window.location.reload(false);
    }

    changeField = (e) => {
        this.setState({ search: e.target.value})
        console.log(this.state.search)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Library Books</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/Create">Add Book</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.changeField} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={()=>this.clickHandler()}>Search</button>
                    </form>
                </div>
            </nav>
        )

    }

}
export default withRouter(Navbar);