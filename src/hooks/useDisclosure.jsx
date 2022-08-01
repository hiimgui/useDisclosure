import { useState } from "react";

const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(false);
  function close() {
    if (isOpen === true) {
      setIsOpen(false);
    }
  }
  function open() {
    if (!isOpen) {
      setIsOpen(true);
    }
  }
  return {
    isOpen,
    close,
    open,
  };
};

export default useDisclosure;
