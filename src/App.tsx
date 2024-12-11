import './App.css';
import LeftSidebar from './components/leftSidebar/LeftSidebar';

function App() {
  return (
    <div className='flex h-screen overflow-hidden'>
      <LeftSidebar />
      <div className='flex-1'>
        <div className='flex h-[56px] border-b items-center px-4 py-2'>
          <p className='font-[500] text-sm'>
            <span className='opacity-50'>Reports &nbsp;/</span>
            &nbsp; <span>Business Metrics</span>
          </p>
        </div>
        <h1 className='p-4 text-3xl font-bold underline text-primary'>
          Hello world!
        </h1>
      </div>
    </div>
  );
}

export default App;
