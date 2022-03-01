import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';





export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Home/>

  };


  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='bg-cover bg-fixed inline-flex '>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
 
      {renderPage()}
      
    </div>
  );
}
