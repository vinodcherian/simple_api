import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold"><Link to="/" className="hover:underline">Dashboard</Link></div>
        <ul className="flex space-x-4">
          <li><Link to="/Bug" className="hover:underline">Track Bug Incident</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;