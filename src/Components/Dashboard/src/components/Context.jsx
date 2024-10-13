import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Context = () => {
  const [arr, setArr] = React.useState([0, 0, 0, 0, 0, 0, 0]);

  const contextId = useSelector((state) => state.user.weekly);

  useEffect(() => {
    if (contextId) setArr(contextId);
  }, [contextId]);

  return <div>{arr.join(', ')}</div>;
};

export default Context;
