const html = String.raw

interface Data {
  loading?: string
  appName: string
}

export default (data: Data) => {
  const templateHtml = html`
    <!DOCTYPE html>
      <html class="h-full" lang="en">
        <head>
          <title>${data.appName}</title>
          <meta charset="utf-8">
          <meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport">
          <style>
            html {
              line-height: 1.15;
              -webkit-text-size-adjust: 100%;
            }
            body {
              margin: 0;
            }
            main {
              display: block;
            }
            
            h1 {
              font-size: 2em;
              margin: 0.67em 0;
            }
            hr {
              box-sizing: content-box;
              height: 0;
              overflow: visible;
            }
            pre {
              font-family: monospace, monospace;
              font-size: 1em;
            }
            a {
              background-color: transparent;
            }
            abbr[title] {
              border-bottom: none;
              text-decoration: underline;
              text-decoration: underline dotted;
            }
            b,
            strong {
              font-weight: bolder;
            }
            code,
            kbd,
            samp {
              font-family: monospace, monospace;
              font-size: 1em;
            }
            small {
              font-size: 80%;
            }
            sub,
            sup {
              font-size: 75%;
              line-height: 0;
              position: relative;
              vertical-align: baseline;
            }
            sub {
              bottom: -0.25em;
            }
            sup {
              top: -0.5em;
            }
            img {
              border-style: none;
            }
            button,
            input,
            optgroup,
            select,
            textarea {
              font-family: inherit;
              font-size: 100%;
              line-height: 1.15;
              margin: 0;
            }
            button,
            input {
              overflow: visible;
            }
            button,
            select {
              text-transform: none;
            }
            button,
            [type="button"],
            [type="reset"],
            [type="submit"] {
              -webkit-appearance: button;
            }
            button::-moz-focus-inner,
            [type="button"]::-moz-focus-inner,
            [type="reset"]::-moz-focus-inner,
            [type="submit"]::-moz-focus-inner {
            border-style: none;
              padding: 0;
            }
            button:-moz-focusring,
            [type="button"]:-moz-focusring,
            [type="reset"]:-moz-focusring,
            [type="submit"]:-moz-focusring {
              outline: 1px dotted ButtonText;
            }
            fieldset {
              padding: 0.35em 0.75em 0.625em;
            }
            legend {
              box-sizing: border-box;
              color: inherit;
              display: table;
            max-width: 100%;
              padding: 0;
              white-space: normal;
            }
            progress {
              vertical-align: baseline;
            }
            textarea {
              overflow: auto;
            }
            [type="checkbox"],
            [type="radio"] {
              box-sizing: border-box;
              padding: 0;
            }
            [type="number"]::-webkit-inner-spin-button,
            [type="number"]::-webkit-outer-spin-button {
              height: auto;
            }
            [type="search"] {
            -webkit-appearance: textfield;
              outline-offset: -2px;
            }
            [type="search"]::-webkit-search-decoration {
              -webkit-appearance: none;
            }
            ::-webkit-file-upload-button {
              -webkit-appearance: button;
              font: inherit;
            }
            details {
              display: block;
            }
            summary {
              display: list-item;
            }
            template {
              display: none;
            }
            [hidden] {
              display: none;
            }

            .nuxt-loader-bar {
              background: repeating-linear-gradient(to right, #FFF720 10%, #3CD500 100%);
              background-size: 200% auto;
              background-position: 0 0;
              animation: gradient 2s infinite;
              animation-fill-mode: forwards;
              animation-timing-function: linear;
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
            }
            .mouse-lighting{
              position:absolute;
              border-radius: 9999px;
              transition-property: opacity;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 150ms;
              height:100px;
              width:300px;
            }

            .visual-effects{
              position:relative;
              overflow:hidden;
              min-height:100vh;
              background:white;
              display:flex;
              flex-direction:column;
              align-items:center;
              text-align:center;
              justify-content:center;
              width:100%;
            }
            @media (prefers-color-scheme: dark) {
               .visual-effects{
                 background:#222222;
               }
            }
            .h-full{
              height:100vh;
            }
            .logo-wrapper{
              display:flex;
              flex-direction:column;
              height:100%;
              align-items:center;
              justify-content:center;
            }
            .visual-effects .nuxt-loader-bar {
              height: 100px;
              bottom: -50px;
              left: -50px;
              right: -50px;
              filter: blur(100px);
            }
            .visual-effects .mouse-gradient {
              background: repeating-linear-gradient(to right, #FFF720 10%, #3CD500 100%);
              filter: blur(70px);
              opacity: 0.5;
            }
            .nuxt-logo{
              margin:0 auto;
              z-index: 20;
            }
            #animation-toggle {
              position: fixed;
              padding: 10px;
              top: 0;
              right: 0;
              transition: opacity 0.4s ease-in;
              opacity: 0;
            }
            #animation-toggle:hover {
              opacity: 0.8;
            }
            @keyframes gradient {
              0% {
                background-position: 0 0;
              }
              100% {
                background-position: -200% 0;
              }
            }
            @keyframes width {
              0% {
                width: 100%;
              }
              50% {
                width: 0;
              }
              100% {
                width: 100%;
              }
            }
            @media (prefers-color-scheme: dark) {
              html, body {
                color: white;
                color-scheme: dark;
              }
              .nuxt-loader-bar {
                opacity: 0.8;
              }
            }
          </style>
        </head>

        <body class="visual-effects">
          <div id="mouseLight" class="mouse-lighting mouse-gradient"></div>
              <a href="https://nuxt.com" target="_blank" rel="noopener" class="nuxt-logo z-20">
                <svg id="nuxtImg" width="300" height="100" viewBox="0 0 114 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.57 5.14H3.83V10.03H10.64V12.73H3.83V19H0.89V2.5H11.57V5.14ZM24.2 19.03H22.22L21.86 18.19C21.1 18.55 20.45 18.82 19.91 19C19.39 19.18 18.79 19.27 18.11 19.27C16.37 19.27 15.23 18.77 14.69 17.77C14.17 16.75 13.91 15.51 13.91 14.05V7.48H16.76V14.44C16.76 15.06 16.91 15.61 17.21 16.09C17.51 16.57 18.06 16.81 18.86 16.81C19.74 16.81 20.58 16.58 21.38 16.12V7.48H24.2V19.03ZM27.0819 7.48H29.1219L29.4819 8.32C30.5419 7.64 31.6719 7.3 32.8719 7.3C33.6119 7.3 34.3119 7.45 34.9719 7.75L34.4019 10.36L34.2819 10.39C33.6019 9.99 32.7819 9.79 31.8219 9.79C31.1619 9.79 30.5319 9.9 29.9319 10.12V19H27.0819V7.48ZM36.6444 7.48H38.6844L39.0444 8.32C40.4044 7.66 41.7344 7.33 43.0344 7.33C44.2544 7.33 45.1644 7.6 45.7644 8.14C46.3844 8.68 46.7744 9.31 46.9344 10.03C47.1144 10.75 47.2044 11.56 47.2044 12.46V19H44.3544V12.1C44.3544 11.5 44.2044 10.96 43.9044 10.48C43.6044 10 43.0644 9.76 42.2844 9.76C41.5844 9.76 40.6544 9.97 39.4944 10.39V19H36.6444V7.48ZM50.0637 19V7.48H52.9437V19H50.0637ZM50.2137 4.99C50.5737 5.35 51.0037 5.53 51.5037 5.53C52.0238 5.53 52.4538 5.35 52.7937 4.99C53.1537 4.63 53.3337 4.2 53.3337 3.7C53.3337 3.18 53.1537 2.75 52.7937 2.41C52.4538 2.05 52.0238 1.87 51.5037 1.87C51.0037 1.87 50.5737 2.05 50.2137 2.41C49.8537 2.75 49.6737 3.18 49.6737 3.7C49.6737 4.2 49.8537 4.63 50.2137 4.99ZM112.841 4.42C113.161 5.16 113.321 5.97 113.321 6.85C113.321 7.75 113.161 8.57 112.841 9.31C112.541 10.05 112.101 10.69 111.521 11.23C110.961 11.77 110.311 12.18 109.571 12.46C108.831 12.74 108.031 12.88 107.171 12.88C106.291 12.88 105.471 12.74 104.711 12.46C103.971 12.18 103.331 11.77 102.791 11.23C102.211 10.69 101.761 10.05 101.441 9.31C101.141 8.57 100.991 7.75 100.991 6.85C100.991 5.97 101.141 5.16 101.441 4.42C101.761 3.68 102.211 3.03 102.791 2.47C103.331 1.95 103.971 1.55 104.711 1.27C105.471 0.990001 106.291 0.850001 107.171 0.850001C108.031 0.850001 108.831 0.990001 109.571 1.27C110.311 1.55 110.961 1.95 111.521 2.47C112.101 3.03 112.541 3.68 112.841 4.42ZM110.681 10.39C111.561 9.53 112.001 8.35 112.001 6.85C112.001 5.41 111.551 4.24 110.651 3.34C109.791 2.52 108.631 2.11 107.171 2.11C105.711 2.11 104.551 2.52 103.691 3.34C102.791 4.24 102.341 5.41 102.341 6.85C102.341 8.35 102.781 9.53 103.661 10.39C104.541 11.23 105.711 11.65 107.171 11.65C108.631 11.65 109.801 11.23 110.681 10.39ZM109.061 4.15C109.461 4.51 109.661 4.98 109.661 5.56C109.661 6.44 109.241 7.04 108.401 7.36L109.691 10H108.521L107.381 7.57H106.061V10H104.981V3.61H107.531C108.151 3.61 108.661 3.79 109.061 4.15ZM108.221 6.43C108.501 6.25 108.641 5.97 108.641 5.59C108.641 5.29 108.541 5.05 108.341 4.87C108.141 4.69 107.861 4.6 107.501 4.6H106.061V6.7H107.201C107.601 6.7 107.941 6.61 108.221 6.43Z" fill="#393737"/>
                  <path d="M67.2162 9.43V2.5H70.1262V19H67.2162V12.1H59.2363V19H56.2962V2.5H59.2363V9.43H67.2162ZM83.7078 19.03H81.7278L81.3678 18.19C80.6078 18.55 79.9578 18.82 79.4178 19C78.8978 19.18 78.2978 19.27 77.6178 19.27C75.8778 19.27 74.7378 18.77 74.1978 17.77C73.6778 16.75 73.4178 15.51 73.4178 14.05V7.48H76.2678V14.44C76.2678 15.06 76.4178 15.61 76.7178 16.09C77.0178 16.57 77.5678 16.81 78.3678 16.81C79.2478 16.81 80.0878 16.58 80.8878 16.12V7.48H83.7078V19.03ZM86.7697 19V2.5H89.6497V7.78C90.3697 7.46 91.2797 7.3 92.3797 7.3C93.2997 7.3 94.1797 7.5 95.0197 7.9C95.8797 8.3 96.5897 8.95 97.1497 9.85C97.7097 10.73 97.9897 11.87 97.9897 13.27C97.9897 15.13 97.4697 16.6 96.4297 17.68C95.4097 18.74 93.9697 19.27 92.1097 19.27C91.0897 19.27 90.0697 18.97 89.0497 18.37L88.8097 19H86.7697ZM95.0497 13.42C95.0497 10.84 93.9397 9.55 91.7197 9.55C90.9397 9.55 90.2497 9.68 89.6497 9.94V16.45C90.2097 16.83 90.8697 17.02 91.6297 17.02C92.6497 17.02 93.4697 16.74 94.0897 16.18C94.7297 15.6 95.0497 14.68 95.0497 13.42Z" fill="#3AA39F"/>
                </svg>
              </a>
              <button id="animation-toggle">Animation Enabled</button>
              <div class="nuxt-loader-bar"></div>
          </div>

          <script>
            const ANIMATION_KEY = 'nuxt-loading-enable-animation'
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

            let isLowPerformance = checkIsLowPerformance()
            let enableAnimation = localStorage.getItem(ANIMATION_KEY) === 'false' ? false : localStorage.getItem(ANIMATION_KEY) === 'true' ? true : !isLowPerformance

            document.addEventListener('DOMContentLoaded', () => {
              const mouseLight = window.document.getElementById('mouseLight')
              const nuxtImg = window.document.getElementById('nuxtImg')
              let bodyRect;
              
              window.document.getElementById('animation-toggle').addEventListener('click', () => toggleAnimation(), { passive: true})
              window.document.body.addEventListener('mousemove', onMouseMove, { passive: true });
              window.document.body.addEventListener('mouseleave', onFocusOut, { passive: true })

              toggleAnimation(enableAnimation)
            });    

            function checkIsLowPerformance() {
              return window.matchMedia('(prefers-reduced-motion: reduce)').matches
              || navigator.hardwareConcurrency < 2
              || navigator.deviceMemory < 1
              || isSafari
            }
            function calculateDistance(elem, mouseX, mouseY) {
              return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.x + (elem.width / 2)), 2) + Math.pow(mouseY - (elem.top + (elem.height / 2)), 2)));
            }
            function onFocusOut() {
              if (!enableAnimation) {
                return
              }

              nuxtImg.style.opacity = 0.7
            }
            
            function onMouseMove(e) {
              if (!enableAnimation) {
                return;
              }

              const pointerRect = nuxtImg.getBoundingClientRect();
              
              if (typeof bodyRect === 'undefined') {
                bodyRect = window.document.body.getBoundingClientRect();
              } 
              if (!bodyRect) {
                bodyRect = window.document.body.getBoundingClientRect()
              }

              const distance = calculateDistance(pointerRect, e.pageX, e.pageY);
              const size = Math.max((1000 - distance) / 2 / 100, 1);

              mouseLight.style.top = (e.clientY - bodyRect.y - mouseLight.clientHeight / 2) + 'px';
              mouseLight.style.left = (e.clientX - mouseLight.clientWidth / 2) + 'px';
              mouseLight.style.width = mouseLight.style.height = Math.max(Math.round(size * 100), 300) + 'px';
              mouseLight.style.filter = 'blur('+Math.min(Math.max(size * 50, 100), 160) + 'px)';


              const dx = e.pageX - pointerRect.left;
              const dy = e.pageY - pointerRect.top;
              const logoGradient = 'radial - gradient(circle at' + dx+ 'px' + dy + 'px, black 65 %, transparent 100 %)';

              nuxtImg.style['-webkit-mask-image'] = logoGradient;
              nuxtImg.style['mask-image'] = logoGradient;
              nuxtImg.style.opacity = Math.min(Math.max(size / 4, 0.7), 1);
            }

           function toggleAnimation(value = !enableAnimation) {
              enableAnimation = value
              document.body.classList.toggle('visual-effects', enableAnimation)
              let animationToggle = window.document.getElementById('animation-toggle')
              if (value) {
                onFocusOut()
                animationToggle.innerText = 'Animation Enabled'
              } else {
                mouseLight.style.opacity = 0
                nuxtImg.style.opacity = 1
                nuxtImg.style['mask-image'] = ''
                nuxtImg.style['-webkit-mask-image'] = ''
                animationToggle.innerText = 'Animation Disabled'
              }
            }

            

            if (typeof window.fetch === 'undefined') {
              setTimeout(() => window.location.reload(), 1000)
            } else {
              const check = async () => {
                try {
                  const body = await window
                    .fetch(window.location.href)
                    .then(r => r.text())
                  if (!body.includes('__NUXT_LOADING__')) {
                    return window
                      .location
                      .reload()
                  }
                } catch  {}
                setTimeout(check, 1000)
              }
              check()
            }
          </script>
        </body>
      </html>
  `
  return templateHtml
}
