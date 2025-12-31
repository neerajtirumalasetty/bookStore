import React from "react";

function Cards({item}) {

  return (
    <>
      <div className="mt-4 flex flex-col bg-slate rounded-xl px-2 ">
        <div className="card bg-base-300 shadow-sm hover:cursor-pointer hover:scale-105 duration-200">
          <figure className="w-full h-[450px] overflow-hidden">
            <img
              src={item.image}
              alt="Books"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body flex flex-col">
            <h2 className="card-title">
              {item.title}
              <div className="badge bg-yellow-400 text-black">{item.category}</div>
            </h2>
            <p>
              {item.Genere}
            </p>
            <div className="card-actions flex mt-auto justify-between">
              <div className="badge badge-outline">$ {item.price}</div>
              <div className="badge badge-outline rounded-full text-black bg-yellow-400  hover:bg-yellow-200 duration-200 cursor-pointer">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
