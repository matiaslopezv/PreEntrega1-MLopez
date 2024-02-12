import React from 'react';
import {useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'
import './itemListContainer.css'

const ItemListContainer = () => {

  const [productos,setProductos] = useState([]);

  const {categoryId} = useParams()

  useEffect(()=>{
      
      const fetchData = async () => {
          try {
              const response = await fetch("/productos.json");
              const data = await response.json()

              if(categoryId){
                  const filteredProducts = data.filter((p) => p.categoria == categoryId)
                  setProductos(filteredProducts)
              }else{
                  setProductos(data)
              }

          }catch(error){
              console.log("Error en el fetch "+error)
          }
      }

      fetchData()

  },[categoryId])


return (
  <div className='contenedor'>

      {
      <ItemList productos={productos}/>
      }

  </div>
)
}

export default ItemListContainer;


