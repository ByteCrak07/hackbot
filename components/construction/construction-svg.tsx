import { FC } from 'react'

const ConstructionSVG: FC = () => (
  <div>
    <style jsx>
      {`
        @keyframes swinging {
          0% {
            transform: rotate(10deg);
          }
          50% {
            transform: rotate(-5deg);
          }
          100% {
            transform: rotate(10deg);
          }
        }

        @keyframes gear-spin {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .swing-img {
          transform-origin: 58.2% 120.5%;
          animation: swinging 3.5s ease-in-out forwards infinite;
        }

        .gear-1 {
          transform-origin: 34.25% 114.3%;
          animation: gear-spin 3.5s linear forwards infinite;
        }

        .gear-2 {
          transform-origin: 37.38% 108.68%;
          animation: gear-spin 3.5s linear reverse infinite;
        }

        .minute-hand {
          transform-origin: 48.34% 109.25%;
          animation: gear-spin 10s linear reverse infinite;
        }

        .hour-hand {
          transform-origin: 48.34% 109.25%;
          animation: gear-spin 100s linear reverse infinite;
        }
      `}
    </style>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 300">
      <defs>
        <clipPath id="a" clipPathUnits="userSpaceOnUse">
          <path d="M-6.44 500h500V0h-500v500z" />
        </clipPath>
      </defs>
      <g>
        <g>
          <g
            clipPath="url(#a)"
            transform="matrix(1.11022 0 0 -1.11022 -44.117 460.077)"
          >
            <path
              fill="#6cdd6c"
              d="M310.06 162.4c-.54 1.76-1.77 3.41-3.53 3.98-1.76.56-3.98-.29-4.53-2.05-1.62 1.35-4.09.28-5.39-1.38-2.1-2.68-.47-7.07-.12-7.35.37-.31 1.4-.25 1.4-.25l15.7.08s2.89.21 4.22.74c2.67 1.07 4.49 5.67 2.77 7.98-1.17 1.58-3.49 1.91-5.36 1.31-1.87-.59-3.69-1.76-5.16-3.06"
            />
            <path
              fill="#50aa50"
              d="M300.27 164.42c-.1 0-.19-.01-.29-.02-1.04-.11-2.21-.8-2.96-1.77-1.85-2.35-.47-6.27-.17-6.67.07-.05.59-.12 1.01-.1l15.73.09c-.01 0 2.78.21 4.02.71 1.25.49 2.41 1.98 2.89 3.69.4 1.4.27 2.67-.34 3.49-1.1 1.48-3.25 1.62-4.79 1.13-1.63-.52-3.4-1.57-4.97-2.96a.51.51 0 0 0-.49-.11c-.17.05-.3.18-.35.35-.56 1.81-1.75 3.17-3.19 3.64-.82.26-1.78.17-2.58-.24-.65-.34-1.11-.87-1.3-1.48a.52.52 0 0 0-.83-.24c-.39.32-.85.49-1.39.49m-2.61-9.6c-.4 0-1.11.05-1.51.38-.61.5-2.18 5.23.05 8.07.94 1.19 2.34 2.02 3.67 2.16.69.08 1.34-.04 1.9-.33.33.61.87 1.11 1.55 1.47 1.03.53 2.29.65 3.36.3 1.57-.5 2.88-1.82 3.61-3.59 1.53 1.24 3.2 2.18 4.77 2.68 1.87.6 4.53.38 5.93-1.5.81-1.08.99-2.68.51-4.39-.58-2.04-1.95-3.76-3.51-4.38-1.38-.55-4.24-.76-4.36-.77l-15.74-.09c-.05-.01-.13-.01-.23-.01m-4.12 8.17c-.45-.88-.64-1.82-.54-2.8.06-.5.84-.5.78 0-.09.84.04 1.65.43 2.41.23.44-.44.84-.67.39m-2.27-.62c-.25-.88-.26-1.76-.07-2.65.11-.49.86-.28.75.21-.16.75-.14 1.49.07 2.23.13.49-.62.69-.75.21m4.37 1.58c.5 0 .5.78 0 .78s-.5-.78 0-.78"
            />
            <path
              fill="#50aa50"
              d="M297.84 160.19v-.69c0-.5.78-.5.78 0v.69c0 .5-.78.5-.78 0m13.14-1.21v-.35c0-.5.78-.5.78 0v.35c0 .5-.78.5-.78 0m-1.45.93.18-.16c.36-.37.91.19.55.55l-.17.17c-.36.34-.9-.2-.56-.56"
            />
            <path
              fill="#405b91"
              d="M88.52 177.06H62.19c-.57 0-1.04.46-1.04 1.04 0 .57.47 1.03 1.04 1.03h26.33c.57 0 1.04-.46 1.04-1.03 0-.58-.47-1.04-1.04-1.04"
            />
            <path
              fill="#fff"
              d="M320.36 268.37h-.75c0 .62-.51 1.13-1.13 1.13-.62 0-1.13-.51-1.13-1.13h-.75c0 1.04.84 1.88 1.88 1.88s1.88-.84 1.88-1.88m2.69 43.79h-.75c0 .62-.51 1.13-1.13 1.13-.62 0-1.13-.51-1.13-1.13h-.75c0 1.04.84 1.88 1.88 1.88s1.88-.84 1.88-1.88"
            />
            <path
              fill="#415b91"
              d="M196.75 162.08h29.9c-1.15 4.35-1.93 10.64-2.09 14.26l-25.92-.08c.24-4.83-.06-9.22-1.89-14.18m32.7-2.07h-35.79l.61 1.44c2.34 5.56 2.59 10.33 2.23 15.77l-.07 1.1 30.17.1.01-1.04c.02-3.51.98-11.51 2.41-16.02l.43-1.35z"
            />
            <path
              fill="#415b91"
              d="M132.98 280.39c-2.35 0-4.31-1.84-4.49-4.22-1.31-17.75-.29-49.93.45-73.43.25-7.82.46-14.56.55-19.53.02-1.44 2.43-4.13 4.3-4.79 3.33-.68 150.59-.18 154.41.54 4.7.93 4.91 5.55 5.11 10.03.05 1.03.09 2.03.2 2.94 2.49 21.98 1.75 45.28 1.03 67.82-.17 5.4-.34 10.73-.46 15.95-.06 2.46-1.99 4.41-4.4 4.46l-156.63.23h-.07zm50.39-104.03c-27.17 0-49.18.14-50.14.49-2.33.83-5.37 4.05-5.41 6.34-.09 4.95-.3 11.69-.55 19.49-.74 23.54-1.76 55.78-.44 73.62.24 3.25 2.93 5.76 6.14 5.76h.1l156.63-.24c3.31-.05 5.97-2.73 6.05-6.08.12-5.21.29-10.54.46-15.94.72-22.59 1.46-45.96-1.05-68.06-.09-.87-.14-1.83-.18-2.83-.21-4.63-.48-10.41-6.45-11.58-2.92-.58-60.89-.97-105.16-.97"
            />
            <path
              fill="#b6d0fb"
              fillRule="evenodd"
              d="m285.32 276.43-147.58.19c-2.65.04-4.88-1.78-5.08-4.15-1.65-19.76.6-60.97.94-77.56.03-1.61 2.67-4.04 4.57-4.64 2.24-.7 142.48-.17 145.91.43 6.15 1.07 5.1 7.38 5.62 11.41 2.92 22.82 1.13 47.61.55 69.92-.07 2.42-2.24 4.36-4.93 4.4"
            />
            <path
              fill="#415b91"
              d="M180.84 160.29c-1.61 0-2.04-1.35-2.04-2.15 0-.79.43-2.14 2.04-2.14h61.4c1.62 0 2.05 1.35 2.05 2.15 0 .79-.43 2.14-2.05 2.14h-61.4zm61.4-5.96h-61.4c-2.44 0-3.71 1.92-3.71 3.81 0 1.9 1.27 3.82 3.71 3.82h61.4c2.44 0 3.72-1.92 3.72-3.81 0-1.9-1.28-3.82-3.72-3.82"
            />
            <path
              fill="#415b91"
              fillRule="evenodd"
              d="M138.08 184.31c-.36 0-.36 0 0 0"
            />
            <path
              fill="#415b91"
              d="M138.08 182.17c2.76 0 2.76 4.29 0 4.29s-2.76-4.29 0-4.29"
            />
            <path
              fill="#415b91"
              fillRule="evenodd"
              d="M146.72 184.31c-.36 0-.36 0 0 0"
            />
            <path
              fill="#415b91"
              d="M146.72 182.17c2.76 0 2.76 4.29 0 4.29s-2.76-4.29 0-4.29"
            />
            <path
              fill="#415b91"
              fillRule="evenodd"
              d="M155.36 184.31c-.36 0-.36 0 0 0"
            />
            <path
              fill="#415b91"
              d="M155.36 182.17c2.76 0 2.76 4.29 0 4.29s-2.76-4.29 0-4.29"
            />
            <path
              fill="#415b91"
              fillRule="evenodd"
              d="M211.54 278.71c-.17 0-.17 0 0 0"
            />
            <path
              fill="#415b91"
              d="M211.54 277.71c1.29 0 1.3 2.01 0 2.01-1.29 0-1.3-2.01 0-2.01"
            />
            <path
              fill="#b6d0fb"
              d="M384.72 158.4h-21.16l8.14 26.73h4.88l8.14-26.73zm1.74 0h-24.65v-3.05h24.66l-.01 3.05z"
            />
            <path
              fill="#415b91"
              d="m365.59 165.08-2.03-6.68h21.15l-2.03 6.68h-17.09zm2.04 6.68h13.02l-2.03 6.68h-8.96l-2.03-6.68z"
            />
            {/* gear */}
            <path
              fill="#b6d0fb"
              className="gear-1"
              d="m398.6,186.7zm-244.42,150.38a5.82,5.82 0 1 0 0,11.64a5.82,5.82 0 0 0 0,-11.64m8.26,-3.85l1.41,1.4c0.29,0.29 0.29,0.75 0,1.04l-1.23,1.22c-0.28,0.29 -0.35,0.8 -0.16,1.16l1,2.42c0.11,0.39 0.53,0.7 0.94,0.7l1.73,0c0.4,0 0.73,0.33 0.73,0.73l0,2c0,0.4 -0.33,0.72 -0.73,0.72l-1.73,0c-0.41,0 -0.83,0.32 -0.94,0.7l-1,2.43c-0.19,0.35 -0.12,0.87 0.16,1.16l1.23,1.22c0.29,0.29 0.29,0.75 0,1.03l-1.41,1.41c-0.28,0.29 -0.74,0.29 -1.03,0l-1.22,-1.22c-0.29,-0.29 -0.81,-0.36 -1.16,-0.17l-2.43,1c-0.38,0.11 -0.7,0.53 -0.7,0.94l0,1.73c0,0.4 -0.32,0.73 -0.73,0.73l-1.98,0c-0.41,0 -0.74,-0.33 -0.74,-0.73l0,-1.74c0,-0.4 -0.31,-0.82 -0.7,-0.93l-2.42,-1c-0.35,-0.19 -0.88,-0.12 -1.16,0.16l-1.23,1.23c-0.28,0.28 -0.74,0.28 -1.02,0l-1.41,-1.41a0.72,0.72 0 0 1 0,-1.03l1.22,-1.22c0.29,-0.29 0.36,-0.81 0.17,-1.16l-1,-2.43c-0.11,-0.38 -0.54,-0.7 -0.94,-0.7l-1.73,0c-0.4,0 -0.73,-0.32 -0.73,-0.72l0,-2c0,-0.4 0.33,-0.73 0.73,-0.73l1.73,0c0.4,0 0.83,-0.31 0.94,-0.7l1,-2.42c0.19,-0.36 0.12,-0.87 -0.17,-1.16l-1.22,-1.22a0.72,0.72 0 0 1 0,-1.03l1.41,-1.41c0.28,-0.29 0.74,-0.29 1.02,0l1.23,1.22c0.28,0.29 0.81,0.36 1.16,0.17l2.42,-1c0.39,-0.11 0.7,-0.54 0.7,-0.94l0,-1.73c0,-0.4 0.33,-0.73 0.73,-0.73l1.99,0c0.41,0 0.73,0.33 0.73,0.73l0,1.73c0,0.4 0.32,0.83 0.7,0.94l2.43,1c0.35,0.19 0.87,0.12 1.16,-0.17l1.22,-1.22c0.28,-0.29 0.75,-0.29 1.03,0m2.73,-8.36"
            />
            <path
              fill="#b6d0fb"
              className="gear-2"
              d="m398.6,186.7zm-227.22,137.63a3.61,3.61 0 0 0 -6.36,3.42a3.61,3.61 0 0 0 4.89,1.48a3.61,3.61 0 0 0 1.47,-4.88m4.52,3.38l-0.35,1.19a0.47,0.47 0 0 1 -0.57,0.3l-1.02,-0.31c-0.24,-0.08 -0.55,0.04 -0.69,0.25l-1.03,1.25c-0.17,0.17 -0.22,0.5 -0.11,0.72l0.51,0.94c0.12,0.23 0.03,0.5 -0.18,0.62l-1.09,0.58a0.45,0.45 0 0 1 -0.61,-0.19l-0.51,-0.94a0.65,0.65 0 0 0 -0.66,-0.31l-1.61,0.16c-0.25,0 -0.52,0.19 -0.59,0.43l-0.31,1.03a0.44,0.44 0 0 1 -0.56,0.3l-1.18,-0.35a0.45,0.45 0 0 1 -0.3,-0.57l0.31,-1.02a0.62,0.62 0 0 0 -0.26,-0.68l-1.25,-1.04c-0.17,-0.18 -0.5,-0.22 -0.72,-0.11l-0.94,0.51c-0.22,0.12 -0.5,0.04 -0.61,-0.18l-0.59,-1.09a0.46,0.46 0 0 1 0.19,-0.61l0.94,-0.51c0.23,-0.12 0.36,-0.41 0.31,-0.65l-0.16,-1.62c0,-0.25 -0.19,-0.52 -0.43,-0.58l-1.03,-0.32a0.45,0.45 0 0 1 -0.3,-0.56l0.36,-1.18a0.44,0.44 0 0 1 0.56,-0.3l1.03,0.31c0.24,0.07 0.54,-0.05 0.68,-0.25l1.03,-1.26c0.18,-0.17 0.22,-0.49 0.11,-0.72l-0.51,-0.94a0.45,0.45 0 0 1 0.19,-0.61l1.08,-0.58c0.22,-0.12 0.5,-0.04 0.62,0.18l0.51,0.95c0.11,0.22 0.41,0.35 0.65,0.31l1.61,-0.17c0.26,0 0.52,-0.19 0.59,-0.43l0.31,-1.03c0.07,-0.24 0.33,-0.37 0.56,-0.3l1.19,0.36c0.23,0.07 0.37,0.32 0.3,0.56l-0.31,1.03c-0.07,0.24 0.04,0.55 0.24,0.68l1.26,1.03c0.17,0.18 0.5,0.23 0.72,0.11l0.94,-0.51c0.22,-0.12 0.5,-0.03 0.62,0.19l0.58,1.08c0.12,0.22 0.03,0.5 -0.19,0.62l-0.94,0.51c-0.22,0.11 -0.36,0.41 -0.31,0.65l0.17,1.62c-0.01,0.24 0.19,0.51 0.42,0.58l1.03,0.31c0.24,0.07 0.37,0.33 0.3,0.56"
            />
            <path
              fill="#b6d0fb"
              d="m393.44,186.7l5.16,0l-2.91,-11.48l-5.16,0l2.91,11.48zm12.83,-11.48l-5.16,0l2.9,11.48l5.17,0l-2.91,-11.48zm10.57,0l-5.16,0l2.91,11.48l5.16,0l-2.91,-11.48zm13.47,11.48l0,-0.06l-2.89,-11.42l-5.16,0l2.9,11.48l5.15,0zm-36.94,-31.18l4.69,0l0,18.18l24.1,0l0,-18.18l4.7,0l0,18.18l4.97,0l0,14.52l-3.97,0l0,1.34l-6.84,0l0,-1.34l-21.35,0l0,1.34l-6.84,0l0,-1.34l-4.35,0l0,-14.52l4.89,0l0,-18.18z"
            />
            <path
              fill="#405b91"
              d="M234.79 304.95h-32.6c-.57 0-1.04.46-1.04 1.04 0 .57.47 1.03 1.04 1.03h32.6c.57 0 1.04-.46 1.04-1.03 0-.58-.47-1.04-1.04-1.04m-66.37-14.81h-52.66c-.57 0-1.04.46-1.04 1.04 0 .57.47 1.03 1.04 1.03h52.66c.57 0 1.04-.46 1.04-1.03 0-.58-.47-1.04-1.04-1.04M420.9 262.1h-52.66c-.57 0-1.03.46-1.03 1.04 0 .57.46 1.03 1.03 1.03h52.66c.57 0 1.04-.46 1.04-1.03 0-.58-.47-1.04-1.04-1.04m20.7-108.81H43.2c-.57 0-1.04.46-1.04 1.04 0 .57.47 1.03 1.04 1.03h398.4c.57 0 1.04-.46 1.04-1.03 0-.58-.47-1.04-1.04-1.04"
            />
            <path
              fill="#b6d0fb"
              d="M295.46 303.73a5.89 5.89 0 0 0-5.88 5.88 5.89 5.89 0 0 0 5.88 5.88 5.89 5.89 0 0 0 5.88-5.88 5.89 5.89 0 0 0-5.88-5.88m0 14.24c-2.23 0-4.33-.86-5.91-2.45a8.34 8.34 0 0 1-1.3-10.14l.13-.23-8.47-8.47c-.01-.01-.41-.4-.41-.97-.01-.42.21-.85.64-1.28.45-.46.93-.69 1.41-.69.58 0 1 .34 1 .34l8.45 8.45.23-.13a8.27 8.27 0 0 1 4.23-1.15c2.24 0 4.33.87 5.92 2.45 3.26 3.26 3.26 8.56 0 11.83a8.35 8.35 0 0 1-5.92 2.45"
            />
            <path fill="#b6d0fb" d="M292.36 308.39h6.06v1.55h-6.06v-1.55z" />
            <path
              fill="#405b91"
              d="M140.15 155.21c-.57 0-1.04.46-1.04 1.04v79.87c0 .57.47 1.04 1.04 1.04.57 0 1.04-.47 1.04-1.04v-79.87c0-.58-.47-1.04-1.04-1.04m18.56 0c-.57 0-1.04.46-1.04 1.04v79.87c0 .57.47 1.04 1.04 1.04.57 0 1.04-.47 1.04-1.04v-79.87c0-.58-.47-1.04-1.04-1.04"
            />
            <path
              fill="#405b91"
              d="M158.71 229.63h-18.56c-.57 0-1.04.46-1.04 1.04 0 .57.47 1.03 1.04 1.03h18.56c.57 0 1.04-.46 1.04-1.03 0-.58-.47-1.04-1.04-1.04m0-9.13h-18.56c-.57 0-1.04.46-1.04 1.04 0 .57.47 1.03 1.04 1.03h18.56c.57 0 1.04-.46 1.04-1.03 0-.58-.47-1.04-1.04-1.04m0-9.12h-18.56c-.57 0-1.04.46-1.04 1.04 0 .57.47 1.03 1.04 1.03h18.56c.57 0 1.04-.46 1.04-1.03 0-.58-.47-1.04-1.04-1.04m0-9.13h-18.56c-.57 0-1.04.46-1.04 1.04 0 .57.47 1.03 1.04 1.03h18.56c.57 0 1.04-.46 1.04-1.03 0-.58-.47-1.04-1.04-1.04m0-9.12h-18.56c-.57 0-1.04.46-1.04 1.04 0 .57.47 1.03 1.04 1.03h18.56c.57 0 1.04-.46 1.04-1.03 0-.58-.47-1.04-1.04-1.04m0-9.13h-18.56c-.57 0-1.04.46-1.04 1.04 0 .57.47 1.03 1.04 1.03h18.56c.57 0 1.04-.46 1.04-1.03 0-.58-.47-1.04-1.04-1.04m0-9.12h-18.56c-.57 0-1.04.46-1.04 1.04 0 .57.47 1.03 1.04 1.03h18.56c.57 0 1.04-.46 1.04-1.03 0-.58-.47-1.04-1.04-1.04m0-9.13h-18.56c-.57 0-1.04.46-1.04 1.04 0 .57.47 1.03 1.04 1.03h18.56c.57 0 1.04-.46 1.04-1.03 0-.58-.47-1.04-1.04-1.04m-43.84 66.5c-.57 0-1.04.46-1.04 1.04v4.04c0 .57.47 1.03 1.04 1.03.57 0 1.04-.46 1.04-1.03v-4.04c0-.58-.47-1.04-1.04-1.04"
            />
            <path
              fill="#405b91"
              d="M116.89 234.27h-4.04c-.57 0-1.03.46-1.03 1.04 0 .57.46 1.03 1.03 1.03h4.04c.57 0 1.04-.46 1.04-1.03 0-.58-.47-1.04-1.04-1.04m91.25 142.41c-.57 0-1.04.46-1.04 1.04v4.04c0 .57.47 1.03 1.04 1.03.57 0 1.04-.46 1.04-1.03v-4.04c0-.58-.47-1.04-1.04-1.04"
            />
            <path
              fill="#405b91"
              d="M210.15 378.7h-4.03c-.57 0-1.03.46-1.03 1.04 0 .57.46 1.03 1.03 1.03h4.03c.57 0 1.04-.46 1.04-1.03 0-.58-.47-1.04-1.04-1.04m30.68-211.08c-.09 0-.19.01-.29.04l-3.88 1.11c-.55.16-.87.73-.71 1.28.16.55.73.86 1.28.71l3.88-1.1c.56-.16.87-.74.72-1.29-.13-.45-.55-.75-1-.75"
            />
            <path
              fill="#405b91"
              d="M238.33 166.23a1.03 1.03 0 0 0-1 1.32l1.11 3.89c.16.55.73.86 1.28.71.55-.16.87-.73.72-1.29l-1.11-3.88c-.13-.45-.55-.75-1-.75m-17.9 123.36c-.09 0-.19.01-.29.04l-3.88 1.11c-.55.16-.87.73-.71 1.28.16.55.73.87 1.28.71l3.89-1.1c.55-.16.86-.74.71-1.29-.13-.45-.55-.75-1-.75"
            />
            <path
              fill="#405b91"
              d="M217.93 288.2a1.03 1.03 0 0 0-1 1.32l1.12 3.89c.16.55.73.87 1.28.71.55-.16.87-.73.71-1.29l-1.1-3.88c-.13-.45-.55-.75-1-.75"
            />
            <path
              fill="#b6d0fb"
              d="M232.12 327.81c0-7.96-6.45-14.41-14.41-14.41-7.95 0-14.4 6.45-14.4 14.41s6.45 14.41 14.4 14.41c7.96 0 14.41-6.45 14.41-14.41"
            />
            <path
              fill="#fff"
              d="M228.5 327.81c0-5.96-4.83-10.79-10.79-10.79-5.96 0-10.8 4.83-10.8 10.79 0 5.96 4.84 10.79 10.8 10.79 5.96 0 10.79-4.83 10.79-10.79"
            />
            <path
              fill="#405b91"
              d="M217.71 338.18c-5.72 0-10.38-4.65-10.38-10.38 0-5.72 4.66-10.37 10.38-10.37 5.72 0 10.38 4.65 10.38 10.37 0 5.73-4.66 10.38-10.38 10.38m0-21.59c-6.18 0-11.21 5.03-11.21 11.21 0 6.19 5.03 11.22 11.21 11.22 6.18 0 11.21-5.03 11.21-11.22 0-6.18-5.03-11.21-11.21-11.21"
            />
            {/* clock */}
            <path
              fill="#405b91"
              className="hour-hand"
              d="M217.71 327.39c-.23 0-.42.19-.42.42v5.49c0 .23.19.42.42.42.23 0 .42-.19.42-.42v-5.49c0-.23-.19-.42-.42-.42"
            />
            <path
              fill="#405b91"
              className="minute-hand"
              d="m224.15,327.39l-6.44,0c-0.23,0 -0.42,0.19 -0.42,0.42c0,0.23 0.19,0.42 0.42,0.42l6.44,0c0.23,0 0.42,-0.19 0.42,-0.42c0,-0.23 -0.19,-0.42 -0.42,-0.42m-12.91,6.89"
            />
            <path
              fill="#405b91"
              d="m217.75,337.87a0.43,0.43 0 1 0 -0.46,-0.49a0.43,0.43 0 1 0 0.85,0m6.64,-3.11a0.42,0.42 0 0 0 -0.6,0c-0.17,0.17 -0.17,0.44 0,0.6c0.16,0.17 0.43,0.17 0.6,0c0.17,-0.16 0.17,-0.43 0,-0.6m2.5,-6.89a0.43,0.43 0 1 0 0,0.85a0.43,0.43 0 1 0 0,-0.85m-3.1,-6.65c-0.17,0.18 -0.17,0.44 0,0.61c0.17,0.17 0.44,0.17 0.6,0c0.17,-0.17 0.17,-0.43 0,-0.61a0.42,0.42 0 0 0 -0.6,0m-6.9,-2.5a0.43,0.43 0 1 0 0.85,0a0.43,0.43 0 1 0 -0.85,0m-6.64,3.11c0.17,0.17 0.44,0.17 0.6,0c0.17,-0.17 0.17,-0.44 0,-0.6a0.42,0.42 0 0 0 -0.6,0c-0.17,0.16 -0.17,0.43 0,0.6m-2.5,6.89a0.43,0.43 0 1 0 0,-0.85a0.43,0.43 0 1 0 0,0.85m3.1,6.65c0.17,-0.17 0.17,-0.44 0,-0.6a0.42,0.42 0 0 0 -0.6,0c-0.17,0.16 -0.17,0.43 0,0.6c0.16,0.17 0.43,0.17 0.6,0m27.55,-1.57l-6.05,0c-0.23,0 -0.42,0.19 -0.42,0.42c0,0.23 0.19,0.42 0.42,0.42l6.05,0c0.23,0 0.42,-0.19 0.42,-0.42c0,-0.23 -0.19,-0.42 -0.42,-0.42m0,-11.84l-6.05,0c-0.23,0 -0.42,0.19 -0.42,0.42c0,0.23 0.19,0.42 0.42,0.42l6.05,0c0.23,0 0.42,-0.19 0.42,-0.42c0,-0.23 -0.19,-0.42 -0.42,-0.42m7.52,5.92l-11.3,0c-0.23,0 -0.42,0.19 -0.42,0.42c0,0.23 0.19,0.42 0.42,0.42l11.3,0c0.23,0 0.42,-0.19 0.42,-0.42c0,-0.23 -0.19,-0.42 -0.42,-0.42"
            />
            <path fill="#fff" d="M266.02 165.08h-6.68v6.68h6.68v-6.68z" />
            <path
              fill="#415b91"
              d="M259.86 165.6h5.64v5.65h-5.64v-5.65zm6.68-1.04h-7.72v7.72h7.72v-7.72z"
            />
            <path
              fill="#405b91"
              d="M274.48 170.3h-6.05c-.23 0-.42.19-.42.42 0 .23.19.42.42.42h6.05c.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42m2.27-4.58h-8.18c-.31 0-.56.19-.56.42 0 .23.25.42.56.42h8.18c.31 0 .56-.19.56-.42 0-.23-.25-.42-.56-.42m2.98 2.42h-11.3c-.23 0-.42.19-.42.42 0 .23.19.42.42.42h11.3c.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42"
            />
            <path fill="#fff" d="M112.62 263.14h6.68v6.68h-6.68v-6.68z" />
            <path
              fill="#415b91"
              d="M113.13 263.66h5.65v5.64h-5.65v-5.64zm6.69-1.04h-7.72v7.72h7.72v-7.72z"
            />
            <path
              fill="#405b91"
              d="M104.16 268.35h6.05c.23 0 .42.19.42.42 0 .23-.19.42-.42.42h-6.05c-.23 0-.42-.19-.42-.42 0-.23.19-.42.42-.42m-2.28-4.58h8.18c.31 0 .56.19.56.42 0 .23-.25.42-.56.42h-8.18c-.31 0-.56-.19-.56-.42 0-.23.25-.42.56-.42m-2.97 2.42h11.3c.23 0 .42.19.42.42 0 .23-.19.42-.42.42h-11.3c-.23 0-.42-.19-.42-.42 0-.23.19-.42.42-.42"
            />
            <path fill="#3f5b91" d="M318.48 155.52h-2.07v89.19h2.07v-89.19z" />
            <path
              fill="#b6d0fb"
              d="M317.67 233.92h-.46c-3.38 0-6.15 2.77-6.15 6.15v8.24c0 3.39 2.77 6.16 6.15 6.16h.46c3.38 0 6.15-2.77 6.15-6.16v-8.24c0-3.38-2.77-6.15-6.15-6.15"
            />
            <path
              fill="#3f5b91"
              d="M325.8 239.89c.73-.12 1.46-.23 2.19-.35.49-.08.7.67.21.75-.73.12-1.46.23-2.19.35-.49.08-.7-.67-.21-.75m-.08 4.75c.57.1 1.14.11 1.72.06.5-.05.49.73 0 .78-.65.06-1.28.02-1.93-.09-.49-.09-.28-.84.21-.75m-.24 4.33c.56.22 1.12.44 1.68.67.46.18.26.93-.21.75l-1.68-.67c-.46-.18-.26-.94.21-.75m-19.07-9.81c.57.09 1.13.21 1.68.4.47.16.27.91-.21.75-.55-.19-1.1-.31-1.68-.4-.49-.07-.28-.82.21-.75m-1.01 5.53a8.83 8.83 0 0 0 2.11-.32c.48-.14.69.61.21.75-.76.21-1.53.33-2.32.35-.5.01-.5-.77 0-.78m.68 6.4 1.68-.54c.48-.15.68.6.21.75l-1.68.54c-.48.15-.69-.6-.21-.75"
            />
            <path
              fill="#405b91"
              d="m312.6 154.31 1.38 11.92h6.74l1.56-11.75-9.68-.17z"
            />
            <path
              fill="#6cdd6c"
              d="M122.27 211.39c-.31 1.9-1.65 6.79-4.6 5.24-4.78-2.51.98-12.02-4.78-13.7-.3 3.79-1.12 6.41-2.83 6.25-3.53-.32-2.59-8.53-2.65-10.38-.06-1.84-.15-3.73-.23-5.64-4.16-.74-3.34 10.09-5.87 11.59-3.92 2.33-4.76-2.86-4.65-5.26.18-4.08 1.28-8.97 5.11-11.13 1.27-.72 3.5-1.53 5.23-1.38-.02-3.27.13-6.51.66-9.61.01-.03.07-.03.07 0v.01l2.33-.12v-.05c-.02-1.02 1.57-1.02 1.59 0 .03 1.97 1.24 11.64 1.38 19.84 1.86-.28 4.2.59 5.54 1.57 3.96 2.91 4.43 8.26 3.7 12.77"
            />
            <path
              fill="#50aa50"
              d="m108.04 177.8 2.47-.13-.01-.43c0-.21.07-.27.13-.31.12-.07.3-.07.43 0 .1.06.15.15.15.28.01.68.15 2.17.34 4.25.38 4.04.95 10.15 1.04 15.59l.01.51.5-.08c1.72-.25 3.96.58 5.21 1.49 4.29 3.15 4.05 9.09 3.53 12.34-.23 1.43-1.04 4.32-2.44 5.01-.46.24-.96.21-1.53-.09-2.03-1.07-1.92-3.64-1.8-6.37.14-2.99.29-6.39-3.05-7.36l-.52-.15-.05.54c-.3 3.78-1.03 5.13-1.58 5.59-.24.2-.48.28-.77.25-2.57-.23-2.37-5.91-2.28-8.65.02-.55.04-1.01.03-1.3-.04-1.44-.11-2.92-.18-4.4l-.07-1.6-.35-.06c-2.84-.51-3.64 3.32-4.35 6.7-.45 2.17-.92 4.42-1.81 4.95-.96.57-1.76.67-2.37.31-1.31-.79-1.69-3.59-1.62-5.18.17-3.74 1.15-8.65 4.89-10.77 1.29-.72 3.4-1.45 4.98-1.32l.48.04v-.48c-.02-3.64.16-6.57.59-9.17m2.8-1.8c-.23 0-.47.06-.67.18-.25.15-.42.38-.5.65l-1.72.09-.62-.02-.1.39c-.46 2.63-.67 5.57-.67 9.22-1.91 0-4 .89-5 1.45-4.09 2.32-5.16 7.53-5.34 11.5-.07 1.6.26 4.9 2.05 5.97.91.55 2.01.44 3.27-.3 1.22-.73 1.69-2.95 2.23-5.53.73-3.49 1.38-6 2.98-6.04l.04.86c.07 1.48.13 2.95.18 4.38.01.29-.01.72-.03 1.25-.11 3.23-.32 9.25 3.08 9.56.52.05 1-.1 1.42-.45.94-.8 1.55-2.64 1.84-5.63 2.15.96 2.04 3.45 1.91 6.3-.13 2.88-.26 5.85 2.27 7.18.83.43 1.61.47 2.34.1 2.11-1.05 2.83-5.19 2.91-5.66.56-3.45.79-9.76-3.88-13.19-1.3-.96-3.5-1.8-5.37-1.7-.12-5.35-.66-11.25-1.03-15.19-.18-1.97-.33-3.53-.34-4.17-.01-.45-.23-.83-.61-1.04-.19-.11-.42-.16-.64-.16"
            />
            <path
              fill="#415b91"
              d="M117.7 155.33h-16.88c-.9 0-1.62.59-1.79 1.47l-3.85 19.67 1.6.31 3.84-19.68c.03-.15.15-.15.2-.15h16.88c.04 0 .17 0 .2.15l3.8 19.68 1.59-.31-3.8-19.67c-.17-.88-.89-1.47-1.79-1.47"
            />
            <path
              fill="#b6d0fb"
              d="M95.36 182.8h28.02c.48 0 .87-.53.87-1.18v-4.25c0-.65-.39-1.18-.87-1.18H95.36c-.48 0-.87.53-.87 1.17v4.26c0 .65.39 1.18.87 1.18"
            />
            <path
              fill="#405b91"
              d="M95.36 182.36c-.2 0-.43-.31-.43-.73v-4.26c0-.42.23-.74.43-.74h28.02c.21 0 .43.32.43.74v4.26c0 .42-.22.73-.43.73H95.36zm28.02-6.61H95.36c-.72 0-1.31.73-1.31 1.62v4.26c0 .89.59 1.61 1.31 1.61h28.02c.73 0 1.31-.72 1.31-1.61v-4.26c0-.89-.58-1.62-1.31-1.62"
            />
            <path
              fill="#b6d0fb"
              d="M95.36 182.43c-.24 0-.5-.33-.5-.81v-4.26c0-.47.26-.8.5-.8h28.02c.24 0 .5.33.5.8v4.26c0 .48-.26.81-.5.81H95.36zm28.02-6.61H95.36c-.68 0-1.24.69-1.24 1.54v4.26c0 .86.56 1.55 1.24 1.55h28.02c.69 0 1.24-.69 1.24-1.55v-4.26c0-.85-.55-1.54-1.24-1.54"
            />
            <path
              fill="#405b91"
              d="M95.41 181.99c-.04-.04-.11-.17-.11-.36v-4.26c0-.23.09-.36.13-.38l27.95.01c-.03.01.06.14.06.37v4.25c0 .23-.09.36-.12.38l-27.91-.01zm27.97-6.61H95.36c-.93 0-1.68.89-1.68 1.99v4.25c0 1.1.75 1.99 1.68 1.99h28.02c.93 0 1.68-.89 1.68-1.99v-4.25c0-1.1-.75-1.99-1.68-1.99"
            />
            <path
              fill="#50aa50"
              d="m98.42 199.53 1.38-.18c.5-.06.49.72 0 .78l-1.38.18c-.49.06-.49-.72 0-.78m2.03 6.12v-.69c0-.5.78-.5.78 0v.69c0 .5-.78.5-.78 0m2.69-7.13c.34.19.67.38 1.01.56.44.25.05.92-.39.68-.34-.19-.68-.38-1.01-.57-.44-.24-.05-.91.39-.67m-3.99-8.95c.41.28.81.57 1.22.85.41.29.01.96-.39.67-.41-.28-.82-.56-1.22-.85-.41-.28-.02-.96.39-.67m-2.92 6.69c.29-.11.58-.23.87-.34.46-.18.67.57.2.75-.29.11-.57.23-.86.34-.47.18-.67-.57-.21-.75m5.65-3.62c.19-.01.3-.1.41-.24.32-.39.87.17.55.55-.25.3-.57.44-.96.47-.5.03-.5-.74 0-.78m1.7-3.65c-.08-.54-.02-1.01.19-1.52.19-.46.86-.06.67.4-.12.29-.16.6-.11.91.08.49-.67.7-.75.21m4.07-.15.69-.18c.48-.13.69.62.21.75l-.69.18c-.49.13-.69-.62-.21-.75m2.48 7.65c-.04-.44.13-.85.47-1.13.37-.32.93.22.55.55-.2.17-.26.32-.24.58.04.5-.73.49-.78 0m-.99 5.56c-.23-.31-.27-.62-.2-.99.09-.49.84-.28.75.21-.03.15.01.28.12.39.3.4-.38.79-.67.39m4.27-2.28v-.69c0-.5.78-.5.78 0v.69c0 .5-.78.5-.78 0m-7.24 1.22c.17-.12.35-.23.52-.35.42-.27.81.4.39.68-.17.11-.34.23-.52.34-.42.28-.81-.39-.39-.67m1.31 6.46c.15-.18.23-.36.23-.59.05-.49.82-.5.78 0-.03.45-.18.8-.46 1.14-.33.38-.88-.17-.55-.55m1.96 2.35v-1.04c0-.5.78-.5.78 0v1.04c0 .5-.78.5-.78 0m4.81-4.57c.11-.12.23-.24.34-.35.34-.37.89.18.55.55-.11.11-.23.23-.34.35-.35.36-.89-.19-.55-.55m.77 4.63 1.03-.06c.5-.03.5.75 0 .78l-1.03.06c-.5.03-.5-.75 0-.78m1.1 6.23.69-.69c.36-.36.91.19.55.55l-.69.69c-.35.35-.9-.2-.55-.55m3 2v-1.21c0-.5.78-.5.78 0v1.21c0 .5-.78.5-.78 0m1.41-7.27.34.52c.28.42-.39.81-.67.39-.11-.17-.23-.34-.34-.52-.28-.42.39-.81.67-.39m-2.64-7.64c.29.11.58.23.87.34.46.18.26.93-.21.75-.29-.12-.58-.23-.87-.34-.46-.18-.26-.93.21-.75m3.44 1.08.86.18c.49.1.29.85-.2.75l-.87-.18c-.49-.1-.28-.85.21-.75m-2.21-3.62v-.17c0-.5.78-.5.78 0v.17c0 .5-.78.5-.78 0m-6.68-11.91c.17.12.35.23.52.35.41.27.02.95-.39.67-.18-.12-.35-.23-.52-.35-.42-.27-.03-.95.39-.67m-.45-2.87c.31.3.64.47 1.06.57.48.11.28.86-.21.75-.54-.13-1-.39-1.4-.77-.36-.35.19-.9.55-.55m-3.21-.47c.06-.12.12-.23.18-.34.22-.45.89-.06.67.39-.06.11-.12.23-.18.34-.23.45-.9.06-.67-.39m-2.96-.83c.44-.23.86-.28 1.34-.19.49.1.29.85-.2.75-.28-.05-.5-.02-.75.11-.44.23-.84-.44-.39-.67m6.43 7.37c.52.07 1.03.13 1.55.2.49.06.5.83 0 .77-.52-.06-1.03-.13-1.55-.19-.49-.06-.5-.84 0-.78"
            />
            <path
              fill="#d7e7ff"
              d="M181.91 226.02c8.37 7.57 16.74 15.14 25.11 22.7 1.25 1.13-.59 2.95-1.83 1.84l-25.11-22.71c-1.24-1.12.59-2.95 1.83-1.83m28.38-11.58c8.37 7.57 16.74 15.14 25.11 22.7 1.25 1.13-.59 2.95-1.83 1.84l-25.11-22.71c-1.24-1.12.59-2.95 1.83-1.83m-30.84-8.58c17.55 17.11 35.09 34.22 52.64 51.33 1.19 1.16-.64 3-1.84 1.83-17.54-17.11-35.09-34.22-52.63-51.33-1.2-1.16.63-3 1.83-1.83"
            />
            {/* swinging img */}
            <g className="swing-img">
              <path fill="#415b91" d="M259.9 293.03h-1.12v72.44h1.12v-72.44z" />
              <path
                fill="#415b91"
                d="M263.94 293.03a4.6 4.6 0 1 0-9.21 0 4.6 4.6 0 0 0 9.21 0"
              />
              <path
                fill="#415b91"
                d="M259.4 277.6c-.08 0-1.58.01-2.67 1.11-.73.73-1.11 1.74-1.11 3.01 0 .34.28.61.61.61.34 0 .61-.27.61-.61 0-.93.25-1.66.75-2.15.73-.73 1.8-.75 1.81-.75 1.72 0 3.11 1.39 3.11 3.11 0 1.71-1.39 3.11-3.11 3.11-.34 0-.61.27-.61.61v3.38c0 .34.27.61.61.61.34 0 .61-.27.61-.61v-2.82c2.1-.29 3.72-2.1 3.72-4.28 0-2.39-1.94-4.33-4.33-4.33z"
              />
              <path
                fill="#415b91"
                d="M235.26 274.77a.56.56 0 0 0 .01 1.11l24.89 3.67c.31.05.6-.17.64-.48.05-.3-.16-.59-.47-.63l-24.89-3.67a.54.54 0 0 0-.18 0"
              />
              <path
                fill="#415b91"
                d="M283.03 266.49c-.06.01-.11.03-.17.06l-22.88 11.94c-.28.15-.38.49-.24.77.14.27.48.38.76.23l22.89-11.94c.27-.15.38-.49.24-.76a.57.57 0 0 0-.6-.3"
              />
              <path
                fill="#fff"
                d="m281.16 218.71-60.95 10.59c-3.19.56-5.34 3.6-4.78 6.79l6.1 35.1a5.87 5.87 0 0 0 6.78 4.78l60.97-10.6a5.87 5.87 0 0 0 4.77-6.78l-6.1-35.1c-.56-3.2-3.6-5.33-6.79-4.78"
              />
              <path
                fill="#415b91"
                d="M227.49 275.24a5.32 5.32 0 0 1-5.23-4.4l-6.02-34.67c-.24-1.4.07-2.81.89-3.96a5.24 5.24 0 0 1 3.43-2.18l60.53-10.52c2.88-.5 5.63 1.44 6.14 4.33l6.02 34.66a5.28 5.28 0 0 1-.89 3.97 5.25 5.25 0 0 1-3.43 2.17l-60.53 10.52c-.3.05-.61.08-.91.08M282 217.88c-.39 0-.78.03-1.18.1l-60.53 10.52a6.83 6.83 0 0 0-4.44 2.81 6.87 6.87 0 0 0-1.15 5.13l6.03 34.66c.65 3.73 4.21 6.24 7.94 5.59l60.52-10.51a6.83 6.83 0 0 0 4.44-2.82 6.76 6.76 0 0 0 1.15-5.12l-6.02-34.67c-.58-3.34-3.49-5.69-6.76-5.69"
              />
              <path
                fill="#b6d0fb"
                d="m280.71 222.51-58.79 10.21c-2.04.36-3.4 2.3-3.05 4.34l5.57 32.05a3.75 3.75 0 0 0 4.34 3.05l58.78-10.21c2.04-.36 3.41-2.3 3.06-4.34l-5.57-32.05c-.36-2.04-2.3-3.4-4.34-3.05"
              />
              <path
                fill="#405b91"
                d="M280.7 223.3c.82-.14 1.65.04 2.32.52.68.48 1.14 1.19 1.28 2.01l5.52 31.78c.29 1.69-.84 3.3-2.53 3.6l-58.51 10.16c-1.69.3-3.31-.84-3.6-2.53l-5.52-31.77c-.15-.82.04-1.65.52-2.33.48-.68 1.19-1.13 2.01-1.27l58.51-10.17zm.54-1.6c-.27 0-.54.02-.81.07l-58.51 10.16c-1.23.22-2.3.9-3.01 1.91-.72 1.02-1 2.26-.79 3.49l5.53 31.78c.43 2.53 2.85 4.24 5.39 3.8l58.51-10.17a4.67 4.67 0 0 0 3.8-5.4l-5.52-31.77c-.21-1.23-.89-2.3-1.91-3.02-.8-.56-1.72-.85-2.68-.85"
              />
              <path
                fill="#fff"
                d="m252.82 227.35 15.21 13.94 8.42-18.05-23.63 4.11z"
              />
              <path
                fill="#415b91"
                d="m253.95 227.69 21.61-3.75-7.7 16.5-13.91-12.75zm23.39-5.13-25.65 4.47 16.51 15.13 9.14-19.6z"
              />
              <path
                fill="#fff"
                d="m222.74 232.58 26.97 24.72 14.92-32-41.89 7.28z"
              />
              <path
                fill="#415b91"
                d="m223.87 232.91 39.88-6.93-14.21 30.46-25.67-23.53zm41.66-8.29-43.91 7.63 28.26 25.91 15.65-33.54z"
              />
              <path
                fill="#fff"
                d="M281.78 252.61a3.77 3.77 0 0 0-4.36-3.07 3.77 3.77 0 0 0-3.07 4.36 3.77 3.77 0 0 0 4.36 3.07 3.77 3.77 0 0 0 3.07-4.36"
              />
              <path
                fill="#415b91"
                d="M278.05 256.51a3.24 3.24 0 0 1-3.2-2.7c-.14-.85.05-1.72.55-2.43a3.24 3.24 0 0 1 2.11-1.33c.85-.15 1.72.05 2.43.55a3.25 3.25 0 0 1-1.88 5.91m.01-7.54c-.24 0-.49.02-.74.06a4.3 4.3 0 0 0-3.49 4.96c.19 1.13.81 2.11 1.75 2.77.94.66 2.07.92 3.2.72 1.13-.19 2.11-.82 2.77-1.75.66-.94.92-2.08.72-3.21a4.25 4.25 0 0 0-1.75-2.77c-.73-.52-1.58-.78-2.45-.78"
              />
            </g>

            <path fill="#b6d0fb" d="M305.97 361.68h-56.53v6.22h56.53v-6.22z" />
            <path
              fill="#415b91"
              d="M338.18 241.16h15.06v162.2h-15.06v-162.2zm16.91-1.86h-18.76v165.92h18.76V239.3z"
            />
            <path
              fill="#415b91"
              d="M338.44 388.89h14.54v14.53h-14.54v-14.53zm16.42-1.88h-18.3v18.29h18.3v-18.29z"
            />
            <path
              fill="#415b91"
              d="m353.25 387.28-16.41 16.41 1.33 1.33 16.41-16.41-1.33-1.33z"
            />
            <path
              fill="#415b91"
              d="m338.17 387.28-1.33 1.33 16.41 16.41 1.34-1.33-16.42-16.41z"
            />
            <path
              fill="#415b91"
              d="M338.44 372.47h14.54v14.54h-14.54v-14.54zm16.42-1.88h-18.3v18.3h18.3v-18.3z"
            />
            <path
              fill="#415b91"
              d="m353.25 370.87-16.41 16.41 1.33 1.33 16.41-16.41-1.33-1.33z"
            />
            <path
              fill="#415b91"
              d="m338.17 370.87-1.33 1.33 16.41 16.41 1.34-1.33-16.42-16.41z"
            />
            <path
              fill="#415b91"
              d="M338.44 356.06h14.54v14.53h-14.54v-14.53zm16.42-1.88h-18.3v18.29h18.3v-18.29z"
            />
            <path
              fill="#415b91"
              d="m353.25 354.45-16.41 16.41 1.33 1.33 16.41-16.41-1.33-1.33z"
            />
            <path
              fill="#415b91"
              d="m338.17 354.45-1.33 1.33 16.41 16.41 1.34-1.33-16.42-16.41z"
            />
            <path
              fill="#415b91"
              d="M338.44 339.65h14.54v14.53h-14.54v-14.53zm16.42-1.89h-18.3v18.3h18.3v-18.3z"
            />
            <path
              fill="#415b91"
              d="m353.25 338.04-16.41 16.41 1.33 1.33 16.41-16.41-1.33-1.33z"
            />
            <path
              fill="#415b91"
              d="m338.17 338.04-1.33 1.33 16.41 16.41 1.34-1.33-16.42-16.41z"
            />
            <path
              fill="#415b91"
              d="M338.44 323.23h14.54v14.54h-14.54v-14.54zm16.42-1.88h-18.3v18.3h18.3v-18.3z"
            />
            <path
              fill="#415b91"
              d="m353.25 321.63-16.41 16.41 1.33 1.33 16.41-16.41-1.33-1.33z"
            />
            <path
              fill="#415b91"
              d="m338.17 321.63-1.33 1.33 16.41 16.41 1.34-1.33-16.42-16.41z"
            />
            <path
              fill="#415b91"
              d="M338.44 306.82h14.54v14.53h-14.54v-14.53zm16.42-1.88h-18.3v18.29h18.3v-18.29z"
            />
            <path
              fill="#415b91"
              d="m353.25 305.21-16.41 16.41 1.33 1.33 16.41-16.41-1.33-1.33z"
            />
            <path
              fill="#415b91"
              d="m338.17 305.21-1.33 1.33 16.41 16.41 1.34-1.33-16.42-16.41z"
            />
            <path
              fill="#415b91"
              d="M338.44 290.4h14.54v14.54h-14.54V290.4zm16.42-1.88h-18.3v18.3h18.3v-18.3z"
            />
            <path
              fill="#415b91"
              d="m353.25 288.8-16.41 16.41 1.33 1.33 16.41-16.41-1.33-1.33z"
            />
            <path
              fill="#415b91"
              d="m338.17 288.8-1.33 1.33 16.41 16.41 1.34-1.33-16.42-16.41z"
            />
            <path
              fill="#415b91"
              d="M338.44 273.99h14.54v14.53h-14.54v-14.53zm16.42-1.88h-18.3v18.29h18.3v-18.29z"
            />
            <path
              fill="#415b91"
              d="m353.25 272.38-16.41 16.41 1.33 1.33 16.41-16.41-1.33-1.33z"
            />
            <path
              fill="#415b91"
              d="m338.17 272.38-1.33 1.33 16.41 16.41 1.34-1.33-16.42-16.41z"
            />
            <path
              fill="#415b91"
              d="M338.44 257.57h14.54v14.54h-14.54v-14.54zm16.42-1.88h-18.3v18.3h18.3v-18.3z"
            />
            <path
              fill="#415b91"
              d="m353.25 255.97-16.41 16.41 1.33 1.33 16.41-16.41-1.33-1.33z"
            />
            <path
              fill="#415b91"
              d="m338.17 255.97-1.33 1.33 16.41 16.41 1.34-1.33-16.42-16.41z"
            />
            <path
              fill="#415b91"
              d="M338.44 241.16h14.54v14.53h-14.54v-14.53zm16.42-1.88h-18.3v18.29h18.3v-18.29z"
            />
            <path
              fill="#415b91"
              d="m353.25 239.55-16.41 16.41 1.33 1.33 16.41-16.41-1.33-1.33z"
            />
            <path
              fill="#415b91"
              d="m338.17 239.55-1.33 1.33 16.41 16.41 1.34-1.33-16.42-16.41zm32.93 133.17h14.54v14.53H371.1v-14.53zm16.42-1.88h-18.3v18.3h18.3v-18.3z"
            />
            <path
              fill="#415b91"
              d="m370.83 371.12-1.33 1.33 16.41 16.41 1.33-1.33-16.41-16.41z"
            />
            <path
              fill="#415b91"
              d="m385.91 371.12-16.41 16.41 1.33 1.33 16.41-16.41-1.33-1.33z"
            />
            <path
              fill="#415b91"
              d="M354.69 372.72h14.53v14.53h-14.53v-14.53zm16.41-1.88h-18.29v18.3h18.29v-18.3z"
            />
            <path
              fill="#415b91"
              d="m354.41 371.12-1.32 1.33 16.41 16.41 1.33-1.33-16.42-16.41z"
            />
            <path
              fill="#415b91"
              d="m369.5 371.12-16.41 16.41 1.33 1.33 16.41-16.41-1.33-1.33z"
            />
            <path
              fill="#415b91"
              d="M338.28 372.72h14.53v14.53h-14.53v-14.53zm16.41-1.88h-18.3v18.3h18.3v-18.3z"
            />
            <path
              fill="#415b91"
              d="M321.86 372.72h14.54v14.53h-14.54v-14.53zm16.42-1.88h-18.3v18.3h18.3v-18.3z"
            />
            <path
              fill="#415b91"
              d="m321.59 371.12-1.33 1.33 16.41 16.41 1.33-1.33-16.41-16.41z"
            />
            <path
              fill="#415b91"
              d="m336.67 371.12-16.41 16.41 1.33 1.33L338 372.45l-1.33-1.33z"
            />
            <path
              fill="#415b91"
              d="M305.45 372.72h14.53v14.53h-14.53v-14.53zm16.41-1.88h-18.29v18.3h18.29v-18.3z"
            />
            <path
              fill="#415b91"
              d="m305.17 371.12-1.33 1.33 16.41 16.41 1.33-1.33-16.41-16.41z"
            />
            <path
              fill="#415b91"
              d="m320.26 371.12-16.41 16.41 1.33 1.33 16.41-16.41-1.33-1.33z"
            />
            <path
              fill="#415b91"
              d="M289.03 372.72h14.54v14.53h-14.54v-14.53zm16.42-1.88h-18.3v18.3h18.3v-18.3z"
            />
            <path
              fill="#415b91"
              d="M288.09 370.84h-16.41c-.38 0-.73.23-.87.58a.92.92 0 0 0 .2 1.02l16.42 16.42 1.33-1.33-14.81-14.81h13.75l16.14 16.14 1.33-1.33-16.42-16.42a.94.94 0 0 0-.66-.27"
            />
            <path
              fill="#415b91"
              d="m303.84 371.12-16.41 16.41 1.33 1.33 16.41-16.41-1.33-1.33zm34.42-148.24h14.94v14.54h-14.94v-14.54zm16.87-1.88h-18.8v18.3h18.8V221z"
            />
            <path
              fill="#415b91"
              d="m353.48 221.28-16.87 16.41 1.37 1.33 16.87-16.41-1.37-1.33z"
            />
            <path
              fill="#415b91"
              d="m337.98 221.28-1.37 1.33 16.87 16.41 1.37-1.33-16.87-16.41zm.28-64.05h14.94v14.53h-14.94v-14.53zm16.87-1.88h-18.8v18.29h18.8v-18.29z"
            />
            <path
              fill="#415b91"
              d="m353.48 155.62-16.87 16.41 1.37 1.33 16.87-16.41-1.37-1.33z"
            />
            <path
              fill="#415b91"
              d="m337.98 155.62-1.37 1.33 16.87 16.41 1.37-1.33-16.87-16.41zm.28 52.41h14.94v14.53h-14.94v-14.53zm16.87-1.88h-18.8v18.29h18.8v-18.29z"
            />
            <path
              fill="#415b91"
              d="m353.48 206.42-16.87 16.41 1.37 1.33 16.87-16.41-1.37-1.33z"
            />
            <path
              fill="#415b91"
              d="m337.98 206.42-1.37 1.33 16.87 16.41 1.37-1.33-16.87-16.41z"
            />
            <path
              fill="#415b91"
              d="M338.26 191.61h14.94v14.54h-14.94v-14.54zm16.87-1.88h-18.8v18.3h18.8v-18.3z"
            />
            <path
              fill="#415b91"
              d="m353.48 190.01-16.87 16.41 1.37 1.33 16.87-16.41-1.37-1.33z"
            />
            <path
              fill="#415b91"
              d="m337.98 190.01-1.37 1.33 16.87 16.41 1.37-1.33-16.87-16.41z"
            />
            <path
              fill="#415b91"
              d="M338.26 175.2h14.94v14.53h-14.94V175.2zm16.87-1.88h-18.8v18.29h18.8v-18.29z"
            />
            <path
              fill="#415b91"
              d="M353.48 173.59 336.61 190l1.37 1.33 16.87-16.41-1.37-1.33z"
            />
            <path
              fill="#415b91"
              d="m337.98 173.59-1.37 1.33 16.87 16.41 1.37-1.33-16.87-16.41z"
            />
            <path
              fill="#405b91"
              d="M145.26 305.75c2 0 2 3.11 0 3.11s-2-3.11 0-3.11m168.7 32.49c2 0 2 3.11 0 3.11s-2-3.11 0-3.11m69.83-109.75h.69m-.69-1.56h.69c.81 0 1.6.72 1.56 1.56-.04.84-.69 1.55-1.56 1.55h-.69c-.81 0-1.59-.71-1.56-1.55.04-.85.69-1.56 1.56-1.56M83.73 204.11c2 0 2 3.11 0 3.11s-2-3.11 0-3.11m148.64 149.34c2 0 2 3.11 0 3.11s-2-3.11 0-3.11"
            />
          </g>
        </g>
      </g>
    </svg>
  </div>
)

export default ConstructionSVG
