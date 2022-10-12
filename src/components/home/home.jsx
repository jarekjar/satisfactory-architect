import { useEffect } from 'react';
import './home.css';
import data from '../../data/data.json';

const Home = () => {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className="">
      <h1 className="home">Satisfactory Architect (wip)</h1>
      {Object.entries(data.items).map(([className, item]) => (
        <div className="item-container" key={className}>
          <img className="item-icon" src={process.env.PUBLIC_URL + `/images/${item?.slug}_64.png`} alt={item?.slug}></img>
          <div className="item-info-container">
            <div className="item-title">{item?.name}</div>
            <div className="item-description">{item?.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
