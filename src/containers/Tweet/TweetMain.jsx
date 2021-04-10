import React from 'react'
import TweetInput from './TweetInput'
import Timeline from './Timeline'
export default function TweetMain(props) {
  //tweetsという変数名でState変数を定義します。
  //その変数の内容を書き換える関数はsetTweetsです。
  //tweets変数の初期値を配列で2件セットします。
  const [tweets, setTweets] = React.useState([
    {
      idx: 0,
      level: 0,
      regTime: "2021/04/01",
      updTime: "2021/04/05",
      content: "今日も1日もろこしがうまいb",
      display: 'block'
    },
    {
      idx: 1,
      level: 0,
      regTime: "2021/04/01",
      updTime: "",
      content: "かみにそたべい_0",
      display: 'block'
    },
    {
      idx: 1,
      level: 1,
      regTime: "2021/04/01",
      updTime: "2021/04/03",
      content: "かみにそたべい_1",
      display: 'block'
    },
    {
      idx: 2,
      level: 0,
      regTime: "2021/04/01",
      updTime: "",
      content: "cccc_0",
      display: 'block'
    },
    {
      idx: 2,
      level: 1,
      regTime: "2021/04/01",
      updTime: "",
      content: "cccc_1",
      display: 'block'
    },
  ]);

  var funcSort = function(a, b) {
    if (a.idx === b.idx) {
      return a.level - b.level; //昇順
    } else {
      return a.idx - b.idx; //昇順
    }
  };

  var funcUp = function(currIdx) {
    if (currIdx === 0) {
      return;
    }

    if (tweets[currIdx].level === 0) {
      tweets[currIdx].idx = currIdx - 1;
      //自行(=ボタンを押下した行)の上にある塊(子がなければ１行のみだが。。)に、
      //自行のidxを付ける
      var prevIdx = currIdx - 1;
      while (tweets[prevIdx] !== undefined && tweets[prevIdx].idx === currIdx - 1) {
        tweets[prevIdx].idx = currIdx;
        prevIdx = prevIdx - 1;
      }
      //自行(=ボタンを押下した行)と、その子要素のidxを１減算
      var tempIdx = currIdx;
      while (tweets[tempIdx] !== undefined && tweets[tempIdx].idx === currIdx) {
        tweets[tempIdx].idx = currIdx - 1;
        tempIdx = tempIdx + 1;
      }
    } else {
      var oldLevel = tweets[currIdx].level;
      if (oldLevel === 0) {
        return;
      }
      tweets[currIdx].level = oldLevel - 1;
      tweets[currIdx - 1].level = oldLevel;
    }
    tweets.sort(funcSort);
    setTweets((prev) => [...prev]);
  };

  var funcDown = function(currIdx) {
    if (currIdx === tweets.length - 1) {
      return;
    }
    if (tweets[currIdx].level === 0) {
      //自行(=ボタンを押下した行)の下にある塊(子がなければ１行のみだが。。)に、
      //自行のidxを付ける
      var nextIdx = currIdx + 1;
      while (tweets[nextIdx] !== undefined && tweets[nextIdx].idx === currIdx + 1) {
        tweets[nextIdx].idx = currIdx;
        nextIdx = nextIdx + 1;
      }
      //自行(=ボタンを押下した行)と、その子要素のidxを１加算
      var tempIdx = currIdx;
      while (tweets[tempIdx] !== undefined && tweets[tempIdx].idx === currIdx) {
        tweets[tempIdx].idx = currIdx + 1;
        tempIdx = tempIdx + 1;
      }
    } else {
      if (tweets[currIdx + 1].idx === currIdx) {
        var oldLevel = tweets[currIdx].level;
        tweets[currIdx].level = oldLevel + 1;
        tweets[currIdx + 1].level = oldLevel;
      } else {
        return;
      }
    }
    tweets.sort(funcSort)
    setTweets((prev) => [...prev]);
  };

  var funcEdit = function(idx, content) {
    tweets[idx].content = content;
    setTweets((prev) => [...prev]);
  }

  //TweetInputコンポーネントに渡すcallback関数を定義します。
  //このcallbackはTweetボタン押下時に動きます。  
  //addTweetという変数にこのcallback関数をセットします。
  //callback関数はtweetという引数を受け取ります。
  // これはTweetInputコンポーネントのtextareaに入力された内容をもとに生成されたオブジェクトです。
  // 引数を受け取ったらtweetという名前のstate変数を書き換える関数setTweetsを呼び出します。
  // setTweets内では既存のtweets配列に新たなtweetを追加します。
  // (既存配列の先頭に追加します)
  // setTweets関数が書き換わったらcallback関数も書き換えます。
  //const addTweet = React.useCallback((tweet) => setTweets((prev) => [tweet, ...prev]), [setTweets]);
  var func = function(tweet) {
    setTweets((prev) => [tweet, ...prev]);
  };
  const addTweet = React.useCallback(func, [setTweets]);
  return (
    <div>
      <TweetInput addTweet={addTweet} />
      <Timeline tweets={tweets}
        funcUp={funcUp}
        funcDown={funcDown}
        funcEdit={funcEdit}/>
    </div>
  );
}