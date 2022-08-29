import { Send } from '@mui/icons-material';
import './NewsLetter.css'

const Newsletter = () => {
  return (
    <div className='N-Container'>
      <h1 className='Title'>Newsletter</h1>
      <div className='Desc'>Get timely updates from your favorite products.</div>
      <div className='InputContainer'>
        <input className='Input' type="text" placeholder="Your email" />
        <button className='N-Butoon'>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
