import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './corsi.module.css'; 

export function Corsi() {
  const courses = [
    {
      id: 1,
      name: 'Corso di Matematica',
      shortDescription: 'Introduzione alla matematica',
      fullDescription: 'Questo corso offre un\'introduzione approfondita alla matematica, coprendo argomenti come algebra, geometria e calcolo.',
      duration: '8 settimane',
    },
    {
      id: 2,
      name: 'Corso di Storia',
      shortDescription: 'Esplora gli eventi storici',
      fullDescription: 'Questo corso ti porterà in un viaggio attraverso gli eventi storici più significativi, dalle antiche civiltà alle guerre mondiali.',
      duration: '10 settimane',
    },
    {
      id: 3,
      name: 'Corso di Programmazione',
      shortDescription: 'Impara a programmare',
      fullDescription: 'Questo corso ti insegnerà i fondamenti della programmazione, dai concetti di base ai linguaggi di programmazione più utilizzati.',
      duration: '12 settimane',
    },
    {
      id: 4,
      name: 'Corso di Lingue',
      shortDescription: 'Apprendi nuove lingue',
      fullDescription: 'Questo corso ti aiuterà a padroneggiare nuove lingue, offrendo lezioni interattive e esercizi pratici.',
      duration: '6 settimane',
    },
  ];

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Lista dei Corsi</h1>
      <div className="row">
        {courses.map(course => (
          <div key={course.id} className="col-md-6 mb-4">
            <div className={`card ${styles.customCard}`}>
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text"><strong>Descrizione breve:</strong> {course.shortDescription}</p>
                <p className="card-text"><strong>Descrizione completa:</strong> {course.fullDescription}</p>
                <p className="card-text"><strong>Durata:</strong> {course.duration}</p>
                <NavLink to={`corso/${course.id}`} className="btn btn-dark">Dettagli</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}