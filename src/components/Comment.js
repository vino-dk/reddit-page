import React from 'react';

const Comments = () => {
    return(
        <div>More comments</div>
    )
}

const NoComment = () => {
    return(
        <div>No comments</div>
    )
}

const NumComment = ({num_comments}) => {
    if(num_comments > 0){
        return <Comments />;
    } else if(num_comments <= 0){
        return <NoComment />;
    }
}

const Comment = () => {
    return(
        <NumComment />
    );
}

export default Comment;