import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_Name: string;

  @Column()
  last_Name: string;

  @Column({ unique: true })
  emailOfStudent: string;

  @Column()
  enrollment_Date: Date;

  @CreateDateColumn()
  created_At: Date;

  @UpdateDateColumn()
  updated_At: Date;
}
