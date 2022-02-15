import React from "react";
import styles from "./button.module.css";

export const Button = ({ label, onClick, children, block = false }) => {
	return (
		<button
			onClick={onClick}
			className={`${styles.Button} ${block ? styles.Block : ""}`}
		>
			{label || children}
		</button>
	);
};
