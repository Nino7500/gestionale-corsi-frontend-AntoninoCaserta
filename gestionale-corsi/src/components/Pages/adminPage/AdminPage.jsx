import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getUsers,
  deleteUser,
  insertUser,
  updateUser,
  getCourses,
  deleteCourse,
  createCourse,
  logout
} from "../../../Service/Config/RESTService";
import styles from "./AdminPage.module.css"

export function AdminPage() {


  const [selectedUser, setSelectedUser] = useState(null);

  const [editedUser, setEditedUser] = useState({
    id: "",
    nome: "",
    cognome: "",
    email: "",
  });

  // Funzione per popolare lo stato con i dettagli dell'utente selezionato per la modifica
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setEditedUser(user); 
  };

  // Funzione per gestire la modifica dell'utente
  const handleUpdateUser = async () => {
    try {
      await updateUser(editedUser); 
      await fetchUsers(); 
      setSelectedUser(null); 
    } catch (error) {
      console.error("Errore durante l'aggiornamento dell'utente:", error);
    }
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Errore durante il logout:", error);
    }
  };
  const [newUser, setNewUser] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [newCourse, setNewCourse] = useState({
    nomeCorso: "",
    descrizioneBreve: "",
    descrizioneCompleta: "",
    durata: "",
  });
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchCourses();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error("Errore durante il recupero degli utenti:", error);
    }
  };

  const fetchCourses = async () => {
    try {
      const data = await getCourses();
      setCourses(data);
    } catch (error) {
      console.error("Errore durante il recupero dei corsi:", error);
    }
  };

  const handleDeleteUser = async (email) => {
    try {
      await deleteUser(email);
      setUsers(users.filter((user) => user.email !== email));
    } catch (error) {
      console.error("Errore durante l'eliminazione dell'utente:", error);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      await deleteCourse(courseId);
      setCourses(courses.filter((course) => course.id !== courseId));
    } catch (error) {
      console.error("Errore durante l'eliminazione del corso:", error);
    }
  };

  const handleInsertUser = async () => {
    try {
      await insertUser(newUser);

      const updatedUsers = await getUsers();
      setUsers(updatedUsers);

      setNewUser({
        nome: "",
        cognome: "",
        email: "",
      });
    } catch (error) {
      console.error("Errore durante l'inserimento dell'utente:", error);
    }
  };

  const handleInsertCourse = async () => {
    try {
      await createCourse(newCourse);
      fetchCourses();
      setShowAlert(false);
      setNewCourse({
        nomeCorso: "",
        descrizioneBreve: "",
        descrizioneCompleta: "",
        durata: "",
      });
    } catch (error) {
      console.error("Errore durante l'inserimento del corso:", error);
    }
  };

  

  return (
    <div className="container mt-4">
      <button onClick={handleLogout} className="btn btn-danger mb-4">
        Logout
      </button>
      <h1>Gestione Utenti</h1>
  
      <button
        onClick={() => setShowAlert(true)}
        className={`btn btn-dark mb-4 ${styles.space}`}
      >
        Inserisci utente
      </button>
  
      <div className="mb-4">
        {showAlert && (
          <div className="alert alert-info">
            <h4>Inserisci un nuovo utente</h4>
            <input
              type="text"
              value={newUser.nome}
              onChange={(e) => setNewUser({ ...newUser, nome: e.target.value })}
              placeholder="Nome"
              className="form-control mb-2"
            />
            <input
              type="text"
              value={newUser.cognome}
              onChange={(e) => setNewUser({ ...newUser, cognome: e.target.value })}
              placeholder="Cognome"
              className="form-control mb-2"
            />
            <input
              type="text"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              placeholder="Email"
              className="form-control mb-2"
            />
            <input
              type="password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              placeholder="Password"
              className="form-control mb-2"
            />
            <button style={{ marginRight: '1rem' }} className="btn btn-success" onClick={handleInsertUser}>
              Conferma
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setShowAlert(false)}
            >
              Annulla
            </button>
          </div>
        )}
  
        
  
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Cognome</th>
              <th>Email</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                 {selectedUser === user ? (
                    <input
                      type="text"
                      value={editedUser.nome}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, nome: e.target.value })
                      }
                    />
                  ) : (
                    user.nome
                  )}
                </td>
                <td>
                   {selectedUser === user ? (
                    <input
                      type="text"
                      value={editedUser.cognome}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, cognome: e.target.value })
                      }
                    />
                  ) : (
                    user.cognome
                  )}
                </td>
                <td>
                  {selectedUser === user ? (
                    <input
                      type="text"
                      value={editedUser.email}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, email: e.target.value })
                      }
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {selectedUser === user ? (
                    <button
                      onClick={handleUpdateUser}
                      className="btn btn-success"
                    >
                      Conferma modifica
                    </button>
                  ) : (
                   
                    <>
                      <button
                        onClick={() => handleEditUser(user)}
                        className="btn btn-warning"
                      >
                        Modifica
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.email)}
                        className={`btn btn-danger ml-2 ${styles.space}`}
                      >
                        Elimina
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      <div>
        <h1>Gestione Corsi</h1>
        <div>
  <button
    onClick={() => setShowAlert(true)}
    className="btn btn-dark mb-4"
  >
    Inserisci corso
  </button>
  {showAlert && (
    <div className="alert alert-info">
      <h4>Inserisci un nuovo corso</h4>
      <input
        type="text"
        value={newCourse.nomeCorso}
        onChange={(e) =>
          setNewCourse({ ...newCourse, nomeCorso: e.target.value })
        }
        placeholder="Nome corso"
        className="form-control mb-2"
      />
      <input
        type="text"
        value={newCourse.descrizioneBreve}
        onChange={(e) =>
          setNewCourse({
            ...newCourse,
            descrizioneBreve: e.target.value,
          })
        }
        placeholder="Descrizione breve"
        className="form-control mb-2"
      />
      <input
        type="text"
        value={newCourse.descrizioneCompleta}
        onChange={(e) =>
          setNewCourse({
            ...newCourse,
            descrizioneCompleta: e.target.value,
          })
        }
        placeholder="Descrizione completa"
        className="form-control mb-2"
      />
      <input
        type="text"
        value={newCourse.durata}
        onChange={(e) =>
          setNewCourse({ ...newCourse, durata: e.target.value })
        }
        placeholder="Durata"
        className="form-control mb-2"
      />
      <button style={{ marginRight: '1rem' }} onClick={handleInsertCourse} className="btn btn-success">
        Conferma
      </button>
      <button
        onClick={() => setShowAlert(false)}
        className="btn btn-secondary"
      >
        Annulla
      </button>
    </div>
  )}
</div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome Corso</th>
              <th>Descrizione Breve</th>
              <th>Descrizione Completa</th>
              <th>Durata</th>
              <th>Azione</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.nomeCorso}</td>
                <td>{course.descrizioneBreve}</td>
                <td>{course.descrizioneCompleta}</td>
                <td>{course.durata} settimane</td>
                <td>
                  <button
                    onClick={() => handleDeleteCourse(course.id)}
                    className="btn btn-danger"
                  >
                    Elimina
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
