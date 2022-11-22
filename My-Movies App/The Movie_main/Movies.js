import React, { Component, useState } from 'react';
// import PropTypes from 'prop-types';
import '../css/Movies.css';

const GENERIC_MOVIE_TITLE = "Title";
const GENERIC_MOVIE_BODY = "This space is for a paragraph size Description of the movie that will take up to 95% of the width of the card and will display as justified text.";
const GENERIC_MOVIE_GENRE = "SciFi";
const GENERIC_MOVIE_YEAR = "2000";

class Movie extends Component {
    constructor(props) {
        super(props);
        this.titleContent = React.createRef();
        this.descriptionContent = React.createRef();
        this.genreContent = React.createRef();
        this.yearContent = React.createRef();
        this.state = {
            title: GENERIC_MOVIE_TITLE,
            description: GENERIC_MOVIE_BODY,
            genre: GENERIC_MOVIE_GENRE,
            year: GENERIC_MOVIE_YEAR,
            watched: false,
            editMode: false
        }
    }

    handleEdit() {
        this.setState({
            editMode: true
        });
    }

    handleSave() {
        this.setState({
            title: this.titleContent.current.value,
            description: this.descriptionContent.current.value,
            genre: this.genreContent.current.value,
            year: this.yearContent.current.value,
            editMode: false
        });
    }

    handleDelete() {
        this.props.deleteHandler(this.props.id);
    }

    handleWatched = () => {
        // const [watched, setWatched] = useState("false");
        let tf = !this.state.watched;
        this.setState({
            watched: tf
        });
    };

    render() {
        let titleElement, descriptionElement, genreElement, yearElement, buttonArea;
        if (this.state.editMode) {
            titleElement = <textarea ref={this.titleContent} className="title-textarea" defaultValue={this.state.title}></textarea>;
            descriptionElement = <textarea id="desc" ref={this.descriptionContent} className="description-textarea" defaultValue={this.state.description}></textarea>;
            genreElement = <textarea ref={this.genreContent} className="genre-textarea" defaultValue={this.state.genre}></textarea>;
            yearElement = <textarea maxLength={4} ref={this.yearContent} className="year-textarea" defaultValue={this.state.year}></textarea>;
            buttonArea = <div className="center"><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button></div>;
        } else {
            titleElement = <h5 className={this.state.watched ? 'title-textarea watched' : 'title-textarea'}>{this.state.title}</h5>;
            descriptionElement = <p className="box">{this.state.description}</p>;
            genreElement = <span>{this.state.genre}</span>;
            yearElement = <span>{this.state.year}</span>;
            buttonArea =
                <div className="center">
                    <button className="btn btn-info" onClick={this.handleEdit.bind(this)}>Edit</button>
                    <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button>
                </div>;
        }

        return (
            <div className="col-sm-6">
                <div className="card card-view">
                    <div className="card-body" id='card'>
                        {titleElement}
                        {descriptionElement}
                        <table>
                            <tbody>
                                <tr>
                                    <th style={{width: "75%"}}>Genre</th>
                                    <th style={{width: "15%"}}>Year</th>
                                    <th style={{width: "10%"}}>Viewed</th>
                                </tr>
                                <tr >
                                    <td>{genreElement}</td>
                                    <td>{yearElement}</td>
                                    <td className={this.state.watched ? 'checkBox watched' : 'checkBox'} onClick={this.handleWatched.bind(this)}> </td>
                                </tr>
                            </tbody>
                        </table>
                        {buttonArea}
                    </div>
                </div>
            </div>
        );
    }
}

// Movie.propTypes = {
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     year: PropTypes.string.isRequired,
//     genre: PropTypes.string
// };

export default Movie;