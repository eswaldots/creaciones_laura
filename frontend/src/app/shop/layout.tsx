export default function RootLayout({
  children,
  product,
}: {
  children: React.ReactNode;
  product: React.ReactNode;
}) {
    return (
        <div className="max-w-screen">
            {product}
            {children}
        </div>
    )
}