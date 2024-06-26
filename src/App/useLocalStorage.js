import React from "react";

// ------------Testing------------

  // const defaultTools = [

//   { text: 'Pill Onion', completed: true },
//   { text: 'Take React.js Course', completed: false },
//   { text: 'LALALALALALALA', completed: true },
//   { text: 'Sleep 8 Hours', completed: false },
//   { text: 'Hola World', completed: false }

// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTools));
// localStorage.removeItem('TODOS_V1');

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [sincronizedItem, setSincronizedItem] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      try {
  
        const localStorageItem = localStorage.getItem(itemName);

        let parserdItem;

        if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parserdItem = initialValue;
        } else {
            parserdItem = JSON.parse(localStorageItem);
            setItem(parserdItem);
        }

        setLoading(false);
        setSincronizedItem(true);
          
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  const sincronize = () => {
    setLoading(true);
    setSincronizedItem(false);
  };

  return {
    item, 
    saveItem,
    loading,
    error,
    sincronize
  };

}

export { useLocalStorage };