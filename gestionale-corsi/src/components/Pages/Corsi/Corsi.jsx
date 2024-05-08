import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './corsi.module.css'; 
import { getCourses } from '../../../Service/Config/RESTService';

export function Corsi() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error('Errore durante il recupero dei corsi:', error);
      }
    }

    fetchCourses();
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Lista dei Corsi</h1>
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-6 mb-4">
            <div className={`card ${styles.customCard}`}>
              <div className="card-body">
                <h5 className="card-title mb-4">{course.nomeCorso}</h5>
                <p className={`card-text ${styles.description}`}>
                  <strong>Descrizione breve:</strong> {course.descrizioneBreve}
                </p>
                <p className={`card-text ${styles.description}`}>
                  <strong>Descrizione completa:</strong> {course.descrizioneCompleta}
                </p>
                <p className={`card-text ${styles.description}`}>
                  <strong>Durata:</strong> {course.durata} settimane
                </p>
                <NavLink to={`/corsi/corso/${course.id}`} className="btn btn-dark">Dettagli</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}