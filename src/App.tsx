import { PokeCard } from "./PokeCard";

function App() {

  return (
    <>
      <PokeCard id={1} name="Charmander" types={["Fire"]} image="https://images.wikidexcdn.net/mwuploads/wikidex/5/56/latest/20200307023245/Charmander.png" description="lorem ipsum dolor sit amet" beforePoke={() => ({id: 99 ,name: "Rayquaza"})} afterPoke={() => ({id: 2 ,name: "Charmeleon"})} /> 

      <PokeCard id={2} name="Charmeleon" types={["Fire"]} image="https://images.wikidexcdn.net/mwuploads/wikidex/f/fb/latest/20200411222755/Charmeleon.png" description="lorem ipsum dolor sit amet" beforePoke={() => ({id: 1 ,name: "Charmander"})} afterPoke={() => ({id: 3 ,name: "Charizard"})} /> 

      <PokeCard id={3} name="Charizard" types={["Fire", "Flying"]} image="https://images.wikidexcdn.net/mwuploads/wikidex/9/95/latest/20160817212623/Charizard.png" description="lorem ipsum dolor sit amet" beforePoke={() => ({id: 2 ,name: "Charmeleon"})} afterPoke={() => ({id: 4 ,name: "Squirtle"})} /> 
    </>
  )
}

export default App
