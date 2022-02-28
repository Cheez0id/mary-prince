import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import NavBar from './pages/NavBar';
import Home from './pages/Home';


export default function PageConntainer() {
  const [currentPage, setCurrentPage] = useState('');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    return <Home/>

  };
  renderPage();



  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
