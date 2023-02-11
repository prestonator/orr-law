import React, { useState } from "react";
import { animations } from "@/src/utils/animations";

const AnimSwitcher = ({
	anims,
	setAnimation,
	setExitBeforeEnter,
	startIndex,
}) => {
	const [animValue, setAnimValue] = useState(startIndex);
	const [exitBefore, setExitBefore] = useState(false);

	const handleAnimChange = (e) => {
		const v = Number(e.currentTarget.value);
		setAnimValue(v);
		setAnimation(anims[v]);
	};

	const handleExitBeforeChange = (e) => {
		const v = e.currentTarget.checked;
		setExitBefore(v);
		setExitBeforeEnter(v);
	};

	return (
		<div className="anim-switch" style={{ position: "absolute", zIndex: "9" }}>
			<select value={animValue} onChange={handleAnimChange}>
				{anims.map((animation, index) => {
					return (
						<option value={index} key={animation.name}>
							{animation.name}
						</option>
					);
				})}
			</select>
			<label className="exit-box">
				<input
					type="checkbox"
					checked={exitBefore}
					onChange={handleExitBeforeChange}
				/>
				Overlap page transitions
			</label>
		</div>
	);
};

export default AnimSwitcher;
