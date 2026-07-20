import "./Particles.css";

function Particles() {

const particles = Array.from({length:80});

return(

<div className="particles">

{

particles.map((_,index)=>(

<span

key={index}

className="particle"

style={{

left:`${Math.random()*100}%`,

animationDelay:`${Math.random()*5}s`,

animationDuration:`${5+Math.random()*5}s`

}}

>

✨

</span>

))

}

</div>

)

}

export default Particles;