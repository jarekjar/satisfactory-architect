import { useEffect, useState } from 'react';

//css
import './home.css';

//json
import data from '../../data/data.json';

//components
import Header from '../header/header';
import ItemList from '../item/item';

const Home = () => {

  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState(Object.values(data));

  //on component mount
  useEffect(() => {
    console.log(data);
  }, []);

  //when search query changes
  useEffect(() => {
    const filteredData = Object.values(data.items).filter(item => item?.name?.toLowerCase().includes(query?.toLowerCase()))
    setFilteredResults(filteredData);
  }, [query])

  return (
    <>
      <Header setSearchQuery={setQuery}/>
      <ItemList data={filteredResults} />
    </>
  );
};

export default Home;
