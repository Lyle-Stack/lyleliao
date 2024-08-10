import { Separator } from "@/components/ui/separator";

export default function SeparaterText({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <Separator />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-background px-2">{children}</span>
      </div>
    </div>
  );
}
