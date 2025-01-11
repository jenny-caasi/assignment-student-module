import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Put(':studentId')
  modifyStudent(
    @Param('studentId') studentId: number, 
    @Body() updatedDetails: Partial<Student>
    ): Promise<Student> {
    return this.studentService.modifyStudent(studentId, updatedDetails);
  }


}
