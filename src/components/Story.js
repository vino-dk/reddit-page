import React from 'react';
import '../components/Story.css';
import moment from 'moment';

// Describes content for a story card. Title, Link, Timestamp, 
// ...amount of comments, Storypoints (state controlled), Storythumbnail.

const FutureFeatures = () => {
    return <div>share save hide report pocket</div>
}

const Story = ({story}) => {
    let no_comment = false;
    if (story.num_comments > 0) {
        no_comment = true;
    }
    else {
        no_comment = false;
    }

    return (
        <div className="story-container">
            <div className="left-part">
                <div className="story-score" >{story.score}</div>
                <img className="thumbnail" src={story.thumbnail} alt={story.thumbnail} />
            </div>
            <div className="right-part">
                <h1>{story.title}</h1>
                <div className="story-url">{story.url}</div>
                <div>Submitted {moment.unix(story.created).format('LLL')} by {story.author}</div>
                <div>
                    {no_comment
                    ? <div>{story.num_comments} comments <FutureFeatures/></div>
                    : <div>comment <FutureFeatures/></div>}
                </div>
            </div>
        </div>
    )
}

export default Story;