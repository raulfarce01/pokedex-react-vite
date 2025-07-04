import { useState } from "react";

interface PokeCardProps {
  id: number;
  name: string;
  types: string[];
  image: string;
  description: string;
  beforePoke: () => void; 
  afterPoke: () => void; 
}

export function PokeCard({id, name, types, image, description, beforePoke, afterPoke}: PokeCardProps) {

    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {

        setIsFlipped(!isFlipped);

    }

    const cardStyle = `poke-card relative w-64 h-72 border border-black rounded-md cursor-pointer perspective ${types.includes("Fire") ? "bg-red-100" : "bg-white"}`; 

    return (

         <div
      key={id}
      className={cardStyle}
      onClick={flipCard}
    >
      {/* FRONT SIDE */}
      <section
        className={`absolute inset-0 transition-transform duration-500 ease-in-out backface-hidden bg-white shadow-xl rounded-xl p-4 d-flex flex-col justify-between ${
          isFlipped ? 'rotate-y-180 hidden' : 'rotate-y-0 block'
        }`}
      >
        <h2 className="poke-card-title text-xl font-bold text-center text-gray-800 mb-2">
          {name}
        </h2>
        <div className="poke-card-image flex justify-center my-2">
          <img src={image} alt={name} className="h-32 w-32 object-contain" />
        </div>
        <div className="poke-card-types flex justify-center gap-2 my-2">
          {types.map((type, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full"
            >
              {type}
            </span>
          ))}
        </div>
        <div className="poke-card-footer flex justify-around mt-4">
          <button
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
            onClick={(e) => {
              e.stopPropagation();
              console.log(beforePoke());
            }}
          >
            {beforePoke()?.name}
          </button>
          <button
            className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
            onClick={(e) => {
              e.stopPropagation();
              console.log(afterPoke());
            }}
          >
            {afterPoke()?.name}
          </button>
        </div>
      </section>

      {/* BACK SIDE */}
      <section
        className={`absolute inset-0 transition-transform duration-500 ease-in-out backface-hidden bg-gray-100 shadow-xl rounded-xl p-4 rotate-y-180 ${
          isFlipped ? 'block' : 'hidden'
        }`}
      >
        <h2 className="poke-card-title text-xl font-bold text-center text-gray-800 mb-2">
          {name}
        </h2>
        <div className="poke-card-description p-2 text-sm text-gray-700 text-justify">
          {description}
        </div>
        <div className="poke-card-footer flex justify-around mt-4">
          <button
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
            onClick={(e) => {
              e.stopPropagation();
              console.log(beforePoke());
            }}
          >
            {beforePoke()?.name}
          </button>
          <button
            className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
            onClick={(e) => {
              e.stopPropagation();
              console.log(afterPoke());
            }}
          >
            {afterPoke()?.name}
          </button>
        </div>
      </section>
    </div>

    );

}