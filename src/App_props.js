import React from 'react';

function Food(props) {
  console.log(props);
  return <h1>I love {props.name}</h1>
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: null
  },
  {
    id: 2,
    name: "orange",
    image: null
  },
  {
    id: 3,
    name: "lattice",
    image: null
  },
  {
    id: 4,
    name: "candy",
    image: null
  }
];

// map()을 돌릴때, 리액트에서 key/value 유지
function renderFood (item) {
  console.log(item);
  return <Food key={item.id} name={item.name} />;
}

function App() {
  return (
    <div>
      <div>Hello!</div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
