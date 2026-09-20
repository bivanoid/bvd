
interface RotateProps {
	rotateIcon?: string;
	positionTop?: boolean;
	valueBlock?: string;
	positionLeft?: boolean;
	valueInline?: string;
	positionAbsolute: boolean;
}

type Props = RotateProps;

export default function FloatingIcon({
	rotateIcon,
	positionLeft,
	positionTop,
	valueInline,
	valueBlock,
	positionAbsolute
}: Props) {
	return (
		<div
			className="floating_dots"
			style={{
				rotate: rotateIcon,
				...(positionAbsolute ? {position: "absolute"} : {position: "relative"}),
				...(positionLeft
					? { left: valueInline }
					: { right: valueInline }),

				...(positionTop
					? { top: valueBlock }
					: { bottom: valueBlock }),
			}}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
}
