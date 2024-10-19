import './App.css';
import MainRoutes from './routes';

function App() {
  return (
    <main className='flex   h-[100vh] justify-center py-4 bg-slate-200'>
      <div className='container w-full rounded-[24px] p-4 bg-white'>
        <MainRoutes />
      </div>
    </main>
  );
}

export default App;
