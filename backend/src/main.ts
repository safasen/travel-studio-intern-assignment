import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Bootstraps the NestJS application.
 * 
 * - Creates the app from the root AppModule.
 * - Sets a global route prefix to "api" (e.g., /api/your-route).
 * - Enables CORS for all incoming requests.
 * - Listens on the port defined in the .env file or defaults to 3000.
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set global route prefix (e.g., /api/users instead of /users)
  app.setGlobalPrefix('api'); 
  
  // Enable CORS for all incoming requests
  // This allows requests from different origins, which is useful for development and API consumption
  app.enableCors();

  // Listen on the port defined in the .env file or default to 3000 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
