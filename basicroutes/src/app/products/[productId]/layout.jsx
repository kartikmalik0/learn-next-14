export default function ProductLayout({
    children
  }) {
    return (
      <html lang="en">
        <body>
            {children}
            <h1 className=" text-2xl text-red-500">Featured Product</h1>
        </body>
      </html>
    );
  }