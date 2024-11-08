// src/paginas/NotFound/NotFound.jsx
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardContent className="pt-16 pb-16 flex flex-col items-center space-y-8">
          {/* 404 Number */}
          <div className="relative">
            <div className="text-[150px] font-bold text-gray-700 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl text-pink-300 animate-bounce">
                ¡Oops!
              </span>
            </div>
          </div>

          {/* Error message */}
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold text-white">
              Página no encontrada
            </h1>
            <p className="text-gray-400 max-w-sm">
              Lo sentimos, no pudimos encontrar la página que estás buscando.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
            <Button
              variant="outline"
              className="flex-1 bg-transparent border-gray-600 text-white hover:bg-gray-700 hover:text-white"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Regresar
            </Button>
            <Button
              className="flex-1 bg-pink-300 hover:bg-pink-400 text-gray-900"
              onClick={() => navigate('/')}
            >
              <Home className="mr-2 h-4 w-4" />
              Inicio
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;