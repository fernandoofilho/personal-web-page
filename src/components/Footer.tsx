import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, HeartIcon } from 'lucide-react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold tracking-tight">
              Fernando<span className="text-blue-500">.</span>dev
            </a>
            <p className="text-gray-400 mt-2">
              Software Developer specializing in modern web technologies.
            </p>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://github.com/fernandoofilho" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <GithubIcon size={24} />
            </a>
            <a href="https://linkedin.com/in/fernandoofilho" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={24} />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <TwitterIcon size={24} />
            </a> */}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Fernando Araujo. All rights reserved.
          </div>
          <div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs mt-8 flex items-center justify-center">
          <span>Made with</span>
          <HeartIcon size={14} className="mx-1 text-red-500" />
          <span>by Fernando Araujo</span>
        </div>
      </div>
    </footer>;
};