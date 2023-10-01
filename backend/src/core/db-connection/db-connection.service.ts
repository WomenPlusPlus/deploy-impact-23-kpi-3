import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import * as process from 'process';
@Injectable()
export class DbConnectionService {
	db: SupabaseClient;
	constructor() {
		this.db = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
	}
}
