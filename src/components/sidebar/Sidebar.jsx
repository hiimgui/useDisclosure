import React from "react";
import "../sidebar/styles.css";

export default function Sidebar({ visible, close }) {
  return (
    <>
      {visible && (
        <div className="sidebar">
          <div className="menu">
            <span className="close" onClick={close}>
              X
            </span>
            <div className="menu-list">
              <span>menu 1</span>
              <span>menu 2</span>
              <span>menu 3</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
