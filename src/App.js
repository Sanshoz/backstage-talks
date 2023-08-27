import './App.css';
import FixedContent from './FixedContent'
import ImageComponent from './ImageComponent';


const App = () => {

  return (
    <main className="bg-blue-800 font-bold main flex flex-col">
      <FixedContent />
      <ImageComponent />
      <ImageComponent />
      <ImageComponent />
      
    </main>
  );
}

export default App;
