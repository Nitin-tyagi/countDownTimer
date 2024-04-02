import {useEffect, useState} from "react";
import './App.css';
import ShowTimer from "./ShowTimer";
import InputTimer from "./InputTimer"
function App() {
  const [isStart,setIsStart]= useState(false);
  const [isPause, setIsPause]=useState(false);
const [hours,setHours]= useState(0);
const [minutes,setMinutes]=useState(0);
const [seconds,setSeconds]=useState(0);
const [timerId,setTimerId]=useState(0);
  const handleStart=()=>{
    if(hours<0||minutes<0||seconds<=0){
      alert("invalid input");
      return;
    }
    else{
    setIsStart(true);
  }
  }

  const handleResume=()=>{
    setIsPause(false);
    runTimer(seconds,minutes,hours);
  }

  const handlePause=()=>{
setIsPause(true);
clearInterval(timerId);
  }

  const handleReset=()=>{
   
      setIsStart(false);
     resetTimer();
      clearInterval(timerId);
    
  }

  const resetTimer=()=>{
  setHours(0);
      setMinutes(0);
      setSeconds(0);
     
  }

  const handleInput=(e)=>{
    console.log(e.target.id,e.target.value);
    const value=parseInt(e.target.value);
    const id=e.target.id;
    if(id==="hour"){
      setHours(value);
    }
    else if(id==="minute"){
      setMinutes(value);
    }
    else{
      setSeconds(value);
    }
    
  }

  const runTimer = (sec,min,hr,tid)=>{
if(sec > 0){
  setSeconds((s) => s - 1);
}
else if(sec === 0 && min > 0){
  setMinutes((m) => m - 1);
  setSeconds(59);
}
else if(min===0){
  setHours((h)=> h - 1);
  setMinutes(59);
  setSeconds(59);
}

if(sec===0 && min===0 && hr===0){
//  resetTimer();
handleReset();
  clearInterval(tid);
  alert("timer is fineshed");
}
  }

  useEffect(()=>{
    let tid;
    if(isStart){
      tid=setInterval(()=>{
        runTimer(seconds,minutes,hours,tid)
      },1000)
      setTimerId(tid);
    }

    return () =>{
      clearInterval(tid);
    }

  },[isStart,hours,minutes,seconds])

  console.log(hours,minutes,seconds);
  return (
    <div className="App">
<h1>Countdown Timer</h1>     
{
!isStart && <InputTimer handleStart={handleStart} handleInput={handleInput}/>
}
{
  isStart && <ShowTimer 
  hours={hours}
  minutes={minutes}
  seconds={seconds}
  isPause={isPause}
  handlePause={handlePause}
  handleReset={handleReset}
  handleResume={handleResume}
  />
}
    </div>
  );
}

export default App;
