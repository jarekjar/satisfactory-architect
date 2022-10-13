import { useEffect } from 'react';

//css
import './home.css';

//json
import data from '../../data/data.json';

//components
import Header from '../header/header';
import ItemList from '../item/item';

const Home = () => {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <Header />
      <ItemList data={data} />
    </>
  );
};

export default Home;
