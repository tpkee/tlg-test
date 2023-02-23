import { useState, useEffect, Suspense } from 'react';

import { useAuth, logout } from '../auth/auth';
import CardSkeleton from '../components/CardSkeleton';
import CardProduct from '../components/CardProduct';
import Button from '../components/Button';

export default function ProductsPage() {
  useAuth('logged')
  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    let ignore = false;
    setProducts([]);
    setIsLoading(true)
    fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=12`)
    .then(res => res.json())
    .then(result => {
      if (!ignore) {
        setProducts(result);
      }
      setIsLoading(false)
    })
    .catch(err => {
      setIsLoading(false)
      console.error(err)
    });
    return () => {
      ignore = true;
    };
    
  }, [offset]);


  return (
    <>
      <Button onClick={() => logout()}>
        Logout
      </Button>
      <div className='flex justify-center'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2'>
        { isLoading ? 
            [1,2,3,4].map(el => <CardSkeleton key={el} />) : 
              products.length > 0 ?
                products.map(el => <CardProduct key={el.id} title={el.title} price={el.price} image={el.images?.at(0)} />)
                  : 'There are no products'
          }
        </div>
      </div>
      <div className='flex flex-wrap'>
        
      </div>
    </>
  )
}