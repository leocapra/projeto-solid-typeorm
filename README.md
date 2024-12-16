# Awesome Project Built with TypeORM
# Estrutura do Projeto

Abaixo está a estrutura de diretórios recomendada para o projeto.

```plaintext

SOLID

/project
│
├── /src                          # Código fonte da aplicação
│   ├── /config                   # Arquivos de configuração (ex.: TypeORM, dotenv, etc.)
│   │   ├── data-source.ts        # Configuração do TypeORM
│   │   ├── env-config.ts         # Carregamento das variáveis de ambiente
│   │   └── ormconfig.ts          # Configuração global do TypeORM
│   │
│   ├── /modules                  # Módulos de funcionalidades (ex.: Product, User)
│   │   ├── /user                 # Módulo "user"
│   │   │   ├── /dtos             # DTOs específicos do módulo
│   │   │   │   └── createUserDto.ts # DTO para criar um usuário
│   │   │   ├── /repositories     # Repositórios do módulo
│   │   │   │   ├── /implementations # Implementações dos repositórios
│   │   │   │   │   └── userRepositoryImplementation.ts
│   │   │   │   └── userRepository.ts # Interface do repositório de usuário
│   │   │   ├── /useCases         # Casos de uso e controladores
│   │   │   │   ├── controller.ts # Controlador de usuário
│   │   │   │   └── createUserUseCase.ts
│   │   │   └── /entities         # Entidades específicas do módulo "user"
│   │   │       └── userEntity.ts # Exemplo de uma entidade do "user"
│   │   │
│   │   ├── /product              # Módulo "product"
│   │   │   ├── /dtos             # DTOs específicos do módulo
│   │   │   │   ├── createProductDto.ts # DTO para criar produto
│   │   │   │   └── productResponseDto.ts # DTO para retorno do produto
│   │   │   ├── /repositories     # Repositórios do módulo
│   │   │   │   ├── /implementations # Implementações dos repositórios
│   │   │   │   │   └── productRepositoryImplementation.ts
│   │   │   │   └── productRepository.ts # Interface do repositório de produto
│   │   │   ├── /useCases         # Casos de uso e controladores
│   │   │   │   ├── controller.ts # Controlador de produto
│   │   │   │   └── createProductUseCase.ts
│   │   │   └── /entities         # Entidades específicas do módulo "product"
│   │   │       └── productEntity.ts # Exemplo de uma entidade do "product"
│   │   │
│   │   └── /auth                 # Módulo "auth" (autenticação)
│   │       ├── /dtos             # DTOs de autenticação
│   │       │   └── loginDto.ts   # DTO para login
│   │       └── /useCases         # Casos de uso e controladores
│   │           ├── controller.ts # Controlador de autenticação
│   │           └── loginUseCase.ts
│   │
│   ├── /shared                   # Módulos reutilizáveis entre os módulos
│   │   ├── /database             # Configuração do banco de dados, migrações e seeds
│   │   │   ├── /migrations       # Arquivos de migração
│   │   │   │   └── 1633553953138-CreateUsersTable.ts  # Exemplo de migração
│   │   │   ├── /seeds            # Arquivos de seeds para popular o banco de dados
│   │   │   │   └── userSeed.ts   # Exemplo de seed para o usuário
│   │   │   └── /index.ts           # Arquivos de configuração de banco de dados (não mudou)
│   │   ├── /middleware           # Middlewares (autenticação, logging, etc.)
│   │   │   └── authMiddleware.ts # Middleware de autenticação
│   │   └── /utils                # Funções utilitárias globais
│   │       └── dateUtil.ts       # Funções para manipulação de datas
│   │
│   ├── /routes                   # Definição das rotas da aplicação
│   │   ├── productRoutes.ts      # Rotas de produto
│   │   ├── userRoutes.ts         # Rotas de usuário
│   │   ├── authRoutes.ts         # Rotas de autenticação
│   │   └── index.ts              # Roteador central (pode importar as rotas dos módulos)
│   │
│   ├── /tests                   # Testes unitários, integração, etc.
│   │   ├── /user                 # Testes do módulo de usuário
│   │   │   └── userController.spec.ts
│   │   ├── /product              # Testes do módulo de produto
│   │   │   └── productService.spec.ts
│   │   ├── /auth                 # Testes de autenticação
│   │   │   └── authService.spec.ts
│   │   └── setupTests.ts         # Arquivo de setup de testes (ex.: configuração do jest)
│   │
│   └── index.ts                  # Arquivo de inicialização da aplicação
│
├── /docker                       # Arquivos de configuração do Docker
│   ├── Dockerfile                # Arquivo Dockerfile para construção da imagem
│   ├── .dockerignore             # Arquivo para ignorar arquivos durante a build
│   └── docker-compose.yml        # Configuração do Docker Compose
├── package.json                  # Arquivo de dependências (npm ou yarn)
├── tsconfig.json                 # Configuração do TypeScript
├── .gitignore                    # Arquivo de configuração do Git
├── .env                          # Arquivo de variáveis de ambiente
└── README.md                     # Documentação do projeto
```
