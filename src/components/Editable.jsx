import React from 'react';

export default function Editable({ id, defaultContent, type = 'text', children }) {
  const childArray = React.Children.toArray(children);
  
  if (childArray.length !== 1 || !React.isValidElement(childArray[0])) {
    return <>{children}</>;
  }
  
  const child = childArray[0];
  
  if (type === 'image') {
    if (child.type === 'img' || child.type === 'video') {
      return React.cloneElement(child, { src: defaultContent });
    } else {
      return React.cloneElement(child, {
        style: {
          ...(child.props.style || {}),
          backgroundImage: `url('${defaultContent}')`
        }
      });
    }
  } else {
    return React.cloneElement(child, { children: defaultContent });
  }
}
