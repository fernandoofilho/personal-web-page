import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
export const Contact = () => {
  return <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MailIcon size={20} className="text-blue-400 mr-3 mt-1" />
                  <div>
                    <h4 className="text-sm text-gray-400">Email</h4>
                    <a href="mailto:fernando@example.com" className="text-gray-200 hover:text-blue-400 transition-colors">
                      fernando@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon size={20} className="text-blue-400 mr-3 mt-1" />
                  <div>
                    <h4 className="text-sm text-gray-400">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-200 hover:text-blue-400 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPinIcon size={20} className="text-blue-400 mr-3 mt-1" />
                  <div>
                    <h4 className="text-sm text-gray-400">Location</h4>
                    <p className="text-gray-200">São Paulo, Brazil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your email" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-1">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors inline-flex items-center">
                Send Message
                <SendIcon size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};