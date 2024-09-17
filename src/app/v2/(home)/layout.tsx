export default function HomeLayout({
  children,
  mountaineer,
  diver,
}: Readonly<{
  children: React.ReactNode;
  mountaineer: React.ReactNode;
  diver: React.ReactNode;
}>) {
  return (
    <>
      {children}
      {mountaineer}
      {diver}
    </>
  );
}
