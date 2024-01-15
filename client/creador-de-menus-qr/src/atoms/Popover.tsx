"use client";

import React, { useState } from "react";

import styles from "./atoms.module.scss";

const Popover: React.FC<PopoverProps> = ({ description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onMouseEnter={togglePopover}
      onMouseLeave={togglePopover}
      className={styles.mainPopover}
    >
      <h2>i</h2>
      {isOpen && (
        <div>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Popover;

interface PopoverProps {
  description: string;
}
