import useSWR from 'swr';

export default function Pathfinder() {
    const { data, error } = useSWR('https://extreme-ip-lookup.com/json/?key=RXKtJnU6YOoB47iUxmgn', fetcher);
    if (error) return <div className='Pathfinder_error'>Error, there was a problem in the request 🙁</div>;
    if (!data) return <div className='Pathfinder_loading'>Loading...</div>;

    return (
        <div className='PathfinderContainer'>
            {Object.keys(data).map((info) => (
                <div className='PathfinderContainer_text'>
                    <p className='PathfinderContainer_text_p'>
                        <b>{info}: </b>
                        {data[info]}
                    </p>
                </div>
            ))}
        </div>
    );
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}