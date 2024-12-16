import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    // Identificador único do usuário (gerado automaticamente)
    @PrimaryGeneratedColumn()
    id!: number;

    // Nome do usuário
    @Column({ type: "varchar", length: 255 })
    firstName!: string;

    // Sobrenome do usuário
    @Column({ type: "varchar", length: 255 })
    lastName!: string;

    // Idade do usuário
    @Column({ type: "int" })
    age!: number;

    // E-mail do usuário
    @Column({ type: "varchar", length: 255, unique: true })
    email!: string;
}
