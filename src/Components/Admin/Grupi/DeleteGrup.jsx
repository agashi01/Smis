import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";


const DeleteGroup = ({ groups, setGroups }) => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const deleteGroup = () => {
        const updatedGroups = groups.filter(group => group.id !== parseInt(id, 10));
        setGroups(updatedGroups);
        alert(`Grupi me ID ${id} u fshi me sukses!`);
      };

      deleteGroup();
    }
  }, [id, groups, setGroups]);

  return (
    <div className="container mt-5">
      {/* Këtu mund të vendosësh një mesazh konfirmimi ose redirect */}
    </div>
  );
};

export default DeleteGroup;
