const Movies = ({data, movie}) => {
    return (
        <div>
            <form>
                <a href="http://localhost:3000/">Go to Home</a>
                <br/>
                <br/>
                <input type="text" name="movie" placeholder="Search for a movie" defaultValue={movie}/>
                <input type="submit" value="Search" />
                <br/>
                <br/>
            </form>

            <div>
                {!data ?
                    (<div>Movie not found</div>)
                    :
                    (data.Search.map(({ imdbID, Year, Title, Poster, Type }) => (
                        <div key={imdbID}>
                            {Title} | {Year} | {Type}
                            <br/>
                            <img width='100' alt={Title} src={Poster} />
                        </div>
                    )))
                }
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const {movie} = context.query;
    const res = await fetch(`http://www.omdbapi.com/?apikey=57d69c78&s=${movie}`);
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
}

export default Movies;
