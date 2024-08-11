import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	FieldErrors,
} from "react-hook-form";

interface ComponentProps {
	register: UserFormRegister;
	errors: FieldErrors;
}

export default function PaymentForm({ register, errors }: ComponentProps) {
	const regex = (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

	return (
		<div className="flex flex-col w-full gap-12 items-center">
			<div className="flex flex-col bg-white gap-6 rounded-2xl p-6 w-full drop-shadow-xl">
				<section className="flex flex-col gap-3">
					<h1 className="text-xl font-bold">Personal information</h1>
					<hr />
				</section>
				<section className="flex flex-col gap-6">
					<section className="flex flex-col gap-3">
						<Label
							className="text-lg font-normal"
							htmlFor="first_name"
						>
							First Name
						</Label>
						<Input className='capitalize'
							{...register("first_name", {
								required: true,
								maxLength: 20,
								minLength: 3,

							})}
						/>
						{errors.first_name &&
							errors.first_name.type === "required" && (
								<span className="text-red-500">
									This field is required
								</span>
							)}
						{errors.first_name &&
							errors.first_name.type === "minLength" && (
								<span className="text-red-500">
									The last name need to have a min of 3
									characters
								</span>
							)}
						{errors.first_name &&
							errors.first_name.type === "maxLength" && (
								<span className="text-red-500">
									The last name need to have a max of 20
									characters
								</span>
							)}
					</section>
					<section className="flex flex-col gap-3">
						<Label
							className="text-lg font-normal"
							htmlFor="first_name"
						>
							Last Name
						</Label>
						<Input className='capitalize'
							{...register("last_name", {
								required: true,
								minLength: 3,
								maxLength: 20,
							})}
						/>
						{errors.last_name &&
							errors.last_name.type === "required" && (
								<span className="text-red-500">
									This field is required
								</span>
							)}
						{errors.last_name &&
							errors.last_name.type === "minLength" && (
								<span className="text-red-500">
									The last name need to have a min of 3
									characters
								</span>
							)}
						{errors.last_name &&
							errors.last_name.type === "maxLength" && (
								<span className="text-red-500">
									The last name need to have a max of 20
									characters
								</span>
							)}
					</section>
					<section className="flex flex-col gap-3">
						<Label
							className="text-lg font-normal"
							htmlFor="first_name"
						>
							Email
						</Label>
						<Input
							{...register("email", {
								required: true,
								pattern: regex,
							})}
						/>
						{errors.email && errors.email.type === "required" && (
							<span className="text-red-500">
								This field is required
							</span>
						)}
						{errors.email && errors.email.type === "pattern" && (
							<span className="text-red-500">
								Please enter a valid email
							</span>
						)}
					</section>
					<section className="flex flex-col gap-3">
						<Label
							className="text-lg font-normal"
							htmlFor="first_name"
						>
							Phone
						</Label>
						<Input className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="123456789" type='number' {...register("phone", {required: true, valueAsNumber: true, maxLength: 9, minLength: 9})}/>
												{errors.phone && errors.phone.type === "required" && (
							<span className="text-red-500">
								This field is required
							</span>
						)}
						{errors.phone && errors.phone.type === "valueAsNumber" && (
							<span className="text-red-500">
								Please enter a valid phone number 
							</span>
						)}
												{errors.phone && errors.phone.type === "minLength" && (
							<span className="text-red-500">
								Please enter a valid length number
							</span>
						)}
					</section>
				</section>
			</div>
			<div className="flex flex-col bg-white drop-shadow-xl gap-6 rounded-2xl p-6 w-full">
				<section className="flex flex-col gap-3">
					<h1 className="text-xl font-bold">Ubication information</h1>
					<hr />
				</section>
				<section className="flex flex-col gap-3">
					<Label className="text-lg font-normal" htmlFor="first_name">
						Ubication
					</Label>
					<Input {...register("ubication", {required: true, minLength: 10 })} />
								{errors.ubication && errors.ubication.type === "required" && (
							<span className="text-red-500">
								This field is required
							</span>
						)}
												{errors.ubication && errors.ubication.type === "minLength" && (
							<span className="text-red-500">
								Please enter a valid ubication
							</span>
						)}
				</section>
			</div>
		</div>
	);
}
