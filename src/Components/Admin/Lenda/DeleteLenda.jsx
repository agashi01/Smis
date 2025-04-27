import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";

const DeleteLenda = ({ lendet, setLendet }) => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const deleteLenda = () => {
        const updatedLendet = lendet.filter(lenda => lenda.id !== parseInt(id, 10));
        setLendet(updatedLendet);
        alert(`Lënda me ID ${id} u fshi me sukses!`);
      };

      deleteLenda();
    }
  }, [id, lendet, setLendet]);

  return (
    <div className="container mt-5">
      {/* Mund të shtosh ndonjë tekst si: Lënda po fshihet... */}
    </div>
  );
};

export default DeleteLenda;
