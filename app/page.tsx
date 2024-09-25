import MarkerMap from './components/map';
import Nav from './components/nav';
import Search from './components/search';

export default function Home() {
  return (
    <div className=' '>
      <Nav />
      <main className='relative h-full w-full p-2 lg:px-8 md:px-8'>
        <div className='w-full max-h-20'>
          <MarkerMap />
        </div>
        <Search />
      </main>
    </div>
  );
}
