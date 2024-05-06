import styles from './footer.module.css'; 

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p>© {new Date().getFullYear()} Gestionale Corsi. Tutti i diritti riservati.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}