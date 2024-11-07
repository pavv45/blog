import React, { useState } from 'react'
import BlogList from './components/BlogList'
import BlogEntry from './components/BlogEntry'
import Header from './components/Header'
import './App.css'

function App() {
  const [currentEntry, setCurrentEntry] = useState(null)

  const news = [
    {
      title: "Guayaquil: Policía detiene a sospechoso por el asesinato del joven que impidió el secuestro de su madre",
      content: "Ernesto Cuvi murió por un disparo en el pecho el pasado 31 de octubre, cuando intentó evitar el secuestro de su madre en una tienda de Sauces 6.",
      link: "https://www.primicias.ec/sucesos/guayaquil-policia-sospechoso-asesinato-joven-secuestro-madre-82581/"
    },
    {
      title: "Lanzan barro e insultos contra rey Felipe VI de España al visitar zona afectada por inundaciones",
      content: "Cientos de vecinos de un barrio de Valencia, gravemente afectado por las mortales inundaciones de esta semana.",
      link: "https://www.latercera.com/la-tercera-tv/noticia/lanzan-barro-e-insultos-contra-rey-felipe-vi-de-espana-al-visitar-zona-afectada-por-inundaciones/D5PLZR74SBDQZDE33MVQ4UCAKA/#"
    },
    {
      title: "Los turistas llenaron balnearios en Santa Elena y Guayas a pesar del frío",
      content: "Durante el feriado, los balnearios de las provincias de Guayas y Santa Elena se llenaron de turistas.",
      link: "https://www.ecuavisa.com/noticias/ecuador/feriado-santa-elena-dia-difuntos-DB8245371"
    }
  ]

  return (
    <div className="app-container">
      <Header />
      <div className="blog-container">
        {currentEntry ? (
          <BlogEntry entry={currentEntry} goBack={() => setCurrentEntry(null)} />
        ) : (
          <BlogList onSelectEntry={setCurrentEntry} />
        )}
      </div>
      <div className="news-container">
        <h2 className="text-2xl font-bold mb-4">Noticias</h2>
        {news.map((item, index) => (
          <div key={index} className="news-post">
            <div className="news-post-content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">Leer más</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
