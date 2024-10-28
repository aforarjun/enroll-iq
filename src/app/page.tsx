import { SidebarMenu } from '@/components';

export default function Home() {
  return (
    <div className="bg-zinc-100 flex w-full h-full">
      <SidebarMenu />

      <main className="p-3 border rounded-xl flex-1 min-h-full my-3 mr-3 bg-background">
        <h1>Home</h1>
      </main>
    </div>
  );
}
