import image from './assets/image-qr-code.png';
function App() {
  return (
    <div className='container'>
      <div className='card'>
        <div className='qrImage'>
          <img className='image' src={image} alt='QR' />
        </div>
        <h3 className='title'>
          Improve your front-end skills by buildings projects
        </h3>
        <p className='subtitle'>
          Scan the QR code to visit Fronend Mentor and take your coding skills
          to next level
        </p>
      </div>
    </div>
  );
}

export default App;
