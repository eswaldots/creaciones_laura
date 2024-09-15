import Link from "next/link";

type item = {
  name: string;
  link: string;
};

type propsComponent = {
  items: Array<item>;
};

export default function ShopMenu({ items }: propsComponent) {
  const shopList = items.map((item, index) => {
    return (
      <Link
        className="transition duration-300 font-bold text-2xl hover:scale-105"
        href={item.link}
        key={index}
      >
        {item.name}
      </Link>
    );
  });

  return (
    <>
      <div className="hidden lg:flex flex-col items-center justify-center hover:items-start hover:justify-normal group">
        <h1 className="text-xl opacity-80">Shop</h1>
        <div className="transition ease-in-out delay-150 rounded-2xl duration-300 p-6 gap-6 hidden group-hover:bg-primary group-hover:flex fixed flex-col w-96 bg-secondary">
          {shopList}
        </div>
      </div>
    </>
  );
}
