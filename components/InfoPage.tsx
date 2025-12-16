import React from 'react';
import { ViewState } from '../types';

interface InfoPageProps {
  type: ViewState;
}

const InfoPage: React.FC<InfoPageProps> = ({ type }) => {
  const renderContent = () => {
    switch (type) {
      case 'help':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold border-b border-gray-300 pb-2">help / faq</h2>
            <div className="space-y-4">
              <p><strong>Q: What is this site?</strong><br/>
              A: Randomlist is a minimalist directory of the internet's most interesting, obscure, and "deep" websites. It is designed to help you break out of the algorithmic bubble.</p>
              
              <p><strong>Q: How do I use the Randomizer?</strong><br/>
              A: Navigate to the <span className="text-blue-800">randomizer</span> tab and click the "shuffle &gt;" button. A random website from our curated database will open in a new tab.</p>
              
              <p><strong>Q: How do I submit a site?</strong><br/>
              A: Use the feedback form. We only accept sites that are non-commercial, artistic, weird, or genuinely useful. No marketing landing pages.</p>
            </div>
          </div>
        );
      case 'safety':
        return (
          <div className="space-y-6">
             <h2 className="text-xl font-bold border-b border-gray-300 pb-2">safety tips</h2>
             <ul className="list-disc pl-5 space-y-3">
               <li><strong>External Links:</strong> This website acts as a portal. We link to third-party websites that we do not own or control. While we curate for quality, content on the internet can change.</li>
               <li><strong>Downloads:</strong> Be cautious when downloading files from any website. We do not host files directly.</li>
               <li><strong>Personal Information:</strong> Never give out your password, credit card number, or social security number to a site you do not trust.</li>
               <li><strong>Scams:</strong> Be aware of common internet scams. If a deal looks too good to be true on any site you visit, it probably is.</li>
             </ul>
          </div>
        );
      case 'privacy':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold border-b border-gray-300 pb-2">privacy policy</h2>
            <div className="space-y-3">
              <p><strong>1. Data Collection</strong><br/>
              We do not collect personal data. We do not require you to register. We do not track your IP address for marketing purposes.</p>
              
              <p><strong>2. Cookies</strong><br/>
              This site is static. We do not use persistent tracking cookies.</p>
              
              <p><strong>3. Third Parties</strong><br/>
              When you click a link and leave Randomlist, our privacy policy no longer applies. You are subject to the policies of the destination website.</p>
            </div>
          </div>
        );
      case 'feedback':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold border-b border-gray-300 pb-2">feedback</h2>
            <p>Found a broken link? Have a suggestion for the directory? Hate the design?</p>
            
            <div className="bg-[#f7f7f7] p-6 border border-gray-300">
              <p className="mb-2"><strong>Contact:</strong></p>
              <ul className="list-disc pl-5 space-y-1 text-blue-800">
                <li><a href="mailto:hello@sbatra.xyz" className="hover:underline">hello@sbatra.xyz</a></li>
                <li><a href="https://twitter.com/sbatra_xyz" target="_blank" rel="noreferrer" className="hover:underline">@sbatra_xyz (Twitter/X)</a></li>
              </ul>
              
              <p className="mt-4 text-xs text-gray-500">* Please include "Randomlist Submission" in the subject line if submitting a site.</p>
            </div>
          </div>
        );
      case 'terms':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold border-b border-gray-300 pb-2">terms of use</h2>
            <div className="text-xs space-y-4 uppercase font-mono bg-[#f9f9f9] p-4 border border-gray-200">
              <p>AGREEMENT BETWEEN USER AND RANDOMLIST</p>
              <p>The Randomlist Web Site is comprised of various Web pages operated by Randomlist.</p>
              <p>The Randomlist Web Site is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein. Your use of the Randomlist Web Site constitutes your agreement to all such terms, conditions, and notices.</p>
              <p>NO UNLAWFUL OR PROHIBITED USE</p>
              <p>As a condition of your use of the Randomlist Web Site, you warrant to Randomlist that you will not use the Randomlist Web Site for any purpose that is unlawful or prohibited by these terms, conditions, and notices.</p>
              <p>LIABILITY DISCLAIMER</p>
              <p>THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE RANDOMLIST WEB SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN.</p>
            </div>
          </div>
        );
      default:
        return <div>page not found</div>;
    }
  };

  return (
    <div className="max-w-[800px] mx-auto p-4 font-helvetica text-sm leading-relaxed text-[#222]">
       <div className="bg-white border-x border-gray-200 min-h-[50vh] px-4 py-8 sm:px-8">
         {renderContent()}
       </div>
    </div>
  );
};

export default InfoPage;