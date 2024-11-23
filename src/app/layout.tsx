import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-commerce",
  description:
    "Our E-commerce platform offers a wide range of fashion and lifestyle products for men, women, and kids. All season , Different size  and color .Tob Rated ,Premium  Price range ,Shop the latest trends in clothing, accessories, and footwear designed for every member of the family. From stylish outfits for men and women to playful collections for kids, we have something for everyone. Browse our curated selection of high-quality products, all available at your fingertips with fast and reliable delivery. Whether you're looking for trendy apparel or essentials, our store brings you the best for men, women, and kids.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
