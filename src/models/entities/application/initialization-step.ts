export enum StepName {
  createDefaultRoles = 'createDefaultRoles',
  createAdminUsers = 'createAdminUsers',
  createRepositoryPermissions = 'createRepositoryPermissions',
}

export class InitializationStep {
  constructor(name: StepName, completed = false) {
    this.name = name;
    this.completed = completed;
  }

  name: StepName;
  completed: boolean;
}
