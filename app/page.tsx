import SpinningWheel from "@/components/SpinningWheel";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Service!</h1>
      <p className="text-lg mb-12">
        Spin the wheel before you can access the dashboard
      </p>

      <SpinningWheel />
    </div>
  );
}
