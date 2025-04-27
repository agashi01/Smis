import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";

const DeleteStaff = ({ staff, setStaff }) => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const deleteStaffMember = () => {
        const updatedStaff = staff.filter(member => member.id !== parseInt(id, 10));
        setStaff(updatedStaff);
        alert(`Stafi me ID ${id} u fshi me sukses!`);
      };

      deleteStaffMember();
    }
  }, [id, staff, setStaff]);

  return (
    <div className="container mt-5">
    
    </div>
  );
};

export default DeleteStaff;
