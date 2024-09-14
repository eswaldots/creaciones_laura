import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { State } from "@/lib/definitions/state";

interface ComponentProps {
  errors: State["errors"];
}

export default function PaymentForm({ errors }: ComponentProps) {

  return (
    <div className="flex flex-col w-full gap-12 items-center">
      <div className="flex flex-col bg-white gap-6 rounded-2xl p-6 w-full drop-shadow-xl">
        <section className="flex flex-col gap-3">
          <h1 className="text-xl font-bold">Personal information</h1>
          <hr />
        </section>
        <section className="flex flex-col gap-6">
          <section className="flex flex-col gap-3">
            <Label className="text-lg font-normal" htmlFor="first_name">
              First Name
            </Label>
            <Input className="capitalize" name="firstName" />
            {errors && errors.firstName && (
              <span className="text-red-500">{errors.firstName}</span>
            )}
          </section>
          <section className="flex flex-col gap-3">
            <Label className="text-lg font-normal" htmlFor="first_name">
              Last Name
            </Label>
            <Input className="capitalize" name="lastName" />
            {errors && errors.lastName && (
              <span className="text-red-500">{errors.lastName}</span>
            )}
          </section>
          <section className="flex flex-col gap-3">
            <Label className="text-lg font-normal" htmlFor="first_name">
              Email
            </Label>
            <Input name="email" type="email" />
            {errors && errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </section>
          <section className="flex flex-col gap-3">
            <Label className="text-lg font-normal" htmlFor="phone">
              Phone
            </Label>
            <Input
              className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="123456789"
              type="number"
              name="phone"
            />
            {errors && errors.phone && (
              <span className="text-red-500">{errors.phone}</span>
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
          <Input name='address' type="text" />
          {errors && errors.address && (
            <span className="text-red-500">{errors.address}</span>
          )}
        </section>
      </div>
    </div>
  );
}
