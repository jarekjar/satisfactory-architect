import { useEffect } from 'react';
import './home.css';
import data from '../../data/data.json';

const Home = () => {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className="home">
      {/* {data.map(nativeClass => (
        <div key={nativeClass?.NativeClass}>
          <h2>{nativeClass?.NativeClass}</h2>
          {nativeClass?.Classes?.map(item => (
            <div key={item?.ClassName}>
              <h3>{item?.mDisplayName}</h3>
              <p>{item?.mDescription}</p>
            </div>
          ))} 
        </div>
          ))}*/}
    </div>
  );
};

export default Home;
