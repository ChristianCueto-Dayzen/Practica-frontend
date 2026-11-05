import './Navbar.css'

const NOMBRE_ALUMNO = 'Christian Daniel Cueto Garduño'

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="navbar-titulo">Dashboard de Ciencia de Datos</h1>
      <span className="navbar-alumno">{NOMBRE_ALUMNO}</span>
    </header>
  )
}

export default Navbar
