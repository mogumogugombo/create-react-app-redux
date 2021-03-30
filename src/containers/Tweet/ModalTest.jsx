import React from 'react'
import TweetEdit from './TweetEdit'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

export default function ModalTest(props) {
  const useStyle2 = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: '80%',
      backgroundColor: 'white',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyle2();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };  
  const handleClose = () => {
    setOpen(false);
  }
  var funcEditAtTweet = function (idx, content) {
    props.funcEdit(idx, content);
    setOpen(false);
  }
  
  return (
    <div style={{display: 'inline'}}>
      <button type="button" onClick={handleOpen} className="status-action">
      変更
      </button>
      <Modal open={open} onClose={handleClose} >
        <div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} className={classes.paper}>
        <h2>Text in a modal</h2>
        <TweetEdit funcEdit={funcEditAtTweet} idx={props.idx} content={props.content} />
        </div>
      </Modal>
    </div>
  );
}

