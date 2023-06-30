import React, { useEffect, useState } from 'react'
import RedditInstance from '../Utils/RedditInstance'
import Card from './Card'
function Content() {
    const [data, setData] = useState([])
    const [fetch, setFetch] = useState(false)
    useEffect(() => {
        RedditInstance().then(res => setData(res?.data?.data?.children)).catch(err => console.log(err.message))
    }, [fetch])

    return (
        <div>
            <button onClick={() => setFetch(prevState => !prevState)}>Get Updated data</button>
            {data.map(child => <Card items={child.data} />)}
        </div>
    )
}

export default Content
