import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get("job");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: jobId ? `Application for Job #${jobId}` : "",
    message: "",
    resume: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real app, you would submit the form data to a server here
      console.log("Form submitted:", formData);

      // Simulate successful submission
      setTimeout(() => {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          resume: null,
        });
      }, 1000);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl text-gray-100">
              Have questions or ready to start your job search or talent
              recruitment? Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you're looking to hire talent or explore career
                opportunities, our team is here to help. Reach out using the
                contact information below or fill out the form.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-full mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Office</h3>
                    <p className="text-gray-600">
                      Fortis Tower, Woodvale Groove, Westlands, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-full mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      info@rejoicerecruitment.co.ke
                      <br />
                      careers@rejoicerecruitment.co.ke
                      <br />
                      ibrahim@rejoicerecruitment.co.ke
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-full mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      +254 751 374 780
                      <br />
                      +254 708 830 174
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Website</h3>
                <p className="text-gray-600 mb-4">
                  <a
                    href="https://www.rejoicerecruitment.co.ke"
                    className="text-primary hover:underline"
                  >
                    www.rejoicerecruitment.co.ke
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3 bg-white rounded-lg p-8 shadow-md">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="flex justify-center mb-4 text-green-500">
                    <CheckCircle size={64} />
                  </div>
                  <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
                  <p className="text-gray-600 mb-6">
                    Your message has been received. We'll get back to you
                    shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold mb-6">
                    {jobId ? "Apply for This Position" : "Send Us a Message"}
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-gray-700 mb-2"
                        >
                          Your Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full rounded-md border ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          } p-3 focus:outline-none focus:ring-2 focus:ring-primary`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 mb-2"
                        >
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full rounded-md border ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          } p-3 focus:outline-none focus:ring-2 focus:ring-primary`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-gray-700 mb-2"
                        >
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+254 7XX XXX XXX"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-gray-700 mb-2"
                        >
                          Subject*
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full rounded-md border ${
                            errors.subject
                              ? "border-red-500"
                              : "border-gray-300"
                          } p-3 focus:outline-none focus:ring-2 focus:ring-primary`}
                          placeholder="How can we help you?"
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.subject}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 mb-2"
                      >
                        Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full rounded-md border ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        } p-3 focus:outline-none focus:ring-2 focus:ring-primary`}
                        placeholder="Type your message here..."
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {jobId && (
                      <div className="mb-6">
                        <label
                          htmlFor="resume"
                          className="block text-gray-700 mb-2"
                        >
                          Upload Resume
                        </label>
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          onChange={handleFileChange}
                          className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                          accept=".pdf,.doc,.docx"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          Accepted formats: PDF, DOC, DOCX (Max 5MB)
                        </p>
                      </div>
                    )}

                    <button type="submit" className="btn btn-primary w-full">
                      <Send size={18} className="mr-2" />
                      {jobId ? "Submit Application" : "Send Message"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4394118/pexels-photo-4394118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        ></div>
        <div className="absolute inset-0 bg-primary opacity-20"></div>
      </section>
    </>
  );
};

export default Contact;
