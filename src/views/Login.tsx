'use client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setStatus('Please fill in all fields.');
      return;
    }

    try {
      setStatus('Login successfull!');
      setFormData({ username: '', password: '' });
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="mt-[50px] flex flex-row items-center justify-center" id="Login">
      <div className="bg-gradient-to-r from-green-100 bg-green-200 text-white w-[500px] min-h-[500px] font-poppins">
        <h1 className="flex justify-center items-center text-black text-4xl font-bold py-6">
          LOGIN
        </h1>

        <div className="max-w-xl mx-auto p-4">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
            
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label htmlFor="username" className="w-full sm:w-24 font-extrabold text-gray-700 mb-2 sm:mb-0">
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Your User Name"
                className="flex-grow p-3 border text-black border-gray-300 placeholder-gray-400 rounded-md"
              />
            </div>

           

            <div className="flex flex-col sm:flex-row sm:items-start">
              <label htmlFor="password" className="w-full sm:w-24 font-extrabold text-gray-700 mb-2 sm:mb-0">
                Password
              </label>
              <textarea
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
            
                className="flex-grow p-3 border text-black border-gray-300 placeholder-gray-400 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-400 text-white py-3 rounded-md hover:bg-green-700 transition"
            >
              Login
            </button>

            {status && <p className="text-center mt-2 text-sm text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}