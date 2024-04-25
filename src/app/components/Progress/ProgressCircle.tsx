import React from "react";
import ProgressWLabel from "./ProgressWLabel";
import type { ProgressGeneral } from "@/Props/ProgressProps";
import { TextR4 } from "@/app/format/RegularTypography";
import ProgressWLabelAndName from "./ProgressWLabelAndName";

const ProgressCircle: React.FC<ProgressGeneral> = ({ value, size, text }) => {
	if (size == "XS" || size == "xs") {
		return (
			<div>
				<ProgressWLabel value={value} size={64} />
				<TextR4>{text}</TextR4>
			</div>
		);
	}
	if (size == "S" || size == "s") {
		return (
			<div>
				<ProgressWLabelAndName value={value} size={160} text={text} />
				
			</div>
		);
	}
	if (size == "M" || size == "m") {
		return (
			<div>
				<ProgressWLabelAndName value={value} size={200} text={text} />
			</div>
		);
	}
	if (size == "L" || size == "l") {
		return (
			<div>
				<ProgressWLabelAndName value={value} size={240} text={text} />
			</div>
		);
	}
	if (size == "XL" || size == "xl") {
		return (
			<div>
				<ProgressWLabelAndName value={value} size={280} text={text} />
			</div>
		);
	}
};

export default ProgressCircle;
