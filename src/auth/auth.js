import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useAuth (ward = 'logged') {
  /*
  * ward options:
  * all: no access restrictions to page 
  * guest: only guests (unlogged users) can access the page
  * logged: only logged users can access the page
  */
  const access_token = getAccessToken()
  const navigate = useNavigate()

  
  useEffect(() => {
    if (!['all', 'logged', 'guest'].includes(ward)) {
      console.error("[auth.js] Ward param must be all/logged/guest")
      return
    }

    if (ward === 'all') {
      return
    }
    
    if (ward === 'logged' && !access_token) {
      navigate('/login')
    } else if (ward === 'guest' && access_token) {
      navigate('/')
    }
  })
}

function logout () {
  sessionStorage.removeItem('access_token')
  window.location.reload()

}

function getAccessToken () {
  return sessionStorage.getItem('access_token')
}

export { getAccessToken, useAuth, logout }