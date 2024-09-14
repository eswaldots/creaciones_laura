export default function RootLayout({
  children,
  product,
}: {
  children: React.ReactNode;
  product: React.ReactNode;
}) {
    return (
        <div>
            {children}
            {product}
        </div>
    )
}