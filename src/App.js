import './App.css';
import SocialIcons from './Icons/Icon';

const Details = {
  name: "Chayon Mondol",
  imgUrl:
    "https://yt3.googleusercontent.com/prPE6c9CPqgvSunEp2zIydYR-5RffgeG91TAOjdk1IChIX-oTMN5zRJqG2_DnGf_vC98LOgl=s900-c-k-c0x00ffffff-no-rj",
  imgSize: 200,
  fontSize: "50px"
};

function App() {
  return (
    <>
      <h1
        style={{
          fontSize: Details.fontSize,
          color: "blue",
          textAlign: "center"
        }}
      >
        {Details.name}
      </h1>
      <div className='img'>
        <img
          className="avatar"
          src={Details.imgUrl}
          alt={"Photos of " + Details.name}
          style={{
            width: Details.imgSize,
            height: Details.imgSize,
            border: "5px solid blue",
          }}
        />
      </div>
      <h1>Web Developer</h1>
      <div>
        <SocialIcons />
      </div>
    </>
  );
}

export default App;
