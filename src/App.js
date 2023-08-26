import './App.css';

function App() {
  return (
    <main className="bg-blue-800 font-bold main flex flex-col justify-between ">
      <div className='grid grid-cols-2 flex justify-between'>
        <div> FAKE BACKSTAGE </div>
        <div className='flex justify-end'>fake@backstagetals.com</div>
      </div>
      <div className='book'></div>
      <div className='infos grid grid-cols-3 flex'>
        <div className='flex'>Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.
© 2023 Published by Büro Milk

Privacy Policy</div>
        <div className='flex'>Issue #1 is sold out.

If you are lucky, you may get the last pieces in selected stores.</div>
      
        <div className='flex'>fake@backstagetalks.com</div>
      </div>
    </main>
  );
}

export default App;
