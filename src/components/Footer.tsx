
import { Twitter, Linkedin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Zth</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Revolutionizing fundraising through AI-powered pitch decks.
            </p>
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <Twitter size={18} className="text-gray-300" />
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <Linkedin size={18} className="text-gray-300" />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <p className="text-gray-300">San Francisco, CA</p>
              <p className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors">
                hello@zth.ai
              </p>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Launch */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Launch</h4>
            <div className="space-y-3 text-sm">
              <p className="text-blue-400 font-medium">August 15, 2024</p>
              <p className="text-gray-300 leading-relaxed">
                Be among the first to experience the future of fundraising
              </p>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <div className="space-y-3 text-sm">
              <p className="text-gray-300">Zth Smart Engine Deck™</p>
              <p className="text-gray-300">Nth Connect™</p>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Now Horizontal */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto">
              Get the latest fundraising tips and AI pitch deck insights delivered to your inbox.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Globe size={16} />
              <span>En</span>
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm min-w-0 w-full sm:w-auto"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors text-sm whitespace-nowrap w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">
              © 2024 Zth. All rights reserved. Built with{" "}
              <span className="text-red-400">♥</span> for founders.
            </p>
            <p className="text-gray-500 text-sm">
              AI-enhanced, founder-driven solutions for fundraising success.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
