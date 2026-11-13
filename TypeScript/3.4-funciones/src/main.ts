import './style.css'
import './funciones.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <h1>Calculadora </h1>
  
  <body>
    <section>
      <nav>
        <input name="resultado" readonly> 
      </nav>
      <nav>
        <button id='7'>7</button>
        <button id='8'>8</button>
        <button id='9'>9</button>
        <button id='x'>X</button>
      </nav>

      <nav>
        <button id='4'>4</button>
        <button id='5'>5</button>
        <button id='6'>6</button>
        <button id='-'>-</button>
      </nav>
    
      <nav>
        <button id='1'>1</button>
        <button id='2'>2</button>
        <button id='3'>3</button>
        <button id='+'>+</button>
      </nav>

      <nav id='a'>
        <button id='0'>0</button>
        <button id=','>,</button>
        <button id='/'>/</button>
        <button id='equals'>=</button>
      </nav>
    </section>  
  </body>
</section>
`


