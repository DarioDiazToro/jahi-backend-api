import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity('usuarios')
export class UsuariosEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 50 })
    nombres!: string;

    @Column({ type: "varchar", length: 50 })
    password!: string;

    @Column({ type: "varchar", length: 50 })
    apellidos!: string;

    @Column({ type: "varchar", length: 50 })
    email!: string

    @Column({ type: "boolean" })
    activo!: boolean
};

