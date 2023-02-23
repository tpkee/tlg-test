import { atom, selector } from "recoil";

const listWishlistState = atom({
  key: 'listWishlistState',
  default: []
})

const checkIfWishlistedState = selector({
  key: 'checkIfWishlistedState',
  get: ({ id }) => {
    return listWishlistState.some(el => el.id === id)
  }
})


export {
  listWishlistState,
  checkIfWishlistedState
};
