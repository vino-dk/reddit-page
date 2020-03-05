# News stories from Reddit

## Features (as inspiration from Pure React)
* Display the number of votes
* Functioning Upvote and Down vote controls
* Display the number of comments
* Sort the stories by number of upvotes
* The title should be a real link
* Other links do not need to be functional(share,save,hide,etc.)

## Component structure 

* App (contains state, AJAX, and is parent to the other components)
    * Maybe: Navbar (Sort in StoryList !! )
    * StoryList (Renders the list of stories based on points - usually happens renderside.)
        * Story (Will include StoryTitle, TitleLink)
            * StoryTimestamp (based on data from API, Moment package to display x hours ago)
            * StoryAmountComments (props)
            * StoryPoints (stateful, controlled from the parent)
            * StoryThumbnail 

## Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
