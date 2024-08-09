import { SetStateAction } from "react";
import { Button } from "./button";
import { LeftArrow, RightArrow } from "@/icons/arrows";

export default function Counter({
	count,
	setCount,
}: {
	count: number;
	setCount: Dispatch<SetStateAction<number>>;
}) {

	return (
		<div className="flex flex-row gap-12 items-center">
			<Button
			disabled={count === 1 ? true : false}
			onClick={(e) => setCount(count => count - 1)}
				size="icon"
				className="flex justify-center h-12 items-center size-12 p-2 rounded-2xl border-2 border-primary bg-white"
			>
				<LeftArrow />
			</Button>
			<strong className="text-2xl font-bold">{count}</strong>{" "}
			<Button
			onClick={(e) => setCount(count => count + 1)}
				size="icon"
				className="flex justify-center h-12 items-center p-2 size-12 rounded-2xl bg-white border-2 border-primary"
			>
				<RightArrow />
			</Button>
		</div>
	);
}
