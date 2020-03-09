import React from 'react'

// Describes content for a story card. Title, Link, Timestamp, 
// ...amount of comments, Storypoints (state controlled), Storythumbnail.

const Story = (props) => {
    return (
        <div className="story">
            <div className="left-part">
                <div>{props.score}</div>
            </div>
            <div className="right-part">
                <h1>{props.title}</h1>
                <div>{props.url}</div>
                    
            </div>



        </div>
    )
}

export default Story;