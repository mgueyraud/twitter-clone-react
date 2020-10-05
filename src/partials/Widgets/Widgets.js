import React from "react";
import "./Widgets.css";
import {
    TwitterTweetEmbed,
    TwitterTimelineEmbed,
    TwitterShareButton
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening?</h2>
                <TwitterTweetEmbed tweetId={"1261482923783532546"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="elonmusk"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"http://mariogyd.com"}
                    options={{ text: "#react is awesome", via: "mgueyraud" }}
                />
            </div>
        </div>
    );
}

export default Widgets;