import React from "react";
import Post from "../Post";
import { useContext } from "react";
import { TwitterContext } from "../../context/TwitterContext";

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const ProfileTweets = () => {
  const { currentAccount, currentUser, tweets } = useContext(TwitterContext);
  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            tweet.author.name === "Unnamed"
              ? `${author.walletAddress.slice(
                  0,
                  4
                )}...${author.walletAddress.slice(41)}`
              : tweet.author.name
          }
          userName={`${currentAccount.slice(0, 4)}.....${currentAccount.slice(
            -4
          )}`}
          text={tweet.tweet}
          avatar={currentUser.profileImage}
          isProfileImageNft={tweet.isProfileImageNFT}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  );
};

export default ProfileTweets;
