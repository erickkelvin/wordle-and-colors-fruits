// TODO 1: Colors and fruits
// Given the following input, display 2 sorted lists:
// one list for colors and another one for fruits

const p1 = true;

const input = {
  banana: "fruit",
  red: "color",
  apple: "fruit",
  blue: "color",
  green: "color",
  watermelon: "fruit"
};

export const P1 = () => {
  return p1 ? (
    <div>
      <h1>P1: Colors</h1>
      <h2>Colors:</h2>
      {/* show sorted list of colors */}
      <h2>Fruits:</h2>
      {/* show sorted list of fruits */}
    </div>
  ) : null;
};
