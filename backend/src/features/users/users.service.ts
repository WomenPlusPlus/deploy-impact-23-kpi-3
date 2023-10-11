import { Injectable } from '@nestjs/common';
import {DbConnectionService} from "../../core/db-connection/db-connection.service";
import {PostgrestError} from "@supabase/supabase-js";
import {UserDto} from "./dto/user.dto";

@Injectable()
export class UsersService {
  constructor(private service: DbConnectionService) {
  }
  async createUser(newUser) {
    const { data, error } = await this.service.db
        .from('users')
        .insert([
          newUser
        ])
        .select();
    if(error) {
      return error
    }
    return this.fetchUsers();
  }

  async fetchUsers(): Promise<PostgrestError | UserDto[]> {
    const { data, error } = await this.service.db
        .from('users')
        .select('*');
    return error || data;
  }

  async getUser(id) {
    const { data, error } = await this.service.db
        .from('users')
        .select('*')
        .eq('id', id);
    return error || data;
  }

  async updateUser(id, updateUser) { //need to be corrected
    const { data, error } = await this.service.db
        .from('users')
        .update(updateUser)
        .eq('id', id)
        .select();
    if(error) {
      return error
    }
    return this.fetchUsers();
  }

  async removeUser(id) {
    const { error } = await this.service.db
        .from('users')
        .delete()
        .eq('id', id)
    if(error) {
      return error
    }
    return this.fetchUsers();
  }
}
