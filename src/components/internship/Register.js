import React from 'react';

const Register = () => {
  return (
    <div className="bg-black text-white font-poppins p-8 text-center">
      <h2 className="text-4xl poppins-light mb-6 leading-relaxed">
        Start your internship at <br />
        <span className="ciresta-color poppins-semibold">Ciresta Technologies</span>
      </h2>
      <button className="ciresta-bg text-white font-medium px-6 py-3 w-40 hover:bg-indigo-600 transition duration-300" style={{borderRadius: "30px"}}>
        Register
      </button>
    </div>
  );
};

export default Register;
