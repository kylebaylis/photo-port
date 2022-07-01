import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';


function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects'
    },
    {
      name: 'portraits',
      description: 'Portraits of people in my life'
    },
    {
      name: 'food',
      description: 'Delicious delicacies'
    },
    {
      name: 'landscape',
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false); // false prevents contact form showing right away

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelevted={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/* equivalent statement (:), if contactSelected is false, render Gallery and About */}
        {/* if true, render ContactForm */}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
