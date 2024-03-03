import BackToHome from "@/components/back-to-home/BackToHome";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-4 p-24">
      <h1 className="text-neutral-500">Not Found</h1>
      <BackToHome />
    </main>
  );
};

export default NotFound;
