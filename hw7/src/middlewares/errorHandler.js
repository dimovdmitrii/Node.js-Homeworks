// errorHandler.js

// Определяем список "безопасных" HTTP статусов для ошибок (4xx)
const safeStatusList = [400, 401, 403, 404, 409];

const errorHandler = (error, req, res, next) => {
  // 1. Извлекаем статус.
  // Если error.status — это 4xx, используем его.
  // Иначе, используем 500 (Internal Server Error) по умолчанию.
  const status = safeStatusList.includes(error.status) ? error.status : 500;

  // 2. Логируем ошибку, если это настоящий 500
  if (status === 500) {
    console.error(error.stack); // Логируем стек для реальных серверных ошибок
  }

  // 3. Отправляем ответ клиенту
  res.status(status).json({
    error: error.message,
  });
};

export default errorHandler;
