import BackButton from "@/components/ui/back-button";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-start justify-start w-full ">
      <BackButton />
      {children}
    </div>
  );
};

export default layout;
