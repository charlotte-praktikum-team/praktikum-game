import { Model, Table, Column, DataType, PrimaryKey, AutoIncrement, AllowNull, Index } from 'sequelize-typescript';

interface IUsedThemes {
  id: number;
  theme: string;
  user_id: number;
}

@Table({ tableName: 'used_themes' })
export class UsedThemes extends Model<IUsedThemes, Omit<IUsedThemes, 'id'>> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  theme: string;

  @AllowNull(false)
  @Index
  @Column({ type: DataType.INTEGER })
  user_id: number;
}
