import './App.css';
import FixedContent from './FixedContent'
import ImageComponent from './ImageComponent';
import { useEffect, useState } from 'react';



const App = () => {
  const [bgColor, setBgColor] = useState('#00c1b5');
  const colors = ["#00c1b5", "#1d3fbb", "#e30512", "#ffbe00", 'ff651a']
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (mediaQuery.matches) {
      switch (true) {
        case scrollPosition < 500:
          setBgColor('#00c1b5');
          break;
        case scrollPosition < 1000:
          setBgColor('#1d3fbb');
          break;
        case scrollPosition < 2000:
          setBgColor('#e30512');
          break;
        case scrollPosition < 2600:
          setBgColor('#ffbe00');
          break;
        case scrollPosition < 3000:
          setBgColor('#ff651a');
      }
      console.log('A media query corresponde');
    } else {
      switch (true) {
        case scrollPosition < 500:
          setBgColor('#00c1b5');
          break;
        case scrollPosition < 1000:
          setBgColor('#1d3fbb');
          break;
        case scrollPosition < 2000:
          setBgColor('#e30512');
          break;
        case scrollPosition < 3000:
          setBgColor('#ffbe00');
          break;
        case scrollPosition < 3500:
          setBgColor('#ff651a');
      }
    }
    

    
  };

//  style={{backgroundColor: bgColor}}
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      
    }, []);
  return (
    <main className={`font-bold main flex flex-col`}  style={{backgroundColor: bgColor, transition: 'background-color 1s'}}>
      <FixedContent bgColor={bgColor} />
      {colors.map((col,index) => (<ImageComponent key={index} color={col} bgColor={bgColor} issue={index+1}  />
))}
      

      
    </main>
  );
}

export default App;
