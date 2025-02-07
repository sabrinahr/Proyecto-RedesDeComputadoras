import React, { useState } from 'react';
import { getConfiguracion, actualizarConfiguracion } from '../services/ConfiguracionService';
import { ConfiguracionTipo } from '../types/ConfiguracionTipo';
import EditarPerfilModal from './EditarPerfilModal';

const Configuracion: React.FC = () => {
    const [configuracion, setConfiguracion] = useState<ConfiguracionTipo>(getConfiguracion());
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSave = (configuracionActualizada: ConfiguracionTipo) => {
        actualizarConfiguracion(configuracionActualizada);
        setConfiguracion(configuracionActualizada);
        closeModal();
    };

    return (
        <div className="bg-light min-vh-100 p-4" style={{ backgroundColor: '#B0E0E6' }}>
            <h1 className="fs-2 mb-4">Mi perfil</h1>
            <div className="container bg-white p-4 rounded shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="fs-4 mb-1 fw-bold text-dark">Información personal</p>
                    <button className="btn btn-primary fs-6" onClick={openModal}>Editar Perfil</button>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label fs-5 text-muted">Nombre:</label>
                        <p className="fs-5">Leo Messi</p>
                    </div>
                    <div className="col">
                        <label className="form-label fs-5 text-muted">Correo electrónico:</label>
                        <p className="fs-5">lio@gmail.com</p>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label fs-5 text-muted">Contraseña:</label>
                        <p className="fs-5">12345</p>
                    </div>
                </div>
                {isModalOpen && (
                    <EditarPerfilModal
                        configuracion={configuracion}
                        closeModal={closeModal}
                        onSave={handleSave}
                    />
                )}
            </div>
        </div>
    );
};

export default Configuracion;