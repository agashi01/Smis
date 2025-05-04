import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";

const DeleteStudent = ({ students, setStudents }) => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const deleteStudent = () => {
        const updatedStudents = students.filter(student => student.id !== parseInt(id, 10));
        setStudents(updatedStudents);
        alert(`Studenti me ID ${id} u fshi me sukses!`);
      };

      deleteStudent();
    }
  }, [id, students, setStudents]);

  return (
    <div className="container mt-5">
      {/* Mund të shtosh ndonjë mesazh ose redirect këtu */}
    </div>
  );
};

export default DeleteStudent;
