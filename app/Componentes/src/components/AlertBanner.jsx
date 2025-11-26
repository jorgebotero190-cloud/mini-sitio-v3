import PropTypes from "prop-types";

export function AlertBanner({ type = "info", message, closable = false }) {
  const colors = {
    success: "bg-green-100 text-green-800 border-green-300",
    error: "bg-red-100 text-red-800 border-red-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
    info: "bg-blue-100 text-blue-800 border-blue-300",
  };

  if (!message || message.trim().length === 0) {
    console.warn("AlertBanner: message prop is empty.");
  }

  return (
    <div
      className={`border p-4 rounded-md flex justify-between items-center ${colors[type]}`}
    >
      <span>{message}</span>

      {closable && (
        <button
          onClick={() => alert("Cerraste la alerta")}
          className="font-bold"
        >
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
gi