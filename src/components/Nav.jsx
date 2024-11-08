import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Users,
  Utensils,
  Bell,
  Box,
  LogOut
} from 'lucide-react';
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", icon: LayoutDashboard, label: "Dashboard" },
  { path: "/gestion", icon: Users, label: "Personal" },
  { path: "/menu", icon: ClipboardList, label: "Menú" },
  { path: "/reservas", icon: ClipboardList, label: "Reservas" },
  { path: "/pedidos", icon: Utensils, label: "Pedidos/Mesas" },
  { path: "/inventario", icon: Box, label: "Inventario" },
  { path: "/notificaciones", icon: Bell, label: "Notificaciones" },
];

const Nav = () => {
  return (
    <header>
      <nav className="fixed left-0 top-0 h-screen w-[170px] border-r p-4 space-y-8 flex flex-col justify-between">
        {/* Logo Section */}
        <div>
          <div className="flex items-center justify-center py-4 border-b">
            <h3 className="text-xl font-semibold">Solo un dia</h3>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2 mt-4">
            {navItems.map(({ path, icon: Icon, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  cn(
                    "flex flex-col items-center justify-center w-full p-3 rounded-2xl transition-colors duration-200",
                    "hover:bg-gray-200 hover:text-gray-800",
                    isActive ? "bg-gray-200 text-gray-800" : "text-gray-500"
                  )
                }
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 rounded-full bg-gray-100">
                    <Icon className="w-5 h-5 text-gray-700" />
                  </div>
                  <span className="text-sm">{label}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-4">
          <button
            className="w-full flex items-center justify-center gap-2 p-3 rounded-2xl transition-colors duration-200 bg-gray-200 text-gray-800 hover:bg-gray-300"
            onClick={() => console.log('Cerrar sesión')}
          >
            <LogOut className="w-5 h-5 text-gray-700" />
            <span className="text-sm">Cerrar sesión</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
