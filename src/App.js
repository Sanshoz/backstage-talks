import './App.css';
import FixedContent from './FixedContent'
import ImageComponent from './ImageComponent';


const App = () => {

  return (
    <main className="font-bold main flex flex-col">
      <FixedContent />
      
      <ImageComponent color="00c1b5" issue='3' />
      <ImageComponent color="1d3fbb" issue='2' />
      <ImageComponent color="e30512" issue='1' />
      
    </main>
  );
}

export default App;
