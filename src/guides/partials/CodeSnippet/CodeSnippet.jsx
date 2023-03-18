import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ToastContainer, toast } from "react-toastify";
import clipboardIcon from "./../../../assets/icons/clipboard.svg";
import "react-toastify/dist/ReactToastify.css";

function CodeSnippet({ content, lang }) {
  const style = {
    codeComponent: {
      display: "flex",
      position: "relative",
      margin: "2rem 0",
    },
    copyIcon: {
      position: "absolute",
      stroke: "#fff",
      right: "1rem",
      top: "1.5rem",
      zIndex: "2",
      cursor: "pointer",
      margin: "0",
    },
  };
  return (
    <div style={style.codeComponent}>
      <SyntaxHighlighter
        language={lang}
        customStyle={{
          backgroundColor: "#000",
          textShadow: "0",
          padding: "1rem",
          borderRadius: "5px",
          width: "100%",
        }}
        codeTagProps={{
          style: {
            color: "white",
          },
        }}
        wrapLongLines={true}
      >
        {content}
      </SyntaxHighlighter>
      <img
        src={clipboardIcon}
        alt="Clipboard Icon"
        style={style.copyIcon}
        onClick={() => {
          navigator.clipboard.writeText(content);
          toast("Copied!");
        }}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default CodeSnippet;
