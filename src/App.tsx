import './App.css';
import LeftSidebar from './components/leftSidebar/LeftSidebar';

function App() {
  return (
    <div className='flex h-screen overflow-hidden'>
      <LeftSidebar />
      <div className='flex-1 p-4'>
        <h1 className='text-3xl font-bold underline text-primary'>
          Hello world!
        </h1>
      </div>
    </div>
  );
}

export default App;
