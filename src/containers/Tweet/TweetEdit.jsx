import React from 'react'
export default function TweetEdit(props) {
  //要素のアクセスするための参照を取得
  //デフォルト値はnullにしておく
  const textareaRef = React.useRef(null);

  // eslint-disable-next-line
  const saveTweet = React.useCallback(() => {
    if (textareaRef.current) {
      props.editTweet({
        content: textareaRef.current.value
      });
    }
  }, [textareaRef.current, props.editTweet]);

  return (
    <div >
      <div ><textarea className="tweet-textarea" ref={textareaRef} defaultValue={props.content}></textarea></div>
      <div ><button onClick={() => props.funcEdit(props.idx, textareaRef.current.value)} className="send-tweet">保存</button></div>
    </div>
  );
}

