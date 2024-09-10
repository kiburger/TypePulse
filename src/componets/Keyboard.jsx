export default function KeyboardArea ({ text, theme }) {
  const buttons = [
    ['~', '`'],['!', '1'],['@', '2'],['#','3'],['$','4'],['%','5'],['^','6'],['&','7'],['*','8'],['(','9'],[')','0'],['_','-'],['+','='],'Backspace',
    'Tab','Q','W','E','R','T','Y','U','I','O','P',['{','['],['}',']'],['|','\\'],
    'CapsLock','A','S','D','F','G','H','J','K','L',[':',';'],['"',"'"],'Enter', 
    'Shift','Z','X','C','V','B','N','M',['<',','],['>','.'],['?','/'],
    'Control','Alt','Meta'," ", 'ArrowLeft','ArrowUp','ArrowDown','ArrowRight'
  ];

  //let themeColor = theme === '☽' ? 'keyboard dark' : 'keyboard';
  return (
    <div className={theme === '☽' ? 
          'keyboard dark' : 
          'keyboard'} 
    >
      {buttons.map((btn, i) => {
        if (Array.isArray(btn, i)) {
          if(text === btn[0] || text === btn[1]) {
            return (<button key={btn[0]}
              style={{ 
              backgroundColor: 'lightcyan',
              color: 'black',
              border: '3px solid orange'
            }}>
              <span>{btn[0]}</span>
              <span>{btn[1]}</span>
            </button>);
          } else {
            return <button key={btn[0]} >
              <span>{btn[0]}</span>
              <span>{btn[1]}</span>
            </button>;
          }
        } 
        if(text === btn || text.toUpperCase() === btn) {
            return (<button key={btn}
              style={
              { backgroundColor: 'lightcyan',
                color: 'black',
                border: '3px solid orange'
              }}>{btn}</button>);
          } else {
            return <button key={btn}>{btn}</button>;
          }
        }
      )}
    </div>
  );
}