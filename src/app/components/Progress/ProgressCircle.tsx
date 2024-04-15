import React from "react";
import ProgressWLabel from "./ProgressWLabel";
import type { ProgressGeneral } from "@/Props/ProgressProps";

const ProgressCircle: React.FC<ProgressGeneral> = ({ value, size }) => {
	if (size == "XS" || size == "xs") {
		return (
			<div>
				<ProgressWLabel value={value} size={64} />
			</div>
		);
	}
	if (size == "S" || size == "s") {
		return (
			<div>
				<ProgressWLabel value={value} size={144} />
			</div>
		);
	}
	if (size == "M" || size == "m") {
		return (
			<div>
				<ProgressWLabel value={value} size={180} />
			</div>
		);
	}
	if (size == "L" || size == "l") {
		return (
			<div >
				<ProgressWLabel value={value} size={216} />
			</div>
		);
	}
	if (size == "XL" || size == "xl") {
		return (
			<div>
				<ProgressWLabel value={value} size={252} />
			</div>
		);
	}
};

export default ProgressCircle;
