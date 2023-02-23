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
    <div className='flex flex-col items-center gap-y-6 py-10'>
      <Button onClick={() => logout()}>
        Logout
      </Button>
      <h1 className='text-4xl font-bold'>
        Products page
      </h1>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2'>
        { isLoading ? 
            Array.from(Array(12).keys()).map(el => <CardSkeleton key={el} />) : 
              products.length > 0 ?
                products.map(el => <CardProduct key={el.id} title={el.title} price={el.price} image={el.images?.at(0)} />)
                  : 'There are no products'
          }
      </div>
      <div className='flex flex-wrap gap-1'>
        <Button disabled={page - 1 < 1 } onClick={() => 
          {
            setOffset(prev => prev - 12)
            setPage(prev => prev - 1)
          }
        }>
          back
        </Button>
        <span className='select-none px-2.5 py-1.5 border rounded'>
          {page}
        </span>
        <Button disabled={!products.length} onClick={() => 
          {
            setOffset(prev => prev + 12)
            setPage(prev => prev + 1)
          }
        }>
          next
        </Button>
      </div>
    </div>
  )
}