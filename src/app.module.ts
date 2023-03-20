import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from 'src/config/configuration';
import { databaseConfigurations } from 'src/providers/database/typeorm-datasource';
import { DataSource } from 'typeorm';
import { UploadsController } from './app.controller';
import { AuditorsAreaModule } from './modules/auditors-area/auditors-area.module';
import { AuthModule } from './modules/auth/auth.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { GroupingsModule } from './modules/groupings/groupings.module';
import { QuestionariesModule } from './modules/questionaries/questionaries.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { ReferencesModule } from './modules/references/references.module';
import { TagsModule } from './modules/tags/tags.module';
import { UsersModule } from './modules/users/users.module';
import { EncriptationModule } from './providers/encriptation/encriptation.module';

@Module({
	imports: [
		TypeOrmModule.forRoot(databaseConfigurations),
		ConfigModule.forRoot({
			isGlobal: true,
			load: [configuration],
		}),
		CompaniesModule,
		AuthModule,
		UsersModule,
		EncriptationModule,
		EmployeesModule,
		QuestionsModule,
		QuestionariesModule,
		GroupingsModule,
		AuditorsAreaModule,
		TagsModule,
		ReferencesModule,
	],
	controllers: [UploadsController],
})
export class AppModule {
	constructor(private dataSource: DataSource) {}
}
