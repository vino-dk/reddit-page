import React from 'react';
import Story from './Story';

const StoryList = ({stories}) => {
    return(
        <ul>
            {stories.map(story =>
                <div key={story.data.id}>
                    <Story 
                        story={story.data} // .data to access the story content of the part. child, respectively.
                    />
                </div>
                )}
        </ul>
    )
}

export default StoryList