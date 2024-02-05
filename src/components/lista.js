import React from "react";
import Query from "../query/query";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "../css/lista.css";

import { useStorelista } from "../store/store";

function Lista() {
  const { count, lista, additem,incremen } = useStorelista();
  const { data, error, isLoading } = Query();
  console.log(count, lista);

  console.log(data, error, isLoading);
  return (
    <div className="container">
      {data?.map((val, index) => (
        <div className="card" style={{ width: "18rem" }} key={index}>
          <LazyLoadImage
            src={val.images[0]}
            className="card-img-top"
            alt="..."
            style={{ height: "250%" }}
          />
        
          <div className="card-body" style={{ height: "100px" }}>
            <h5 className="card-title">{val.title}</h5>
          </div>
          <div className="card-body" style={{ height: "100px" }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Categoria : {val.category.name}
              </li>
              <li className="list-group-item">Precio : ${val.price}</li>
            </ul>
          </div>
          <div
            className="card-footer"
            style={{ background: "white", height: "100px" }}
          >
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                console.log(val)
                const pru=  lista.filter(val1=>val1.title===val.title)
                console.log(pru.length)   
                if(pru.length<1){
                  additem({title:val.title,description:val.description,category:val.category.name,imagen:val.images[0],precio:val.precio,cantidad:1})
                }else{
                  incremen(val.title)
                }        
                //additem({title:val.title,description:val.description,category:val.category.name,imagen:val.images[0],precio:val.precio,cantidad:1})
               // incremen({title:val.title,description:val.description,category:val.category.name,imagen:val.images[0],precio:val.precio,cantidad:1})
                console.log(lista)
              }}
            >
              Comprar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Lista;
