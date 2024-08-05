import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaRobot, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';

function Footer() {

    return (
        <footer className="bg-black text-white py-8 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8 md:mb-0">
                        <img src={logo} alt="Logo" className="h-24 w-auto" />
                        <div className="text-base">
                            <h3 className="text-xl font-semibold mb-4 text-yellow-500">Contact</h3>
                            <div className="flex items-center mb-2">
                                <FaMapMarkerAlt className="text-yellow-500 mr-2" />
                                <p>Sector 34B, Chandigarh</p>
                            </div>
                            <div className="flex items-center mb-2">
                                <FaEnvelope className="text-yellow-500 mr-2" />
                                <p>eduspheria@gmail.com</p>
                            </div>
                            <div className="flex items-center">
                                <FaPhoneAlt className="text-yellow-500 mr-2" />
                                <p>+91 8303426916</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 mb-8 md:mb-0">
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-yellow-500">Policies</h3>
                            <ul className="list-none">
                                <li className="mb-4"><Link to="/policy" className="hover:text-yellow-400 transition-colors duration-300">Privacy Policy</Link></li>
                                <li className="mb-4"><Link to="/terms" className="hover:text-yellow-400 transition-colors duration-300">Terms and Conditions</Link></li>
                                <li className="mb-4"><Link to="/refund" className="hover:text-yellow-400 transition-colors duration-300">Refund Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-yellow-500">Links</h3>
                            <ul className="list-none">
                                <li className="mb-4"><Link to="/about" className="hover:text-yellow-400 transition-colors duration-300">About Us</Link></li>
                                <li className="mb-4"><Link to="/contact" className="hover:text-yellow-400 transition-colors duration-300">Contact Us</Link></li>
                                <li className="mb-4"><Link to="/blogs" className="hover:text-yellow-400 transition-colors duration-300">Blogs</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 absolute bottom-8 right-8 left-8 md:left-auto md:bottom-auto">
                <div className="flex gap-4 mb-4 md:mb-0">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors duration-300">
                        <FaTwitter className="text-2xl" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors duration-300">
                        <FaFacebookF className="text-2xl" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors duration-300">
                        <FaInstagram className="text-2xl" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors duration-300">
                        <FaLinkedinIn className="text-2xl" />
                    </a>
                </div>
                <div className="flex">
                    <div className="fixed bottom-8 right-8 p-3 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-400">
                        <FaRobot className="text-3xl" />
                    </div>
                </div>
            </div>
            <div className="text-center text-sm mt-16">
                <p>© {new Date().getFullYear()} <a href="https://www.dualnature.xyz" className="text-yellow-500 hover:underline">DualNature</a>. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
