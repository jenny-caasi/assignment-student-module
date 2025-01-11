import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}
  
  async addStudent(studentDetails: Partial<Student>): Promise<Student> { // Create a new student
    const newStudent = this.studentRepository.create(studentDetails);
    return this.studentRepository.save(newStudent);
  }
  
}
