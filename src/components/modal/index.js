import React, { useState } from "react";
import styles from "./modal.module.css";
import { GladepayButton } from "react-gladepay-2";
import { Input } from "../input";

const MERCHANT_ID = "GP0000001";

export const Modal = ({ handleClose, show, children }) => {
	// const showHideClassName = show ? "modal display-block" : "modal display-none";
	const showHideClassName = show ? `display-block` : `display-none`;
	const [email, setEmail] = useState("");
	const [amount, setAmount] = useState(0);

	const callback = (values) => {
		console.log("🚀 ~ callback ~ values", values);
	};

	const close = (values) => {
		console.log("🚀 ~ close ~ values", values);
	};

	return (
		<div className={styles.Modal + " " + showHideClassName}>
			{/* <div className="overlay"></div> */}
			<section className={styles.ModalMain}>
				<img
					src="https://images.unsplash.com/photo-1501770118606-b1d640526693?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					alt=""
				></img>
				<div className={styles.ModalContent}>
					<form className={styles.Form}>
						<Input
							id="email"
							label="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter Email"
						></Input>
						<Input
							id="amount"
							label="Amount"
							type="number"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							placeholder="Enter Amount"
						></Input>
						<GladepayButton
							text="Donate Now"
							className="payButton"
							// callback={callback}
							onSuccess={callback}
							onClose={close}
							// close={close}
							disabled={true}
							embed={true}
							email={email}
							amount={amount}
							MID={MERCHANT_ID}
							tag="button"
						></GladepayButton>
					</form>
				</div>
				<button className="close" type="button" onClick={handleClose}>
					x
				</button>
			</section>
		</div>
	);
};
