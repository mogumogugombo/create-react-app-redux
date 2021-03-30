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
      icon: "🌽",
      displayName: "もろこし太郎",
      accountName: "morokoshi",
      content: "今日も1日もろこしがうまいb",
      display: 'block'
    },
    {
      idx: 1,
      icon: "🦐",
      displayName: "エビデンス",
      accountName: "evidence",
      content: "かみにそたべい",
      display: 'block'
    },
    {
      idx: 2,
      icon: "",
      displayName: "aaaa",
      accountName: "bbbb",
      content: "cccc",
      display: 'block'
    },
  ]);

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
      <Timeline tweets={tweets}/>
    </div>
  );
}

