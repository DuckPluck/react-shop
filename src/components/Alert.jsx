import React, {useEffect, useContext} from 'react';
import {ShopContext} from '../context';

export function Alert() {
  const {alertName = '', closeAlert} = useContext(ShopContext);
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };

  }, [closeAlert]);
  return (
      <div id="toast-container">
        <div className="toast">{alertName} added to basket</div>
      </div>
  );
}
