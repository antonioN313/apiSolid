import { MailtrapMailProvider } from "../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../repositories/implementations/PostgresUsersRepository";
import { CreateUserUseCase } from "../controller/CreateUser/CreateUserUseCase";
import { CreateUserController } from "../controller/CreateUser/CreateUserController";

const postgresUsersRepository = new PostgresUsersRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapMailProvider,
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }