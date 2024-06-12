import React from "react";
import { useStorageListener } from "./useStorageListener";
import { Modal } from "../Modal";
import './ChangeAlert.css';

function ChangeAlert({ sincronize }) {

	const { show, toggleShow } = useStorageListener(sincronize);

	if (show) {
		return(
			<Modal>
				<div className="TodoReload">
					<label className="TodoReload-label">
						There were changes to the page, do you want to reload it?
					</label>
					<div>
						<button
							type="text"
							className="TodoReload-button"
							onClick={toggleShow}
						>
							Reload
						</button>
					</div>
				</div>
			</Modal>
		);
	} else {
		return null;
	}
	
}

export { ChangeAlert };