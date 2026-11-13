import './style.css'
import mapacheImg from './assets/mapache.png'
import typescriptLogo from './assets/sombrero.png'
import viteLogo from './assets/monoculo.png'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${mapacheImg}" class="base" width="170" height="179">
    <img src="${typescriptLogo}" class="framework" alt="TypeScript logo"/>
    <img src="${viteLogo}" class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Firdaus Abouhafsse</h1>
    <p>He cambiado el <code>src/style.css</code> para cambiar los logos de <code>assets</code></p>
  </div>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
    <h2>Hola, soy un mapache sofisticado que viste sombrero y monóculo</h2>
    <p>Si quieres preguntar algo entra en: </p>
    <ul>
      <li>
        <a href="https://www.magnific.com/es/fotos-vectores-gratis/formularios" target="_blank">
          <img class="logo" src="${viteLogo}" alt="" />
          Preguntas
        </a>
      </li>
    </ul>
  </div>
  <div id="social">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
    <h2>Más sitos donde encontrarme: </h2>
    <ul>
      <li><a href="https://github.com/vitejs/vite" target="_blank"><use href="/icons.svg#github-icon"></use></svg>🦝 GitHub</a></li>
      <li><a href="https://chat.vite.dev/" target="_blank"><use href="/icons.svg#discord-icon"></use></svg>🦝 Discord</a></li>
      <li><a href="https://x.com/vite_js" target="_blank"><use href="/icons.svg#x-icon"></use></svg>🦝 X.com</a></li>
      <li><a href="https://bsky.app/profile/vite.dev" target="_blank"><use href="/icons.svg#bluesky-icon"></use></svg>🦝  Bluesky</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`

