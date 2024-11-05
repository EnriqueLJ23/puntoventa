
import './Reservas.css';

const Reservations = () => {
  return (
    <div className="container">
      <header className="container-header">
          <h2>Reservas</h2>
        </header>
      <div className="card">
        <h3>Calendario de Reservas</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Hora</th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miércoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
              <th>Sábado</th>
              <th>Domingo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12:00</td>
              <td>Reservado</td>
              <td>Disponible</td>
              <td>Reservado</td>
              <td>Disponible</td>
              <td>Reservado</td>
              <td>Disponible</td>
              <td>Reservado</td>
            </tr>
          </tbody>
        </table>
        <button className="add-button">Agregar Reserva</button>
      </div>
    </div>
  );
};

export default Reservations;
