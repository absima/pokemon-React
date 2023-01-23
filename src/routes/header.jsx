// header part

import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <div
        style={{
          // backgroundColor: "violet",
          color: 'rgba(4, 58, 125, 0.883)',
        }}
      >
        <h1> Pokéstuff</h1>
      </div>
      <div>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? 'gray' : '',
            };
          }}
          to={`/`}
          key={'home'}
        >
          <div className="spandiv">
            <span className="span">Home</span>
          </div>
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? 'gray' : '',
            };
          }}
          to={`/pokemon`}
          key={'pokedex'}
        >
          <div className="spandiv">
            <span className="span">Pokedex</span>
          </div>
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? 'gray' : '',
            };
          }}
          to={`/games`}
          key={'games'}
        >
          <div className="spandiv">
            <span className="span">Games</span>
          </div>
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? 'gray' : '',
            };
          }}
          to={`/about`}
          key={'about'}
        >
          <div className="spandiv">
            <span className="span">About</span>
          </div>
        </NavLink>

        <hr
          style={{
            color: 'rgba(4, 58, 125, 0.883)',
            backgroundColor: 'rgba(4, 58, 125, 0.883)',
            height: 2,
            width: '100%',
          }}
        />
      </div>
    </>
  );
}
