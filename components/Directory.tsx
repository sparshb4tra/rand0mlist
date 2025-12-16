import React from 'react';
import { categories } from '../data/sites';
import * as Icons from 'lucide-react';

const IconRenderer = ({ name, className }: { name: string; className?: string }) => {
  // @ts-ignore
  const Icon = Icons[name];
  return Icon ? <Icon className={className} /> : null;
};

const Directory: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header Bar */}
      <div className="bg-[#eeeeee] border-b border-gray-300 py-1 px-2 text-center mb-4">
        <h2 className="font-bold text-sm">internet directory</h2>
      </div>

      <div className="max-w-[1200px] mx-auto px-3 pb-12">
        {/* CSS Grid to mimic columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          
          {categories.map((category) => (
            <div key={category.id} className="mb-2">
              {/* Category Header */}
              <div className="flex items-center gap-1.5 mb-2 border-b border-gray-300 pb-1">
                <IconRenderer name={category.icon} className="w-3.5 h-3.5 text-gray-600" />
                <h3 className="font-bold text-sm lowercase text-[#222]">
                  <a href="#" className="hover:underline">{category.name}</a>
                </h3>
              </div>

              {/* Links */}
              <ul className="text-sm space-y-1">
                {category.sites.map((site, idx) => (
                  <li key={idx} className="leading-tight truncate pr-2">
                    <a 
                      href={site.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[#0000ee] hover:underline visited:text-[#551a8b]"
                      title={site.description}
                    >
                      {site.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Directory;