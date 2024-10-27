// app/listado/page.tsx
'use client';

import { useEffect, useState } from 'react';

export default function ListadoPage() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchProductos() {
      const response = await fetch('/api/productos');
      const data = await response.json();
      setProductos(data);
    }
    fetchProductos();
  }, []);

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Listado de Productos</h2>
      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerCellStyle}>Código</th>
              <th style={headerCellStyle}>Nombre</th>
              <th style={headerCellStyle}>Descripción</th>
              <th style={headerCellStyle}>Precio</th>
              <th style={headerCellStyle}>Stock</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.codigo}>
                <td style={cellStyle}>{producto.codigo}</td>
                <td style={cellStyle}>{producto.nombre}</td>
                <td style={cellStyle}>{producto.descripcion}</td>
                <td style={cellStyle}>${producto.precio}</td>
                <td style={cellStyle}>{producto.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const containerStyle = {
  textAlign: 'center',
  padding: '50px',
  backgroundColor: '#e0f7fa', // Celeste
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const headerStyle = {
  color: '#003366', // Azul oscuro
  marginBottom: '30px',
};

const tableContainerStyle = {
  overflowX: 'auto',
  width: '80%', // Ancho de la tabla
  backgroundColor: '#ffffff', // Fondo blanco para la tabla
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const headerCellStyle = {
  backgroundColor: '#007bbd', // Azul para el encabezado
  color: '#ffffff',
  padding: '10px',
};

const cellStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
};
