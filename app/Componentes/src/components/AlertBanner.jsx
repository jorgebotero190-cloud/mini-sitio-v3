import { useState } from "react";
import PropTypes from "prop-types";

const colors = {
  success: "bg-green-100 text-green-800 border-green-300",
  error: "bg-red-100 text-red-800 border-red-300",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
  info: "bg-blue-100 text-blue-800 border-blue-300",
};

export function AlertBanner({ type = "info", message, closable = false }) {
  const [visible, setVisible] = useState(true);

  // Si no hay mensaje, no rendereamos nada
  if (!message || message.trim().length === 0) {
    console.warn("AlertBanner: message prop is empty.");
    return null;
  }

  // Si el tipo no existe en el mapa, usamos info por defecto
  const colorClass = colors[type] ?? colors.info;

  // Si el usuario ya cerró la alerta
  if (!visible) {
    return null;
  }

  return (
    <div
      className={`border p-4 rounded-md flex justify-between items-center ${colorClass}`}
 >
      <span>{message}</span>

      {closable && (
        <button onClick={() => setVisible(false)}
          className="font-bold"
          aria-label="Cerrar alerta">
          ✕
        </button>
      )}
    </div>
  );
}

AlertBanner.propTypes = {
  type: PropTypes.oneOf(["success", "error", "warning", "info"]),
  message: PropTypes.string.isRequired,
  closable: PropTypes.bool,
};
