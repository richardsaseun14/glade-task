import React, { useState } from "react";
import { Button } from "../button";
import { Modal } from "../modal";
import styles from "./hero.module.css";

export const Hero = () => {
	const [modal, setModal] = useState(false);
	return (
		<div className={styles.Hero}>
			<div className={styles.Aside}>
				<p style={{ fontSize: "50px", marginBottom: "0px" }}>
					<span className="text-primary font-weight-bold">
						Glade Foundation
					</span>{" "}
					is aimed at supporting individuals affected by COVID-19
				</p>
				<p>
					Through donations, you can help individuals directly or indirectly
					affected by COVID-19 by donating to provide the essential tools that
					will be needed to help and effectively manage COVID-19 patients.
				</p>
				<Button onClick={() => setModal(true)}>Donate Now</Button>
			</div>
			<Modal show={modal} handleClose={() => setModal(false)}>
				<div>Hello</div>
			</Modal>
		</div>
	);
};
