// TODO 2: Wordle
// R - IF NOT IN SECRET (R)RED
// G - IF IN CORRECT POSITION (G)GREEN
// Y - IF NOT IN CORRECT POSITION (Y)YELLOW

// secret: PERTO

// Examples:

// input: VOLTE
// output: 'RYRGY'

// input: PORTA
// output: 'GYGGR'

// input: PERTO
// output: 'GGGGG'

const p2 = false;

export const P2 = () => {
  return p2 ? (
    <div>
      <h1>P2: Wordle</h1>
      <form>
        <input />
        <button>SUBMIT</button>
      </form>
    </div>
  ) : null;
};
