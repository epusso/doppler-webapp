import React from 'react';

const HeaderNav = ({ nav }) => {
  return (
    <nav className="nav-left-main">
      <div className="menu-main--container">
        <ul className="menu-main">
          {nav.map((item, index) => (
            <li className={item.subNav.length ? 'submenu-item' : ''} key={index}>
              <a className={item.isSelected ? 'active' : ''} href={item.url}>
                {item.title}
              </a>
              {item.subNav.length ? (
                <ul className={'sub-menu' + (item.isSelected ? ' open' : '')}>
                  {item.subNav.map((itemSubNav, index) => (
                    <li key={index}>
                      <a className={itemSubNav.isSelected ? 'active' : ''} href={itemSubNav.url}>
                        {itemSubNav.title}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNav;
