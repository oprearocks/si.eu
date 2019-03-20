import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import highway from '../images/simbol-autostrada.png';
function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-blue-dark">
      <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8">
        <Link to="/" className="flex items-center no-underline text-white">
          <span className="font-bold text-xl tracking-tight">⚠️{siteTitle}</span>
        </Link>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
