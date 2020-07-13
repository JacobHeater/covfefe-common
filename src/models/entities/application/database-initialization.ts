import { Entity } from '../entity';
import { StepName, InitializationStep } from './initialization-step';

export class DatabaseInitialization extends Entity {
  steps: { [key in StepName]: InitializationStep } = null;

  get isCompleted(): boolean {
    return (
      !! this.steps &&
      !!this.steps.createAdminUsers &&
      this.steps.createAdminUsers.completed &&
      !!this.steps.createDefaultRoles &&
      this.steps.createDefaultRoles.completed &&
      !!this.steps.createRepositoryPermissions &&
      this.steps.createRepositoryPermissions.completed
    );
  }

  static readonly collectionName = 'DatabaseInitialization';
}
