import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/programs', label: 'Programs' },
    { href: '/get-involved', label: 'Get Involved' },
    { href: '/donate', label: 'Donate' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* NGO Info */}
          <div className="space-y-4">
            <div className="text-dark">
              <div className="text-sm font-light font-heading">HOPE AND DIGNITY</div>
              <div className="text-lg font-bold font-heading">EMPOWERMENT INITIATIVE</div>
            </div>
            <p className="text-gray-600 font-body text-sm leading-relaxed">
              Empowering widows and inspiring students to create a better future. Together, we build communities 
              where everyone has the opportunity to thrive and discover their purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-dark font-heading font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors font-body text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-dark font-heading font-semibold text-lg">Contact Us</h3>
            <div className="space-y-2 text-sm font-body text-gray-600">
              <p>Head Office: To Be Added</p>
              <p>Phone Number: 0433821437</p>
              <p>Email: admin@ngowebsite.com.ng</p>
            </div>
            <div className="space-y-2">
              <p className="text-dark font-body font-medium text-sm">Social Links:</p>
              <div className="flex space-x-4 items-center">
                <a href="#" aria-label="Facebook" className="inline-block">
                  <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} className="opacity-90 hover:opacity-100 transition" />
                </a>
                <a href="#" aria-label="Twitter" className="inline-block">
                  <Image src="/icons/twitter.svg" alt="Twitter" width={20} height={20} className="opacity-90 hover:opacity-100 transition" />
                </a>
                <a href="#" aria-label="Instagram" className="inline-block">
                  <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} className="opacity-90 hover:opacity-100 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 font-body text-sm">
              Copyright © 2023 HOPE AND DIGNITY EMPOWERMENT INITIATIVE. All Rights Reserved.
            </p>
            <div className="flex space-x-4 text-sm font-body">
              <Link href="/terms" className="text-gray-600 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
