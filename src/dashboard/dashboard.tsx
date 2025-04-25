import { Activity, Users, Server, Code } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          title="Usuários"
          value="1.245"
          icon={<Users className="text-blue-500" />}
        />
        <Card
          title="Atividade"
          value="87%"
          icon={<Activity className="text-green-500" />}
        />
        <Card
          title="Servidores"
          value="5"
          icon={<Server className="text-purple-500" />}
        />
        <Card
          title="Commits"
          value="218"
          icon={<Code className="text-red-500" />}
        />
      </div>
    </div>
  );
}

function Card({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-5 flex items-center gap-4">
      <div className="bg-gray-100 p-3 rounded-xl">{icon}</div>
      <div>
        <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}
