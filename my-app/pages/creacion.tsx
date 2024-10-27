import { useState } from 'react';

export default function CrearProducto() {
  const [formData, setFormData] = useState({ codigo: '', nombre: '', descripcion: '', precio: 0, stock: 0 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/productos/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('Error:', data.error);
      alert('Error al crear el producto: ' + data.error);
    } else {
      console.log('Producto creado:', data);
      alert('Producto creado con éxito');
      // Aquí puedes redirigir o resetear el formulario
      setFormData({ codigo: '', nombre: '', descripcion: '', precio: 0, stock: 0 }); // Resetea el formulario
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: '50px auto',
  };

  const headerStyle = {
    color: '#003366',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const buttonStyle = {
    backgroundColor: '#007bbd',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    padding: '12px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Creación de Producto</h2>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <input
          type="text"
          placeholder="Código"
          value={formData.codigo}
          onChange={(e) => setFormData({ ...formData, codigo: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Precio"
          value={formData.precio}
          onChange={(e) => setFormData({ ...formData, precio: parseFloat(e.target.value) })}
          required
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Stock"
          value={formData.stock}
          onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
          required
          style={inputStyle}
        />
        <button className="button" type="submit" style={buttonStyle}>Crear Producto</button>
      </form>
    </div>
  );
}
