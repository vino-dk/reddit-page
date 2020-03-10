import React from 'react';
import '../components/Story.css';
import moment from 'moment';

// Describes content for a story card. Title, Link, Timestamp, 
// ...amount of comments, Storypoints (state controlled), Storythumbnail.

const FutureFeatures = () => {
    return <div>share save hide report pocket</div>
}

const Story = (props) => {
    let no_comment = false;
    if (props.num_comments > 0) {
        no_comment = true;
    }
    else {
        no_comment = false;
    }

    return (
        <div className="story-container">
            <div className="left-part">
                <div className="story-score" >{props.score}</div>
                <img className="thumbnail" src={props.thumbnail} alt={props.thumbnail} />
            </div>
            <div className="right-part">
                <h1>{props.title}</h1>
                <div>{props.url}</div>
                <div>Submitted {moment.unix(props.created).format('LLL')} by {props.author}</div>
                <div>
                    {no_comment
                    ? <div>{props.num_comments} comments <FutureFeatures/></div>
                    : <div>comment <FutureFeatures/></div>}
                </div>
            </div>
        </div>
    )
}

export default Story;