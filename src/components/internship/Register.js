import React from 'react';

const Register = () => {
  return (
    <div className="bg-black text-white font-poppins p-8 text-center">
      <h2 className="text-3xl poppins-light mb-6 leading-relaxed">
        Start your internship at <br />
        <span className="ciresta-color text-4xl poppins-semibold">Ciresta Technologies</span>
      </h2>
      <a href="https://forms.gle/UbhYX7DtCmNvxuDx5" target='_blank' rel="noopener noreferrer" className="ciresta-bg text-white font-medium px-6 py-3 w-40 hover:bg-indigo-600 transition duration-300" style={{borderRadius: "30px"}}>
        Register
      </a>
    </div>
  );
};

export default Register;
