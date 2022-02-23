import React from 'react'
import { css, Global } from '@emotion/react'
import { LimeLink } from '../components/Link.styled'

const home: React.FC = () => {
  return (
    <div>
      <h1 data-testid="h1:mainTittle">Azordev Boilerplate⚡</h1>
      <LimeLink href="https://github.com/Azordev/frontend-template" target="_blank" rel="noreferrer">
        star this repo!
      </LimeLink>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');

          a {
            text-decoration: underline

            &:hover {
              text-decoration: none;
            }
          }
          
          body {
            text-align: left;
            color: #fff;
            background: #081229;
            display: grid;
            place-items: center;
            height: 100vh;
          }

          h1 {
            font-size: 2rem;
          }
        `}
      />
    </div>
  )
}

export default home
