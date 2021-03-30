import React from 'react'
import Tweet from './Tweet'
export default function Timeline(props) {
  //propsからTweetのリストを作る
  
  //props内のtweetsをコピーしたものをstate変数とする
  const [tweetsCopy, setTweetsCopy] = React.useState(JSON.parse(JSON.stringify(props.tweets)));
  
  const tweetList = tweetsCopy.map((tw) => {
  
    var funcUp = function (idx) {
      if (idx === 0) {
        return;
      }
      var copy2 = JSON.parse(JSON.stringify(tweetsCopy));
      var oldIdx = copy2[idx].idx;
      copy2[idx].idx = oldIdx - 1;
      copy2[idx-1].idx = oldIdx;
      copy2.sort(function(a, b) {
        return a.idx - b.idx; //昇順
      });
      setTweetsCopy(copy2);
    };
    
    var funcDown = function (idx) {
      if (idx === tweetsCopy.length - 1) {
        return;
      }
      var copy2 = JSON.parse(JSON.stringify(tweetsCopy));
      var oldIdx = copy2[idx].idx;
      copy2[idx].idx = oldIdx + 1;
      copy2[idx+1].idx = oldIdx;
      copy2.sort(function(a, b) {
        return a.idx - b.idx; //昇順
      });
      setTweetsCopy(copy2);
      
    };
    
    var funcEdit = function (idx, content) {
      var copy2 = JSON.parse(JSON.stringify(tweetsCopy));
      copy2[idx].content = content;
      setTweetsCopy(copy2);
    }

    if (tw.display !== 'none') {
      return (
        <Tweet
          key={tw.idx}
          idx={tw.idx}
          icon={tw.icon}
          displayName={tw.displayName}
          accountName={tw.accountName}
          content={tw.content}
          funcUp={funcUp}
          funcDown={funcDown}
          funcEdit={funcEdit}
        />
      );
    }
    return null;
  });
  
  return <div className="timeline">{tweetList}</div>;
}