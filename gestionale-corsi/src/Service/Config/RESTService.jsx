import Cookies from "js-cookie";
  
  
  export async function register(userData) {
    try {
      const response = await fetch("http://localhost:8080/api/utenti/registrazione", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error("Errore durante la registrazione");
      }

      window.location.href = "/login";
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Errore durante la registrazione:", error.message);
    
      alert("Si è verificato un errore durante la registrazione. Riprova più tardi.");
      throw error;
    }
  }
  export async function insertUser(userData){
    const response = await fetch("http://localhost:8080/api/utenti/registrazione", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      return response;
  } else {
      throw new Error('Errore durante l\'inserimento dell utente');
  }
  }

  export async function getCourses() {
    try {
        const response = await fetch("http://localhost:8080/api/corsi/listacorsi", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Errore durante il recupero dei corsi");
        }

        return response.json();
    } catch (error) {
        throw error;
    }
}

export async function getCourseById(id_c) {
    try {
        const response = await fetch(`http://localhost:8080/api/corsi/${id_c}`);
        if (!response.ok) {
            throw new Error('Errore nel recupero del corso');
        }
        const courseData = await response.json();
        return courseData;
    } catch (error) {
        throw error;
    }
}

export async function login(email, password) {
  try {
    const response = await fetch("http://localhost:8080/api/utenti/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    return response;
  } catch (error) {
    throw error;
  }
}
  
export async function logout() {
  try {
    const response = await fetch("http://localhost:8080/api/utenti/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Cookies.get('token')}` 
      },
    });

    if (response.ok) {
      Cookies.remove('token');
      console.log(response);
      return true; 
    } else {
      throw new Error("Errore durante il logout");
    }
  } catch (error) {
    throw error;
  }
}

export async function getUsers() {
    try {
      const response = await fetch('http://localhost:8080/api/utenti/listautenti');
      if (!response.ok) {
        throw new Error('Errore durante il recupero degli utenti');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  
  
  export async function deleteUser(email) {
    try {
      const response = await fetch(`http://localhost:8080/api/utenti/delete/${email}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Errore durante l\'eliminazione dell\'utente');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
  
  export async function deleteCourse(courseId) {
    try {
      const response = await fetch(`http://localhost:8080/api/corsi/elimina/${courseId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Errore durante l\'eliminazione del corso');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
  export async function createCourse(newCourse) {
    try {
        const response = await fetch('http://localhost:8080/api/corsi/inserisci', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCourse),
        });
        if (response.ok) {
            return response;
        } else {
            throw new Error('Errore durante l\'inserimento del corso');
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function updateUser(updatedUserData) {
  try {
    const response = await fetch(`http://localhost:8080/api/utenti/aggiorna`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUserData),
    });

    if (response.ok) {
      return response; 
    } else {
      throw new Error('Errore durante l\'aggiornamento dell\'utente');
    }
  } catch (error) {
    throw new Error(error.message);
  }
}