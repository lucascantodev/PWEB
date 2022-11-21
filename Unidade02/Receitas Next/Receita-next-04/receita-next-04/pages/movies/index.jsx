import useSWR from 'swr';
import Link from 'next/link';

const Movies = () => {
    const { data, error } = useSWR(`http://www.omdbapi.com/?apikey=57d69c78&s=Indiana Jones`, fetcher);
    if (error) return <div>Error, there was a problem in the request 🙁</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div className='MoviesContainer'>
            <h1>Here's what i got for Indiana Jones 🤠</h1>
            <ul className='MoviesContainer_ul'>
                {data.Search.map((m) => (
                    <li className='MoviesContainer_ul_li' key={m.imdbID}>
                        <Link className='MoviesContainer_ul_li_a' href={`/movie/${m.imdbID}`}>{m.Title}{' '}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

export default Movies;