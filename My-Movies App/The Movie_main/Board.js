import React, { Component } from 'react';
import Movie from "./Movies";
import '../css/Board.css';

class Board extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  addMovie() {
    this.state.movies.push(
      {
        id: Date.now()
      }
    );
    this.setState(
      {
        movies: this.state.movies
      }
    );
  }

  deleteMovie(id) {
    let newMovieArr = this.state.movies;
    newMovieArr.map((movie, index) => {
      if (id === movie.id) {
        newMovieArr.splice(index, 1);
      }
      return "";
    });
    this.setState(
      {
        movies: newMovieArr
      }
    );
  }

  render() {
    return (
      <div>
        <div className='header fixed-top'>
          <h1 className="center">Movies</h1>
        </div>
        <div className="div-board">
          <div className="row">
            {
              this.state.movies.map(movie => {
                return <Movie key={movie.id} id={movie.id} deleteHandler={this.deleteMovie.bind(this)} />
              })
            }
          </div>
        </div>
        <div className='center bottom'>
          <button className="btn btn-success add-button" onClick={this.addMovie.bind(this)}>Add</button>
        </div>
      </div>
    );
  }
}

export default Board;