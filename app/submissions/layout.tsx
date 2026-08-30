import { Ambient } from "@/components/Ambient";

export default function SubmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Ambient />
      {children}
    </>
  );
}
