@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ type: 'varchar' })
  user_name: string;

  @Column({ type: 'varchar' })
  user_email: string;

  @Column({ type: 'varchar' })
  role: string;

  @Column({ type: 'timestamp' })
  updated_at: string;

  @Column({ type: 'varchar' })
  updated_by: string;
}
