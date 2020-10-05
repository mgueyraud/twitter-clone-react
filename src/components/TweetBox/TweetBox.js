import React, { useState, useEffect } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import db from "../../firebase";

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Mario Gueyraud",
            userName: "mgueyraud",
            verified: true,
            description: tweetMessage,
            image: tweetImage,
            avatar: "https://picsum.photos/300/300"
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form onSubmit={sendTweet}>
                <div className="tweetBox__input">
                    <Avatar src="https://picsum.photos/300/300"></Avatar>
                    <input value={tweetMessage} onChange={(e) => setTweetMessage(e.target.value)} placeholder="What's happening?" type="text"></input>
                </div>
                <input value={tweetImage} onChange={(e) => setTweetImage(e.target.value)} className="tweetBox__inputImage" placeholder="Optional: Enter image url" type="text"></input>
                <Button type="submit" className="tweetBox__cta">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;