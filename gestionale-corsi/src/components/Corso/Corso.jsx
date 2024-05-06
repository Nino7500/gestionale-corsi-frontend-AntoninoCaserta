import React from "react";
import { useParams } from "react-router-dom";
import styles from './corso.module.css'

export function Corso() {
  const { id } = useParams();

  const handleBackToList = () => {
    window.location.href = "/corsi";
  };

  return (
    <div className="container mt-5">
      <div className={`card ${styles.courseCard}`}>
        <div className="card-body">
          <h2 className="card-title">Corso {id}</h2>
          <p className={`card-text ${styles.para}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor aliquam eros, id posuere turpis rhoncus id. Fusce ultricies nisi eget purus elementum, ac tincidunt ex ultricies. Duis varius euismod ex, id mattis orci rhoncus vitae. Nulla facilisi. Mauris tincidunt, odio id convallis tristique, metus nunc faucibus lacus, ut suscipit eros nunc nec mauris. Vestibulum maximus est ac enim mattis, ac feugiat turpis posuere. Maecenas quis velit ligula. Suspendisse potenti. Nulla nec diam eget felis tincidunt tincidunt.
          </p>
          <p className={`card-text ${styles.para}`}>
            Fusce quis risus vel nibh tincidunt fermentum. Nullam et urna nec dui pharetra accumsan. Donec commodo, leo nec bibendum pharetra, enim metus congue ex, vel efficitur dui dolor et velit. Nam ut tortor non sapien vehicula vehicula. Integer a massa malesuada, placerat est at, bibendum justo. Ut varius, turpis et scelerisque vehicula, lectus odio feugiat ex, id fermentum nisi nisi eu odio. Proin in orci bibendum, tincidunt nulla nec, auctor libero. Curabitur fermentum nunc elit, sit amet vestibulum lectus bibendum vitae.
          </p>
          <button className="btn btn-dark me-2" onClick={() => {}}>Iscriviti</button>
          <button className={`btn ${styles.bigButton}`} onClick={handleBackToList}>Torna alla lista</button>
        </div>
      </div>
    </div>
  );
}