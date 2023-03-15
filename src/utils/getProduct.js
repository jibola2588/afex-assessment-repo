import { decryptData } from './crypto'

const url = 'https://comx-sand-api.afex.dev/api/securities/boards'

export const getProduct = async () => { 
  try{
     const res = await fetch(url)
     console.log(res)
     const data = await res.json()
     console.log(data)
  }catch(err){ 
    console.log(err.message)
  }
}