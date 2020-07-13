import { Entity } from '../entity';
import { Profile } from './profile/profile';
import { Role } from '../roles/role';

export class User extends Entity {
  username: string;
  password: string;
  isActive: boolean;
  lastLogin: Date;
  loginAttempts: number;
  profile: Profile;
  roles: Role[];

  static isValid(user: User): boolean {
    return !!user.username && !!user.password;
  }

  static readonly collectionName = 'Users';
  static readonly adminUserName = 'admin';
}
