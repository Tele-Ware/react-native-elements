import React from 'react';

const renderNode = (Component, content, defaultProps) => {
  if (content == null || content === false) {
    return null;
  }
  if (React.isValidElement(content)) {
    return content;
  }
  if (typeof content === 'function') {
    return content();
  }
  // Just in case
  if (content === true) {
    return <Component {...defaultProps} allowFontScaling={false} />;
  }
  if (typeof content === 'string' || typeof content === 'number') {
    return <Component {...defaultProps} allowFontScaling={false}>{content}</Component>;
  }
  return <Component {...defaultProps} {...content} allowFontScaling={false} />;
};

export default renderNode;
