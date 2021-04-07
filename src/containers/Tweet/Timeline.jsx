import React from 'react'
import Tweet from './Tweet'
export default function Timeline(props) {
  //propsからTweetのリストを作る
  const tweetList = props.tweets.map((tw) => {  
    if (tw.display !== 'none') {
      return (
        <Tweet
          key={tw.idx}
          idx={tw.idx}
          level={tw.level}
          icon={tw.icon}
          displayName={tw.displayName}
          accountName={tw.accountName}
          content={tw.content}
          funcUp={props.funcUp}
          funcDown={props.funcDown}
          funcEdit={props.funcEdit}
        />
      );
    }
    return null;
  });
  
  return <div className="timeline">{tweetList}</div>;
}