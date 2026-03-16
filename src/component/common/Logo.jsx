import LogoPng from '../../assets/logo.png';

const Logo = () => {
  return (
    <img className='w-25 mt-0.5'
      src={LogoPng} 
      alt={"logo이미지"} 
    />
  );
};

export default Logo;