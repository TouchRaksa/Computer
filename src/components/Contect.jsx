
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTiktok
} from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    return (
        <main className="p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-100 font-sans antialiased hover:scale-10s transition">
        <section className="pt-[70px] max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <h1 className="text-4xl font-extrabold text-gray-900 text-center lg:text-left mb-6">
                    Contect Us
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Welcome to The Workshop, your go-to destination for powerful, precision-crafted tools. Founded in the 2000s, our workshop is dedicated to creating smooth, efficient projects for all undertakings, whether it’s tackling a major construction job, completing a DIY task, or simply maintaining your space.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    At The Workshop, we believe that every project deserves the right partner. Our team of skilled engineers and designers uses only the finest materials and technology to ensure that each tool is not only robust and reliable but also incredibly effective. From classic, dependable models to innovative, cutting-edge solutions, our range has something for every professional and enthusiast.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    We pride ourselves on our commitment to quality and customer satisfaction. Our team works closely with each client to understand their needs, ensuring that every tool is a high-performance solution tailored to your specific requirements. Whether you’re looking for a simple, reliable model or an advanced, feature-packed machine, we’ve got you covered.  
                </p>
                
                <div className="flex space-x-4 justify-center lg:justify-start">
                    <a href="#" className="text-blue-500">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="#" className="text-pink-500">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="#" className="text-black">
                    <FontAwesomeIcon icon={faTiktok} size="2x" />
                    </a>
                    <div className="text-black flex items-center space-x-2">
                    <FontAwesomeIcon icon={faPhone} size="2x" />
                    <span className="text-base">+855 071 832 9144</span>
                    </div>
                </div>
            </div>

            <div className="top-[40px] lg:w-1/2 relative">
            <h2 className="text-2xl font-bold mb-4 text-center lg:text-left p-8">Find Us</h2>
            <div className="h-96 w-full relative rounded-lg overflow-hidden shadow-lg">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.041855960898!2d104.8907417!3d11.568676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRoyal%20University%20of%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1730806653327!5m2!1sen!2skh"
                width="600"
                height="450"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map"
                ></iframe>
            </div>
            </div>
        </section>
        </main>
    );
};

export default AboutUs;
