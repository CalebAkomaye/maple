import Image from 'next/image';
import Nav from './components/nav';
import Search from './components/search';

export default function Home() {
  return (
    <div className=' '>
      <Nav />
      <main className='relative h-full w-full p-2 lg:px-8 md:px-8'>
        <Search />
      </main>
    </div>
  );
}
