import { useState } from "react"
import TextDisplay from "./TextDisplay"
import KeyboardArea from "./Keyboard";
import quotes from "./quotes";

function App() {
  const [text, setText] = useState(''); //To track the current keyboard keys
  const [typed, setTyped] = useState(""); //To track users typed words
  const [index, setIndex] = useState(0);
  const[faults, setFaults] = useState(0);
  const [theme, setTheme] = useState('☀︎');
  const [start, setStart] =useState(false);
  let timer = 10;

  const onTyping = (e) => {
    setText(e.key);
    let i = typed.length-1;
   
    if(e.key !== 'Backspace') {
      if(typed[i] !== quotes[index][i]) {
        setFaults(faults+1);
      }
    } else {
      console.log('you deleted a character.');
    }
  };

  const handleChange = (e) => {
    //let i = typed.length-1;
    // if(typed[i] !== quotes[index][i]) {
    //   setFaults(faults+1);
    // }
    setTyped(e.target.value);
    setStart(true);
    if(typed.length === quotes[index],length) {
      setStart(false);
    }
  }

  const handleNext = () => {
    let currIndex = index;
    if(currIndex >= quotes.length-1) {
      currIndex = 0;
      setIndex(currIndex);
      setText('');
      setTyped('');
      setFaults(0);
      return;
    } 
    setIndex(currIndex + 1);
    setText('');
    setTyped('');
    setFaults(0);
  };

  const toggleTheme = () => {
    if (theme === '☀︎') {
      setTheme('☽');
    } else {
      setTheme('☀︎');
    }
  };

  return (
    <>
      <header>
        <h1>📖 TypePulse</h1>
        <div className="theme"
          onClick={toggleTheme}
        >{theme}</div>
      </header>
      <div className={ theme === '☽' ? 'quotes dark' : 'quotes'}>
        <div>
          {quotes[index].split('').map((word, i) => {
            if (typed.length > 0 && i < typed.length) {
              if(word !== typed.charAt(i)) {
                return <span style={{color: 'red'}} key={i}>{word}</span>;
              } else {
              return <span style={{color: '#646cff'}} key={i}>{word}</span>;
            }
            } else {
              return <span key={i}>{word}</span>;
            }
          })}
        </div>
      </div>
      <div className="progressBarWrapper">
        <p>Progress:</p>
        <div className="progressBar"
            style={{
              width: (typed.length/quotes[index].length*100).toFixed(0) +'%',
            }}
        >{typed?(typed.length/quotes[index].length*100).toFixed(0):0}%</div>
      </div>
      <div className="correctnessBarWrapper">
        <p>Correctness:</p> 
        {faults>0 ? 
          <div className="correctnessBar"
            style={{
              width: Math.round(100-faults/typed.length*100) +'%'
            }}
          >
          {typed.length>0&&faults>0 ? Math.round(100-faults/typed.length*100) : 100}%
          </div> : 
          (typed.length/quotes[index].length*100).toFixed(0)>=100 ? 
          <div className="correctnessBar"
            style={{
              width: '100%'
            }}
          >100%</div> :'%'
        }
      </div>
      <div className="nextBtnWrapper">
        <p>Count: {typed.length}/{quotes[index].length}</p>
        <p>Progress: {typed?(typed.length/quotes[index].length*100).toFixed(0) : 0}%</p>
        <p>Correctness: {faults!==0 && Math.round(100-faults/typed.length*100)}%</p>      
        <button id="nextBtn" onClick={handleNext}>Next</button>
      </div>
      <TextDisplay 
        typed={typed}
        onTyping={onTyping} 
        handleChange={handleChange} 
      /> 
      <KeyboardArea text={text} theme={theme} />
    </>
  );
}

export default App
