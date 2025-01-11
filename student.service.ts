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

  async modifyStudent(studentId: number, updatedDetails: Partial<Student>): Promise<Student> { // Update existing student data
    await this.studentRepository.update(studentId, updatedDetails);
    return this.studentRepository.findOne({ where: { id: studentId}, });
  }

}
