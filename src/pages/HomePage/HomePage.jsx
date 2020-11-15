import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Styles
import { listCities, titleHomePage } from './HomePage.module.css';

// Components
import ListCities from '../../components/ListCities/ListCitiesContainer';
import SearchForm from '../../components/SearchForm/feachWeatherContainer';

const HomePage = () => {
  return (
    <>
      <h1 className={titleHomePage}>Weather App</h1>
      <SearchForm />
      <ul className={listCities}>
        <DndProvider backend={HTML5Backend}>
          <ListCities />
        </DndProvider>
      </ul>
    </>
  );
};

export default HomePage;
