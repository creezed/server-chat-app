import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
  .setTitle("Chat app")
  .setDescription("The Chat API documentation")
  .setVersion("1.0")
  .addBearerAuth()
  .build();
