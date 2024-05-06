import React from 'react';

export function NotFound() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>Oops!</h1>
        <p>La pagina che stai cercando non è disponibile.</p>
        <img src="https://widzialni.pl/wp-content/uploads/2022/03/404.png" alt="Error 404" className="img-fluid" />
        <p>Torna alla <a href="/">pagina iniziale</a>.</p>
      </div>
    </div>
  );
}