import React from 'react';
import propTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "noting"
  },
  {
    id: 2,
    name: "orange",
    image: "noting",
    rating: 3
  },
  {
    id: 3,
    name: "lattice",
    image: "noting",
    rating: 3
  },
  {
    id: 4,
    name: "candy",
    image: "noting",
    rating: 4.3
  }
];

// map()을 돌릴때, 리액트에서 key/value 유지
function renderFood(item) {
  console.log(item);
  return <Food key={item.id} name={item.name} image={item.image} rating={item.rating} />;
}

function Food({ name, image, rating }) {
  return (
    <React.Fragment>
      <h1>I love {name}.</h1>
      <div>{image}</div>
      <p>score: {rating} / 5</p>
    </React.Fragment>
  );
}

// npm install --save prop-types
Food.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired, 
  rating: propTypes.number,
};

function App() {
  return (
    <div>
      <div>Hello!</div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
