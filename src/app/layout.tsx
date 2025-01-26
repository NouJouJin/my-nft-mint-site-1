import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react"; // 本来は "@thirdweb-dev/react" が推奨
import { Toaster } from "sonner";
import { ToastProvider } from "@/components/ui/toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFT Minting template",
  description: "A minting template powered by thirdweb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <Toaster position="bottom-center" />
          <ThirdwebProvider
            clientId={process.env.THIRDWEB_CLIENT_ID} 
            // activeChain="polygon" など必要に応じて指定
          >
            {children}
          </ThirdwebProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
