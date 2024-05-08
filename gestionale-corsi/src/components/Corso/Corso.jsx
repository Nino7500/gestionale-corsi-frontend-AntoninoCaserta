import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { getCourseById } from '../../Service/Config/RESTService';
import styles from './corso.module.css';

export function Corso() {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const [course, setCourse] = useState(null);

    useEffect(() => {
        async function fetchCourseDetails() {
            try {
                const courseData = await getCourseById(id);
                setCourse(courseData);
            } catch (error) {
                console.error('Errore durante il recupero dei dettagli del corso:', error);
            }
        }

        fetchCourseDetails();
    }, [id]);

    if (!course) {
        return <div>Caricamento...</div>;
    }

    return (
        <div className="container mt-5">
            <div className={`card ${styles.courseCard}`}>
                <div className="card-body">
                    <h2 className="card-title">Corso {course.nomeCorso}</h2>
                    <p><strong>Descrizione breve:</strong> {course.descrizioneBreve}</p>
                    <p><strong>Descrizione completa:</strong> {course.descrizioneCompleta}</p>
                    <p><strong>Durata:</strong> {course.durata} settimane</p>
                    <button className={`btn btn-dark ${styles.bigButton}`}>Iscriviti</button>
                    <button className={`btn btn-light ${styles.space}`} onClick={() => navigate(-1)}>Torna alla lista</button>
                </div>
            </div>
        </div>
    );
}