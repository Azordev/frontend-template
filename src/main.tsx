import React from 'react'
import ReactDOM from 'react-dom'
import Router from './pages/router'
import { css, Global } from '@emotion/react'
import 'css-maid'

ReactDOM.render(
  <React.StrictMode>
    <Router />
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
  </React.StrictMode>,
  document.getElementById('root'),
)
