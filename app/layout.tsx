import "@/app/ui/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://nextjs-dashboard-snowy-three-94.vercel.app"), // 配置网站基础域名
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Tailwind 的 antialiased 类，该类可使字体更加平滑 */}
      <body>{children}</body>
    </html>
  );
}
