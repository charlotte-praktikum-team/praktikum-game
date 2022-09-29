import { Model, Table, Column, DataType, PrimaryKey, AutoIncrement, AllowNull, Index } from 'sequelize-typescript';

interface ISections {
  id: number;
  title: string;
  description: string;
}

@Table({ tableName: 'sections' })
export class Sections extends Model<ISections, Omit<ISections, 'id'>> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  title: string;

  @AllowNull(false)
  @Index
  @Column({ type: DataType.STRING })
  description: string;
}
