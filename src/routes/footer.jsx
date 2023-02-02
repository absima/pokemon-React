// footer part code containing details of the website such as the creator, source code, API, icons, and the year of creation

import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div 
    // className="footer"
    style={{
      backgroundColor: "rgba(4, 58, 125, 0.883)",
      height: "3rem", 
      marginTop: "1rem",
    }}
    >
      <div className="footer-content">
        {/* <div className="footer-content-left">
          <p>
            <a
              href="/creator"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Creator
            </a>
          </p>
          <p>
            <a
              href="/source-code"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Source Code
            </a>
          </p>
          <p>
            <a
              href="/api"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              API
            </a>
          </p>
          <p>
            <a
              href="/icons"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Icons
            </a>
          </p>
        </div> */}
        <div 
        style={{
          padding: "0.5rem",
        }}
        >
          <p>
            <a
              href="/#"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              style={{color: "white"}}
            >
              &copy; {new Date().getFullYear()} Simachew
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
