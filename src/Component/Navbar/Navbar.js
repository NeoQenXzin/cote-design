// import React, { useState } from 'react';
// import Link from 'next/link';
// import Head from 'next/head';
// import Image from 'next/image';
// import logoDark from '../../../public/assets/logos/logoLight.png';
// import style from './Navbar.module.css';

// export default function Navbar(props) {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <>
//       <Head>
//         <title>Coté Design</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//         <link
//           href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
//           rel="stylesheet"
//           integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
//           crossOrigin="anonymous"
//         />
//       </Head>
//       <div className={style.navbar}>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//           <div className="container-fluid">
//             <Link href={'/'} className="navbar-brand mx-4">
//               <Image src={logoDark} width="150" height="60" />
//             </Link>
//             <button
//               className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'}`}
//               type="button"
//               onClick={toggleNav}
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon" />
//             </button>
//             <div className={`navbar-collapse ${isNavOpen ? 'show' : ''}`}>
//               <ul className={`navbar-nav ms-auto ${isNavOpen ? 'd-flex flex-column align-items-center' : ''}`}>
//                 <li className="nav-item">
//                   <Link href={'/accueil'} className="nav-link mx-4">Accueil</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link href={'/services'} className="nav-link mx-4">Services</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link href={'/contact'} className="nav-link mx-4">Contact</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//       <style jsx>{`
//         @media (max-width: 991px) {
//           .navbar-collapse:not(.show) {
//             display: none !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import logoDark from '../../../public/assets/logos/logoLight.png';
import style from './Navbar.module.css';

export default function Navbar(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 991px)');
    const handleResize = () => {
      if (!mediaQuery.matches) {
        setIsNavOpen(false);
      }
    };
    mediaQuery.addListener(handleResize);
    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Coté Design</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>
      <div className={style.navbar}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link href={'/'} className="navbar-brand mx-4">
              <Image src={logoDark} width="150" height="60" />
            </Link>
            <button
              className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'}`}
              type="button"
              onClick={toggleNav}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className={`navbar-collapse ${isNavOpen ? 'show' : ''}`}>
              <ul className={`navbar-nav ms-auto ${isNavOpen ? 'd-flex flex-column align-items-center' : ''}`}>
                <li className="nav-item">
                  <Link href={'/accueil'} className="nav-link mx-4">Accueil</Link>
                </li>
                <li className="nav-item">
                  <Link href={'/services'} className="nav-link mx-4">Services</Link>
                </li>
                <li className="nav-item">
                  <Link href={'/contact'} className="nav-link mx-4">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <style jsx>{`
        @media (max-width: 991px) {
          .navbar-collapse:not(.show) {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
