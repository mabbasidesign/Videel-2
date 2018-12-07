import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Pagination from '../common/pagination';
import Like from '../common/like';

class Movies extends Component {
    state = { 
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
     }

     handleDelete = (movie) => {
        const mm = this.state.movies.filter(m => m._id !== movie._id)
        this.setState( {movies: mm} )
     }

     handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({ movies })
     }

     handlePageChange = (page) => {
        this.setState({ currentPage: page })
     }
     

    render() {

        const { length: count } = this.state.movies;
        const { pageSize, currentPage } = this.state;

        if(count === 0 )
        return <div className="alert alert-danger" ><p>There are no movies in database.</p></div>

        return (
            <React.Fragment>
            <div className="alert alert-success">showing {count} movies in the databse </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                    
                </thead>
                <tbody>
                    {this.state.movies.map(m => 
                    <tr key={m._id}>
                        <td> {m.title} </td>
                        <td> {m.genre.name} </td>
                        <td> {m.numberInStock} </td>
                        <td> {m.dailyRentalRate} </td>
                        <td><Like liked={m.liked} onClick={ () => this.handleLike(m) } /></td>
                        <td>
                            <button
                            onClick={() => this.handleDelete(m)}
                            className="btn btn-danger btn-sm">
                            Delete </button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
            />

            </React.Fragment>
         );
    }
}
 
export default Movies;