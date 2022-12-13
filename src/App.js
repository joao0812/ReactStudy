import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import { HelloWorld } from './components/HelloWorld';
import { SayMyName } from './components/SayMyName';
import { Pessoa } from './components/Pessoa';
import { Frase } from './components/Frase';
import { List } from './components/List';

import { Evento } from './components/Evento';
import { Form } from './components/Form';
import { Condicional } from './components/Condicional';
import { OutraLista } from './components/OutraLista';
import { SeuNome } from './components/SeuNome';
import { Saudacao } from './components/Saudacao';

import { Home } from './components/pages/Home'
import { Contato } from './components/pages/Contato'
import { Empresa } from './components/pages/Empresa'
import { NavBar } from './components/layout/NavBar'
import { Footer } from './components/layout/Footer'

function App() {
  const nome = 'Impera'

  const url = 'http://via.placeholder.com/150'

  const meusItens = ['React', 'Vue', 'Angular']

  const [name, setName] = useState()

  return (
    <div className="App">
      <div>
        <h1>Testando Evento</h1>
        <Evento num={1} />
      </div>
      <Form />
      <div>
        <List />
      </div>
      <div>
        <h1>Renderização condicional</h1>
        <Condicional />
      </div>
      <div>
        <h1>Renderização de Lista</h1>
        <OutraLista itens={meusItens} />
        <OutraLista itens={[]} />
      </div>
      <div>
        <h1>State Lift</h1>
        <SeuNome setName={setName} />
        {name}
        <Saudacao name={name} />
      </div>
      <div>
        <h1>React router DOM</h1>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} > </Route>
            <Route path="/empresa" element={<Empresa />} > </Route>
            <Route path="/contato" element={<Contato />} > </Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
