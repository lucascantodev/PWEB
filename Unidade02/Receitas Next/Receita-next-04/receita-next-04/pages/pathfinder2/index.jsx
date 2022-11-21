export default function Movies({ data }) {
  return (
    <div className='Pathfinder2Container'>
      {Object.keys(data).map((info) => (
        <div className='Pathfinder2Container_text'>
          <p className='Pathfinder2Container_text_p'>
            <b>{info}: </b>
            {data[info]}
          </p>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://extreme-ip-lookup.com/json/?key=kCbsFJdk16GRNvqx4Alz`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}