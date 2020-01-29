import './ContentWrapper.scss';
import React from 'react';
import cn from 'classnames';

const ContentWrapper = ({ children, className }) => (
  <div className={cn('content-wrapper', { [className]: className })}>{children}</div>
);

export default ContentWrapper;
