export const fechtapi = async ()=>{
   try {
    const respon = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=30")
    const json = await respon.json()
    return json
   } catch (error) {
    console.error(error)
   }

}