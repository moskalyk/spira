import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let count = 0
let evolveCount = 0
function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [view, setView] = useState(0)
  const [spirits, setSpirits] = useState([])
  const [spirit, setSpirit] = useState<any>(null)
  const exploredSpirit = {
    name: 'tester',
    attributes: [
      {"attribute":"Strength","value":8},
      {"attribute":"Speed","value":6},
      {"attribute":"Fire Resistance","value":10},
      {"attribute":"Intelligence","value":4},
      {"attribute":"Agility","value":5}
    ],
    image: 'https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }

  const tempSpirits = [
  {
    name: 'tester',
    attributes: [
      {"attribute":"Strength","value":8},
      {"attribute":"Speed","value":6},
      {"attribute":"Fire Resistance","value":10},
      {"attribute":"Intelligence","value":4},
      {"attribute":"Agility","value":5}
    ],
    image: 'https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'tester',
    attributes: [
      {"attribute":"Strength","value":8*(2*Math.random())},
      {"attribute":"Speed","value":6*(2*Math.random())},
      {"attribute":"Fire Resistance","value":10*(2*Math.random())},
      {"attribute":"Intelligence","value":4*(2*Math.random())},
      {"attribute":"Agility","value":5*(2*Math.random())}
    ],
    image: 'https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
]
  const [appearedAttributesList, setAppearedAttributesList] = useState(null)
  
  useEffect(() => {

  }, [spirits])
  const evolveSpirits = (indexUpdate: any) => {
    console.log(tempSpirits)
    const updatedSpirits: any = tempSpirits.map((spirit: any, index: any) => {
    console.log(indexUpdate)
    console.log(index)
    console.log(spirit)
      if(indexUpdate == index){
        const updatedAttributes = spirit.attributes.map((attribute: any) => {
          const newValue = (parseFloat(attribute.value) * (1 + Math.random() * 0.1)).toPrecision(2);
          return (
            <li>
              <span style={{ color: 'black' }}>{attribute.attribute}</span>
              <span className="dots"></span>
              <span style={{ color: 'black' }}>{newValue}</span>
            </li>
          );
        });
        
        return (
          <div style={{ position: 'relative', height: '700px' }}>
            <span className='tabs' style={{ borderBottom: 'none', display: 'block', marginBottom: '20px', textAlign: 'center' }}>{spirit.name}</span>
            <div id="container" style={{ marginBottom: '20px', textAlign: 'center' }}>
              <img src={spirit.image} alt="Image" style={{ width: '400px', height: 'auto', marginBottom: '20px' }} />
              <div className="container-1">
                <ul className="attribute-list">
                  {updatedAttributes}
                </ul>
              </div>
            </div>
            <button onClick={() => { evolveSpirits(index);}} style={{ background: 'purple', color: 'white', width: '150px', position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>
              evolve
            </button>
          </div>
        );
      } else {
        const updatedAttributes = spirit.attributes.map((attribute: any) => {
          return (
            <li key={attribute.key}>
              <span style={{ color: 'black' }}>{attribute.attribute}</span>
              <span className="dots"></span>
              <span style={{ color: 'black' }}>{attribute.value.toPrecision(2)}</span>
            </li>
          );
        });
        
        return (
          <div style={{ position: 'relative', height: '700px' }}>
            <span className='tabs' style={{ borderBottom: 'none', display: 'block', marginBottom: '20px', textAlign: 'center' }}>{spirit.name}</span>
            <div id="container" style={{ marginBottom: '20px', textAlign: 'center' }}>
              <img src={spirit.image} alt="Image" style={{ width: '400px', height: 'auto', marginBottom: '20px' }} />
              <div className="container-1">
                <ul className="attribute-list">
                  {updatedAttributes}
                </ul>
              </div>
            </div>
            <button onClick={() => { evolveSpirits(index);}} style={{ background: 'purple', color: 'white', width: '150px', position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>
              evolve
            </button>
          </div>
        );
      }
      
    });
    evolveCount++
    setSpirits(updatedSpirits);
  };

  useEffect(() => {
    if(view == 1){

      var canvas: any = document.getElementById('test'),
          ctx = canvas.getContext('2d'),
          stack: any = [],
          w = window.innerWidth,
          h = window.innerHeight;

      var drawer = function(){
        ctx.fillStyle = "#CFECF7"; // Set background color to sky blue
        ctx.fillRect(0, 0, w, h);
        stack.forEach(function(el: any){
            el();
        })
        requestAnimationFrame(drawer);
      }

      var anim = function(){
        var x = 0, y = 0;
        var maxTall = Math.random() * 100 + 200;
        var maxSize = Math.random() * 10 + 5;
        var speed = Math.random() * 2;  
        var position = Math.random() * w - w / 2;
        var c = function(l: any, u: any){ return Math.round(Math.random() * (u || 255) + l || 0); }
        var color = 'rgb(' + c(60, 10) + ',' + c(201, 50) + ',' + c(120, 50) + ')';
        return function(){
          var deviation = Math.cos(x / 30) * Math.min(x / 40, 50),
              tall = Math.min(x / 2, maxTall),
              size = Math.min(x / 50, maxSize);
          x += speed;
          ctx.save();
          ctx.strokeWidth = 10;
          ctx.translate(w / 2 + position, h);
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.lineTo(-size, 0);
          ctx.quadraticCurveTo(-size, -tall / 2, deviation, -tall);
          ctx.quadraticCurveTo(size, -tall / 2, size, 0);
          ctx.fill();
          ctx.restore();
        }    
      };

      for (var x = 0; x < 400; x++) { stack.push(anim()); }
      canvas.width = w;
      canvas.height = h;
      drawer();
      const data = [
          {"attribute":"Strength","value":8},
          {"attribute":"Speed","value":6},
          {"attribute":"Fire Resistance","value":10},
          {"attribute":"Intelligence","value":4},
          {"attribute":"Agility","value":5}
      ];

      if(count == 0){
          count++
          const attributes: any = []
          data.forEach(item => {
            attributes.push(<li><span style={{color: 'black'}}>{item.attribute}</span><span className="dots"></span><span style={{color: 'black'}}>{item.value.toPrecision(2)}</span></li>)
          });
          setAppearedAttributesList(attributes)
      }
    } else if(view == 2 && evolveCount == 0) {
      console.log('evolving')
      const tempLocalSpirits: any= []

      tempSpirits.map((spirit: any, index: any) => {
        const tempAttributes = spirit.attributes

        const attributes: any = []
        tempAttributes.forEach((item: any) => {
          attributes.push(<li><span style={{color: 'black'}}>{item.attribute}</span><span className="dots"></span><span style={{color: 'black'}}>{item.value.toPrecision(2)}</span></li>)
        });

        tempLocalSpirits.push(
          <div style={{ position: 'relative', height: '700px'}}>
            <span className='tabs' style={{ borderBottom: 'none', display: 'block', marginBottom: '20px', textAlign: 'center' }}>{spirit.name}</span>
            <div id="container" style={{ marginBottom: '20px', textAlign: 'center' }}>
              <img src={spirit.image} alt="Image" style={{ width: '400px', height: 'auto', marginBottom: '20px' }}/>
              <div className="container-1">
                <ul className="attribute-list">
                  {attributes}
                </ul>
              </div>
            </div>
            <button onClick={() => {evolveSpirits(index)}}style={{ background: 'purple', color: 'white', width: '150px', position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>
              evolve
            </button>
          </div>
        );
        evolveCount++
        setSpirits(tempLocalSpirits);
        
    })
  }

  }, [view, spirits])

  const signIn = () => {
    setView(1)
  }
  useEffect(() => {

  }, [spirit, spirits])
  return (
    <>
      {
    view > 0 && (
        <div style={{
            position: 'fixed',  // Fixes the position relative to the viewport
            left: '50%',        // Moves the left edge to the middle of the screen
            transform: 'translateX(-50%)',  // Corrects the centering by moving left by half the width
            top: '30px'         // Positioned 30px from the top
        }}>
            <span className="tabs" onClick={() => {count =0;setView(1)}} style={{
                borderBottom: view === 1 ? '1px solid lime' : 'none'  // Conditional styling for 'feed'
            }}>world</span>

            <span className="tabs" onClick={() => setView(2)} style={{
                borderBottom: view === 2 ? '1px solid lime' : 'none'  // Conditional styling for 'profile'
            }}>spirits</span>
        </div>
    )
}
{
  view == 0 ?
    <>
      <div id="center-container">
        <h1>spira</h1>
        <p>evolve AI spirits</p>
        <br/>
        <button style={{color: 'white', background: 'purple'}} onClick={() => signIn()}>sign in</button>
      </div>
    </>
  : 
    view == 1 
  ?
    <>
      <canvas id="test"></canvas>
      {
        spirit && <><span className='tabs' style={{borderBottom: 'none', position: 'fixed', top: '80px', left: '50%', transform: 'translateX(-50%)'}}>{spirit!.name!}</span>
      <div id="container" style={{marginTop:'20px'}}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <img src={spirit.image} alt="Image"/>
        <div className="container-1">
          <ul className="attribute-list">
          {spirit.attributes.map((item: any) => {
              return <li><span style={{color: 'black'}}>{item.attribute}</span><span className="dots"></span><span style={{color: 'black'}}>{item.value.toPrecision(2)}</span></li>
            })}
          </ul>
        </div>
      </div>
      </>
      }
      <button onClick={() => {setSpirit(null);setIsLoading(true); setTimeout(() => {setSpirit(exploredSpirit);setIsLoading(false)}, 2000)}}style={{background: 'purple', color: 'white', width: '150px', position: 'fixed', bottom: '30px', left: '50%', transform: 'translateX(-50%)'}}>{isLoading ? <div className="spinner"></div> : 'search'}</button>
    </>
  :
      <>
      <div className='sky'>
        <div className='clouds'>
          <div className='clouds-1'></div>
          <div className='clouds-2'></div>
          <div className='clouds-3'></div>
        </div>
      </div>
      <div className="spirit-grid">
        {spirits}
      </div>
      
      </>
    }
    </>
  )
}

export default App
