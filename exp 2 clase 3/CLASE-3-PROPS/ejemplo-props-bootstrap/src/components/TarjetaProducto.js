function TarjetaProducto(props) {
    return (

        <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
                <img src={props.imagen} className="card-img-top" alt={props.nombre} style={{height: '200px', objectFit: 'contain'}}/>
                <div className="card-body">
                    <h5 className="card-title text-primary">{props.nombre}</h5>
                    <p className="card-text text-muted">{props.descripcion}</p>
                    <p className="h4 text-success fw-bold">{props.precio}</p>
                    <div className="d-flex justify-content-between aling-items-center">
                        <span className="badge bg-info text-dark">{props.categoria}</span>
                        <button className="btn btn-primaty btn-sm">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TarjetaProducto;