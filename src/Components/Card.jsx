import React from 'react'

function Card({ items }) {
    return (
        <div className='card'>
            <p><b>Title : </b>{items.title}</p>
            <p><b>Selftext_Html : </b>{items.selftext_html}</p>
            <p><b>URL : </b> {items.url}</p>
            <p><b>Score : </b>{items.score}</p>
        </div>
    )
}

export default Card
