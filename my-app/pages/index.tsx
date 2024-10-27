import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Gestión de Productos</h1>
      <div style={buttonContainerStyle}>
        <Link href="/listado">
          <button style={buttonStyle}>Generar Listado</button>
        </Link>
        <Link href="/consulta">
          <button style={buttonStyle}>Consulta por Código</button>
        </Link>
        <Link href="/creacion">
          <button style={buttonStyle}>Creación de Producto</button>
        </Link>
        <Link href="/actualizacion">
          <button style={buttonStyle}>Actualización de Producto</button>
        </Link>
      </div>
    </div>
  );
}

const containerStyle = {
  textAlign: 'center',
  padding: '50px',
  backgroundColor: '#f0f8ff', // Color celeste suave
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const headerStyle = {
  color: '#003366', // Azul oscuro
  marginBottom: '30px',
  fontSize: '2.5rem', // Tamaño de fuente más grande
  fontWeight: 'bold', // Negrita
};

const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px', // Espaciado entre botones
};

const buttonStyle = {
  backgroundColor: '#007bbd', // Azul
  color: '#ffffff',
  border: 'none',
  borderRadius: '5px',
  padding: '15px 30px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s, transform 0.2s', // Efecto de transición
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  width: '200px', // Ancho fijo para todos los botones
};

// Efecto de hover para los botones
buttonStyle[':hover'] = {
  backgroundColor: '#005fa3', // Color más oscuro en hover
  transform: 'scale(1.05)', // Efecto de escala
};
