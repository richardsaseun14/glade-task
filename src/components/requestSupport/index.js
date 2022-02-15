import React, { useEffect, useState } from "react";
import { Button } from "../button";
import { Input } from "../input";
import { Textarea } from "../textarea";
import styles from "./requestSupport.module.css";
import toast from "react-simple-toasts";
import { click } from "@testing-library/user-event/dist/click";

const items = [
	{ text: "Medical Bills", value: "Medical Bills" },
	{ text: "School Fees", value: "School Fees" },
];

export const RequestSupport = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [reason, setReason] = useState("");
	const [support, setSupport] = useState(items[0].value);

	const clickHandler = () => {
		toast("Hello toast!");
	};

	return (
		<div className={styles.Request}>
			<div className={styles.Aside}>
				<p style={{ fontSize: "50px", marginBottom: "0px" }}>
					<span className="text-primary font-weight-bold">
						Request for Support
					</span>
				</p>
				<p>
					Request for support for school fees or medical bills. Enter
					information and we will get back to you in a matter of minutes
				</p>
				<div className="card" style={{ marginTop: "60px" }}>
					<form className={styles.Form}>
						<Input
							id="full-name"
							label="Full Name"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							placeholder="Enter Full Name"
						></Input>
						<Input
							id="email"
							label="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter Email"
						></Input>
						<Input
							id="phone"
							label="Phone number"
							type="tel"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							placeholder="Enter Phone number"
						></Input>
						<Input
							id="support"
							label="Support For"
							type="select"
							items={items}
							value={support}
							onChange={(e) => setSupport(e.target.value)}
							placeholder="Enter Phone number"
						></Input>
						<Textarea
							id="reason"
							label="Reason for support"
							value={reason}
							placeholder="Write a compelling reason for "
							onChange={(e) => setReason(e.target.value)}
						></Textarea>
						<Button onClick={clickHandler} block>
							Request Help
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};
