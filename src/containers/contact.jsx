import { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.send(
            "service_8t30998", //  EmailJS Service ID
            "template_wfd3q3w", // EmailJS Template ID
            {
                from_name: formData.firstName + " " + formData.lastName,
                reply_to: formData.email,
                subject: formData.subject,
                message: formData.message
            },
            "03JIpOUeD4I7Nh6LK" // EmailJS Public Key
        )
        .then((result) => {
            console.log("Email sent:", result.text);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
        })
        .catch((error) => {
            console.log("Error:", error.text);
        });
    };

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen p-6 " style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)", }}>
            <h1 className="mt-8 mb-6 text-3xl font-bold text-center sm:mt-0">
                Get In Touch With Me
            </h1>

            
            <div className="flex flex-col w-full max-w-5xl gap-8 md:flex-row" style={{ marginLeft: '80', marginTop: '50px' }}>
                {/* Contact Information */}
                <div className="flex-1 text-left text-[#cccccc] light:text-black">
                    <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
                        Feel free to reach out! Whether it’s about work, a project, or just a good conversation about mathematics, tech, and AI, 
                        I’m always open to connecting. You can contact me via email or by using the form.
                    </p>
    
                    <h4 style={{ fontSize: '1.5rem', color: "var(--text-color)", marginBottom: '10px', marginTop: '15px', fontWeight: 'bold' }}>
                    Tam Tran
                    </h4>
    
                    <p style={{ fontSize: '1.2rem', color: '#cccccc', marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '1.2rem', marginRight: '10px' }} />
                        <a href="mailto:itistamtran@gmail.com" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#FFB6C1', marginLeft: '8px' }}>
                            itistamtran@gmail.com
                        </a>
                    </p>
                </div>
                
                {/* Contact Form */}
                <div className="flex-1 w-full max-w-2xl p-6 bg-gray-800 rounded-lg shadow-md md:max-w-4xl lg:max-w-5xl">
                    {submitted ? (
                        <p className="text-center text-[#FFB6C1] font-bold">Thank you! Your message has been sent.</p>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <input type="text" name="firstName" placeholder="First Name *" value={formData.firstName} onChange={handleChange} className="flex-1 p-3 text-white bg-gray-700 border rounded-lg" required />
                                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="flex-1 p-3 text-white bg-gray-700 border rounded-lg" />
                            </div>
                            <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} className="p-3 text-white bg-gray-700 border rounded-lg" required />
                            <input type="text" name="subject" placeholder="Subject *" value={formData.subject} onChange={handleChange} className="p-3 text-white bg-gray-700 border rounded-lg" required />
                            <textarea name="message" placeholder="Message *" value={formData.message} onChange={handleChange} className="h-32 p-3 text-white bg-gray-700 border rounded-lg" required></textarea>
                            <button type="submit" className="bg-white hover:bg-[#FFB6C1] text-black hover:text-black p-3 rounded-lg font-bold">Submit</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}