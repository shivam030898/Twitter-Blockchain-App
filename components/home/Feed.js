import React, { useContext } from "react";
import { BsStars } from "react-icons/bs";
import { TwitterContext } from "../../context/TwitterContext";
import Post from "../Post";
import TweetBox from "./TweetBox";

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font bold`,
};

const Feed = () => {
  const { tweets } = useContext(TwitterContext);
  return (
    <div className={`${style.wrapper}`}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => {
        return (
          <Post
            key={index}
            displayName={
              tweet.author.name === "Unnamed"
                ? `${tweet.author.walletAddress.slice(
                    0,
                    4
                  )}...${tweet.author.walletAddress.slice(41)}`
                : tweet.author.name
            }
            userName={`${tweet.author.walletAddress.slice(
              0,
              4
            )}...${tweet.author.walletAddress.slice(41)}`}
            text={tweet.tweet}
            avatar={tweet.author.profileImage}
            isProfileImageNft={tweet.author.isProfileImageNft}
            timestamp={tweet.timestamp}
          />
        );
      })}
    </div>
  );
};

export default Feed;
