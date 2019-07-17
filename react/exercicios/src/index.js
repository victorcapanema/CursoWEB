import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Ana" sobrenome="Flower">
            <Filho nome="Jena"/>
            <Filho nome="Lucy" sobrenome="Flower"/>
            <Filho nome="Katlin" sobrenome="Flower"/>
        </Pai>
    </div>
    , document.getElementById('root'))
