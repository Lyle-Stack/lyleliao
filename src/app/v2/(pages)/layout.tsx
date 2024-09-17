import V2Header from "../(components)/Header";

export default function PagesLayoyt({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="fullWidthPadding">
        <V2Header />
      </div>
      {children}
    </>
  );
}
