import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fechtapi } from './api'

function Query() {
    const {data,isLoading,error} = useQuery({queryKey:["fetchapi"],queryFn:fechtapi})
  
    if(isLoading){
      return <div>...Cargando...</div>
    }
    if(error){
      return <div>Error fetching hotels! {error.message} </div>
    }
  return (
   { data,isLoading,error}
  )
}

export default Query
