import React from "react";
import styles from "./input.module.css";

export const Input = ({
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
			<label htmlFor={id} className={styles.Label}>
				{label}
			</label>
			{type === "select" ? (
				<select id={id} name={label} value={value} onChange={onChange}>
					{items.map((element, index) => (
						<option key={index} value={element.value}>
							{element.text}
						</option>
					))}
				</select>
			) : (
				<input
					id={id}
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
				/>
			)}
		</>
	);
};
