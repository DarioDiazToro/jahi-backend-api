import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";


@Entity("ejercicios")
export class EjerciciosEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 50 })
    nombre_entrenamiento!: string;

    @Column({ type: "varchar", length: 50 })
    objetivo!: string;

    @Column({ type: "varchar", length: 50 })
    imagen_entrenamiento!: string;

    @Column({ type: "varchar", length: 50 })
    link_video_entrenamiento!: string;

    @Column({ type: "int" })
    cantidad_series!: number;

    @Column({ type: "varchar", length: 50 })
    detalles_entrenamiento!: string;


    @Column({ type: 'varchar', length: 50, })
    codigo!: string;

};