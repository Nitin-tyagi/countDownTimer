const InputTimer=({handleInput,handleStart})=>{
    return (
        <div className="input-container">
  <div className="input-box">
    <input id="hour" placeholder="HH" onChange={handleInput}/>
    <input id="minute" placeholder="MM" onChange={handleInput}/>
    <input id="second" placeholder="SS" onChange={handleInput}/>
  </div>
  <button onClick={handleStart} className="timer-button">start</button>
</div>
    )
}

export default InputTimer;