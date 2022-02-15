import React from "react";
import styles from "./textarea.module.css";

export const Textarea = ({
	id,
	label,
	type = "text",
	value,
	onChange,
	placeholder,
	className,
	items,
}) => {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<textarea
				id={id}
				name={label}
				rows="4"
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			></textarea>
		</>
	);
};
