
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen  ">
      {children}
    </div>
  );
}
