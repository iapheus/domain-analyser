import React, { useState } from 'react';
import DrawerSection from './DrawerSection';
import AboutModal from './AboutModal';

import infoSquare from '../icones/info-square.svg';
import security from '../icones/security.svg';
import server from '../icones/server.svg';
import computer from '../icones/computer.svg';
import hamburger from '../icones/hamburger.svg';
import main from '../icones/main.svg';

function SideDrawer({ isSidebarOpen, setIsSidebarOpen }) {
  const [showDialog, setShowDialog] = useState(false);

  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 h-full bg-[#072030] text-[#EEEEEE] transition-all duration-300 ease-in-out ${
        isSidebarOpen ? 'w-64' : 'w-16'
      }`}
    >
      <img
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`pt-4 mx-auto cursor-pointer ${
          isSidebarOpen ? 'float-right mr-2' : ''
        }`}
        src={hamburger}
        alt="Toggle Menu"
      />
      <div className={`mt-4 pt-8 space-y-3 ${isSidebarOpen ? 'pt-14' : ''}`}>
        <DrawerSection url={''} current={isSidebarOpen} logo={main} title={'Main'} />
        <DrawerSection
          url={'quality'}
          current={isSidebarOpen}
          logo={infoSquare}
          title={'Quality & Info'}
        />
        <DrawerSection
          url={'security'}
          current={isSidebarOpen}
          logo={security}
          title={'Security'}
        />
        <DrawerSection
          url={'server'}
          current={isSidebarOpen}
          logo={server}
          title={'Server Info'}
        />
        <DrawerSection
          url={'client'}
          current={isSidebarOpen}
          logo={computer}
          title={'Client-Side Information'}
        />
        <div onClick={handleOpenDialog} className="absolute inset-x-0 bottom-3">
          <h1
            className={`text-xl mx-20 hover:text-[#65747B] hover:duration-150 hover:transition-colors cursor-pointer ${
              isSidebarOpen ? '' : 'hidden'
            }`}
          >
            About Us
          </h1>
        </div>
        <AboutModal open={showDialog} handleClose={handleCloseDialog} />
      </div>
    </div>
  );
}

export default SideDrawer;
