export default function TextDisplay(props) {

  return ( 
    <>
      <div className="typingArea">
        <textarea 
            onKeyDown={props.onTyping}
            onChange={props.handleChange} 
            value={props.typed}
        ></textarea>
      </div>
    </>
  );
}