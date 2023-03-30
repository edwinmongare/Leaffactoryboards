import getConfig from 'next/config';
import Link from 'next/link';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppTopbar = forwardRef((props, ref) => {
 const { showProfileSidebar } = useContext(LayoutContext);
 const menubuttonRef = useRef(null);
 const topbarmenuRef = useRef(null);
 const topbarmenubuttonRef = useRef(null);
 const contextPath = getConfig().publicRuntimeConfig.contextPath;

 useImperativeHandle(ref, () => ({
  menubutton: menubuttonRef.current,
  topbarmenu: topbarmenuRef.current,
  topbarmenubutton: topbarmenubuttonRef.current
 }));
 const pageTitle = props.pageTitle || '';

 return (
  <div className="layout-topbar">
   <Link href="/">
    <a className="layout-topbar-logo">
     <>
      <img src={`${contextPath}/layout/images/logo.png`} height={'95px'} widt={'true'} alt="logo" />
      {/* <span>Leaf Boards</span> */}
     </>
    </a>
   </Link>

   <button
    ref={topbarmenubuttonRef}
    type="button"
    className="p-link layout-topbar-menu-button layout-topbar-button"
    onClick={showProfileSidebar}
   ></button>
   <div className="grid">
    <div className="col-12 xl:col-12 mt-3 col-md-12 text-center">
     <h4 className="text-900 ml-5 text-black font-semibold">Leaf Boards -{pageTitle}</h4>
    </div>
   </div>
  </div>
 );
});

export default AppTopbar;
