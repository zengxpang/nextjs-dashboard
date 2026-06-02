import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Tailwind 的 antialiased 类，该类可使字体更加平滑 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
