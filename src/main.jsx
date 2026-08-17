import React,{useState} from "react";
import{createRoot}from"react-dom/client";
import{ArrowLeft,ArrowRight,RotateCcw,Check,Heart}from"lucide-react";
import"./styles.css";

const pages=[
 {emoji:"👀",tag:"HOLD UP",title:"Ram, I have a tiny thing to tell you.",text:"It may or may not require an unnecessarily complicated website.",go:"Continue →"},
 {emoji:"🕵️",tag:"VERY SERIOUS INVESTIGATION",title:"Okay… hear me out.",text:"There was a small situation. And perhaps… a small misunderstanding.",go:"Continue the investigation →"},
 {emoji:"😬",tag:"UH OH",title:"I may have chosen my words badly.",text:"And honestly, I should have thought before saying it.",go:"Proceed with caution →"},
 {emoji:"🥲",tag:"ONE LAST THING",title:"So here's what I actually want to say.",text:"I genuinely didn't mean it in a disrespectful way. It just came out at the worst possible moment with the worst possible wording.",go:"Okay, final message →"}
];

function CryingCat(){
 return <div className="catWrap" aria-label="cute crying cat">
   <div className="tear t1">💧</div><div className="tear t2">💧</div>
   <div className="cat">
    <div className="ear leftEar"/><div className="ear rightEar"/>
    <div className="face">
      <span className="eye leftEye">•</span><span className="eye rightEye">•</span>
      <span className="tearDrop leftDrop">💧</span><span className="tearDrop rightDrop">💧</span>
      <span className="nose">ᴗ</span>
      <span className="mouth">︵</span>
    </div>
    <div className="paw p1">🐾</div><div className="paw p2">🐾</div>
   </div>
   <div className="sorryBubble">sowwy 🥺</div>
 </div>
}

function App(){
 const[page,setPage]=useState(0),[accepted,setAccepted]=useState(false),[no,setNo]=useState({x:0,y:0}),[noMsg,setNoMsg]=useState(false);
 const back=()=>{if(page>0){setPage(page-1);setNo({x:0,y:0});setNoMsg(false)}};
 const jump=()=>{setNo({x:(Math.random()*220)-110,y:(Math.random()*90)-45});setNoMsg(true)};
 if(accepted)return <div className="app"><main><section className="card celebration"><div className="big">🎉</div><div className="tag">CASE CLOSED</div><h1>YAY, we're good! 🤝</h1><p>Thank you for forgiving me. Now let's peacefully pretend this entire investigation never happened. 😭</p><div className="badge"><Check size={17}/> FRIENDSHIP RESTORED</div><button className="back center" onClick={()=>{setAccepted(false);setPage(3)}}><ArrowLeft size={16}/> Go back</button><button className="replay" onClick={()=>{setAccepted(false);setPage(0)}}><RotateCcw size={15}/> Replay the nonsense</button></section></main></div>;

 if(page===pages.length)return null;

 if(page===3)return <div className="app">
  <header><div className="logo">💌 tiny apology department</div><div className="progress">{pages.map((_,i)=><span className="active" key={i}/>)}</div></header>
  <main><section className="card finalCard">
   <button className="back" onClick={back}><ArrowLeft size={15}/> Back</button>
   <CryingCat/>
   <div className="tag">THE ACTUAL APOLOGY</div>
   <h1>Okay… I'm genuinely sorry, Ram. 🥺</h1>
   <p>I genuinely didn't mean it in a disrespectful way. It just came out at the worst possible moment with the worst possible wording.</p>
   <p className="strong">Please don't stay angry? 🥹</p>
   <div className="actions">
    <button className="continue accept" onClick={()=>setAccepted(true)}><Heart size={18}/> Okay, forgiven</button>
    <button className="not" style={{transform:`translate(${no.x}px,${no.y}px)`}} onMouseEnter={jump} onClick={jump}>Not yet 😤</button>
   </div>
   {noMsg&&<div className="noMsg">The cat is crying harder now 😭<br/>That button has decided to run away.</div>}
   <div className="footnote">please accept this tiny apology 🐱💧</div>
  </section></main>
  <footer>made with code, chaos & a sincere apology</footer>
 </div>;

 return <div className="app">
  <header><div className="logo">💌 tiny apology department</div><div className="progress">{pages.map((_,i)=><span className={i<=page?"active":""} key={i}/>)}</div></header>
  <main><section className="card" key={page}>
   <button className="back" onClick={back} disabled={page===0}><ArrowLeft size={15}/> Back</button>
   <div className="emoji">{pages[page].emoji}</div><div className="tag">{pages[page].tag}</div>
   <h1>{pages[page].title}</h1><p>{pages[page].text}</p>
   <div className="actions">
    <button className="continue" onClick={()=>setPage(page+1)}>{pages[page].go}<ArrowRight size={18}/></button>
    <button className="not" style={{transform:`translate(${no.x}px,${no.y}px)`}} onMouseEnter={jump} onClick={jump}>exit 😤</button>
   </div>
   {noMsg&&<div className="noMsg">Nice try 😭<br/>That button has other plans.</div>}
   <div className="footnote">one tiny click at a time ✨</div>
  </section></main><footer>made with code, chaos & a sincere apology</footer>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);