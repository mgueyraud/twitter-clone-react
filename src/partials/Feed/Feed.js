import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "../../components/TweetBox/TweetBox";
import Post from "../../components/Post/Post";

import db from "../../firebase";
import FlipMove from 'react-flip-move';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => setPosts(snapshot.docs.map(doc => doc.data())));
    }, []);

    return (
        <div className="feed">

            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* Tweet Box */}
            <TweetBox />

            {/* Post */}
            <FlipMove>
                {posts.map(post => <Post
                    key={post.text}
                    {...post}
                />)}
            </FlipMove>

        </div>
    );
}

export default Feed;