import Link from 'next/link';

const Home = () => {
  return (
    <div className='HomeContainer'>
      <h1 className='HomeContainer_h1'>Welcome my friend🫠</h1>
      <ul className='HomeContainer_ul'>
        <li className='HomeContainer_ul_li'><Link class='HomeContainer_ul_li_a' href="/movies">Movies</Link></li>
        <li className='HomeContainer_ul_li'><Link class='HomeContainer_ul_li_a' href="/pathfinder">Pathfinder 1</Link></li>
        <li className='HomeContainer_ul_li'><Link class='HomeContainer_ul_li_a' href="/pathfinder2">Pathfinder 2</Link></li>
      </ul>
    </div>
  );
};

export default Home;