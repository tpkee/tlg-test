import { useState } from 'react';
import { useRecoilState } from "recoil";
import { listWishlistState } from "../state/Wishlist";
import { useAuth, logout } from '../auth/auth';

import CardProduct from '../components/CardProduct';
import Button from '../components/Button';

export default function ProductsPage() {
  useAuth('logged')
  const [listWishlist, setListWishlist] = useRecoilState(listWishlistState)

  function editWishlist (obj) {
    const i = listWishlist.findIndex(el => el.id === obj.id)

    if (i === -1) {
      setListWishlist([...listWishlist, obj])
    } else {
      setListWishlist([...listWishlist.slice(0, i), ...listWishlist.slice(i + 1)])
    }
  }


  return (
    <div className='flex flex-col items-center gap-y-6 py-10'>
      <Button onClick={() => logout()}>
        Logout
      </Button>
      <h1 className='text-4xl font-bold'>
        Wishlist page
      </h1>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2'>
        { listWishlist.length > 0 ?
            listWishlist.map(
              el => 
                <CardProduct 
                  key={el.id}
                  title={el.title}
                  price={el.price}
                  image={el.images?.at(0)}
                  isWishlisted={true}
                  onClick={() => editWishlist(el)}
                />
              )
              : 'There are no products'
          }
      </div>
    </div>
  )
}