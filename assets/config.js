/* Configuración del sitio. Editar solo este archivo para cambiar destinatarios o activar el envío automático. */
window.OA_CONFIG = {
  /* Destinatarios del envío de formatos completados. */
  recipients: ["rodrigoraul.flores@grafana.com", "rodrigoraulflores@gmail.com"],

  /* Envío automático con adjuntos (CSV, PDF y MD).
     Un sitio estático no puede enviar correo por sí solo. Para el envío automático, indique aquí la URL de un
     servicio que reciba un POST en JSON y reenvíe el correo (por ejemplo, una función en la nube o un servicio de formularios).
     Cuerpo enviado: { to, subject, form, cliente, files: [{ name, type, base64 }] }.
     Si se deja vacío, el botón descarga los tres archivos y abre su cliente de correo con los destinatarios y el resumen. */
  submitEndpoint: "",

  /* Máximo de caracteres del Markdown que se incluye en el cuerpo del correo cuando se usa el cliente de correo. */
  mailtoBodyLimit: 1500
};
