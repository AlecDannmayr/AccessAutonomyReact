/** @format */

import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
    <React.StrictMode>
        <SimpleReactLightbox>
            <App authorized={false} />
        </SimpleReactLightbox>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals()
