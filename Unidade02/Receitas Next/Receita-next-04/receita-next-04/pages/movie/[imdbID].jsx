import { useRouter } from 'next/router';

export default function Movies({ data }) {
  return (
    <div>
      <div className='MovieContainer'>
        <img src={data.Poster}></img>
        <br />
        <h2 className='MovieContainer_h2__Title'>Name: {data.Title}</h2>
        <h2 className='MovieContainer_h2__Year'>Release Date: {data.Year}</h2>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { imdbID } = context.query;
  const res = await fetch(`http://www.omdbapi.com/?apikey=57d69c78&i=${imdbID}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}