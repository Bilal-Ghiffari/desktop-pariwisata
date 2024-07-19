import { PassengerProvider } from "@/services/passeger-detail/PassengerContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PassengerProvider>{children}</PassengerProvider>;
}
