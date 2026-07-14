import { Routes, Route } from "react-router-dom";
import MenuItems from "../../config/menuConfig";
import RecuperadoresPage from "../../features/recuperadores/pages/RecuperadoresPage";
import RecuperadorCreatePage from "../../features/recuperadores/pages/RecuperadorCreatePage";
import RecuperadorDetailPage from "../../features/recuperadores/pages/RecuperadorDetailPage";
import RecuperadorEditPage from "../../features/recuperadores/pages/RecuperadorEditPage";
import AppLayout from "../../layout/AppLayout";
import PesajesPage from "../../features/pesajes/pages/pesajesPage";
import ProtectedRoute from "../../shared/auth/ProtectedRoute";
import RoleRoute from "../../shared/auth/RoleRoute";
import LoginPage from "../../features/auth/pages/LoginPage";
import ForbiddenPage from "../../features/auth/pages/ForbiddenPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/403" element={<ForbiddenPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<AppLayout />}>
          {MenuItems.map((item) =>
            item.path === "/" ? (
              <Route key={item.path} index element={<item.element />} />
            ) : (
              <Route
                key={item.path}
                path={item.path.slice(1)}
                element={<item.element />}
              />
            ),
          )}
          <Route path="recuperadores">
            <Route index element={<RecuperadoresPage />} />
            <Route element={<RoleRoute allow={["admin"]} />}>
              <Route path="crear" element={<RecuperadorCreatePage />} />
            </Route>
            <Route path=":id">
              <Route index element={<RecuperadorDetailPage />} />
              <Route element={<RoleRoute allow={["admin"]} />}>
                <Route path="editar" element={<RecuperadorEditPage />} />
              </Route>
            </Route>
          </Route>
          <Route path="pesajes">
            <Route index element={<PesajesPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
