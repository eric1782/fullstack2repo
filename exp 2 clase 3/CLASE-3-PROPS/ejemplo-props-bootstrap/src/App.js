import logo from './logo.svg';
import './App.css';
import TarjetaProducto from './components/TarjetaProducto';


function App() {
  return (
    <div className="container my-2">
      <h1 className="text-center mb-5 display-4">Tienda Dimarsa</h1>
      <div className="row">
        <TarjetaProducto 
        nombre="Lenovo LOQ Gen 9 Intel Core i7"
        descripcion="Laptop Gamer con procesador Intel Core i7, 16GB RAM, 512GB SSD y tarjeta gráfica NVIDIA GeForce RTX 3060."
        precio="900.999"
        categoria="Laptops"
        imagen="https://www.elcontainer.cl/24314-big_default/notebook-hp-elitebook-840-g6-intel-core-i7-16gb-ram-512gb-ssd.jpg"
        />
        <TarjetaProducto 
        nombre="Notebook Dell Workstation 5580 Intel Core i7"
        descripcion="Intel Core i7 7820HQ Quad Core, 8 Hilos, 8Mb Caché, 2.9GHz turbo boost 3.9Ghz"
        precio="1.789.999"
        categoria="Laptops"
        imagen="https://www.elcontainer.cl/31991-big_default/notebook-dell-workstation-5580-intel-core-i7-nvidia-geforce-940mx-16gb-ram-512gb-ssd.jpg"
        />
        <TarjetaProducto 
        nombre="Lenovo Thinkpad T14 Ryzen 5 Pro"
        descripcion="AMD Ryzen 5 Pro 4650U Hexa-Core (2.1GHz-4.10Hz, caché de 12 MB)"
        precio="380.390"
        categoria="Laptops"
        imagen="https://www.elcontainer.cl/25681-big_default/notebook-lenovo-thinkpad-t14-ryzen-5-pro-16gb-ram-256gb-ssd.jpg"
        />
      </div>
    </div>
  );
}

export default App;
