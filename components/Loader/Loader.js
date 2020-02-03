import './Loader.scss';
import React from 'react';
import cn from 'classnames';

const Loader = ({ className }) => {
  return (
    <div className={cn('loader-container', { [className]: !!className })}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
