import { useEffect } from 'react';

export const useMultipleKeyPress = (callback, targetKeys) => {
  let currentPressed = [];

  const checkPressedKeys = () => {
    let counter = targetKeys.length;
    targetKeys.forEach((targetKey) => {
      if (currentPressed.find((pressedKey) => targetKey === pressedKey)) {
        counter -= 1;
      }
    });

    return counter;
  };

  const keydownHandler = (event) => {
    if (!currentPressed.find((element) => element === event.key)) {
      currentPressed.push(event.key);
    }

    if (currentPressed.length === targetKeys.length) {
      if (checkPressedKeys() === 0) {
        callback();
      }
    }
  };

  const keyupHandler = (event) => {
    currentPressed = currentPressed.filter((element) => element !== event.key);
  };

  window.addEventListener('keydown', keydownHandler);
  window.addEventListener('keyup', keyupHandler);
  return () => {
    window.removeEventListener('keyup', keyupHandler);
    window.removeEventListener('keydown', keydownHandler);
  };
};

export const useOnKeyPress = (callback, targetKey) => {
    useEffect(() => {
      const keyPressHandler = (event) => {
        if (event.key === targetKey) {
          callback();
        }
      };
      window.addEventListener('keydown', keyPressHandler);
      return () => {
        window.removeEventListener('keydown', keyPressHandler);
      };
    }, [callback, targetKey]);
  };