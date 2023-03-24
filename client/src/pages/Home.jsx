import React, { useEffect, useState } from 'react';
import { FormField, Card, Loader} from '../components';


const Home = () => {
  
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className="font-extrabold text-[#222]">The Community Showcase</h1>
      </div>
    </section>
  )
}

export default Home