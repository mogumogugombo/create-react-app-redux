import React from 'react'
import ModalTest from './ModalTest'
export default function Tweet(props) {
  //Reactから、このコンポーネントのlike値と、like値をセットするための関数を取り出す
  const [liked, setLike] = React.useState(false);
  const toggleLike = React.useCallback(() => setLike((prev) => !prev), [setLike]);
  //↑setLikeの引数に関数を渡している。
  //  ここで渡す関数には、現在の値が引数として渡される。
  //  関数を渡さず、直接likedを反転した値をsetLikeに渡してもダメ。
  //  (コンポーネントがrenderされた時点のliked値が反転されるだけなので)
  //useCallbackとはパフォーマンス向上のためのフックで、メモ化したコールバック関数を返します。
  //依存配列(=[deps]コールバク関数が依存している要素が格納された配列) の要素のいずれかが変化した場合のみ  
  //メモ化した値を破棄し再計算します。

  const addIndent = function(level) {
    return '**'.repeat(level);
  }
  const getIndentStyle = function(level) {
    return {marginLeft: level * 20 + 'px'};
  }

  return (
    <div className="tweet">
      <div className="body-container">
        <div style={getIndentStyle(props.level)}>
            <div>
                <span>reg:{props.regTime}</span>&nbsp;
                <span>upd:{props.updTime}</span>
            </div>
            <div className="content">{props.content}</div>
            <div className="status-action">
                <span>{addIndent(props.level)}</span>
                <span onClick={toggleLike}>{liked ? '❤️' : '♡'}</span>
                <ModalTest idx={props.idx} content={props.content} funcEdit={props.funcEdit} />
                <button type="button" onClick={() => props.funcUp(props.idx)}>上へ</button>
                <button type="button" onClick={() => props.funcDown(props.idx)}>下へ</button>
                <button type="button" >左へ</button>
                <button type="button" >右へ</button>
            </div>
        </div>
      </div>
    </div>
  );
}