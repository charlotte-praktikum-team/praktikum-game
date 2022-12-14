import { Model, Table, Column, DataType, PrimaryKey, AutoIncrement, AllowNull, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Comments } from './comments';
import { Sections } from './sections';

interface ITopics {
  id: number;
  title: string;
  section_id: number;
  login: string;
  userAvatar: string;
}

@Table({ tableName: 'topics', freezeTableName: true })
export class Topics extends Model<ITopics, Omit<ITopics, 'id'>> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  title: string;

  @AllowNull(false)
  @ForeignKey(() => Sections)
  @Column({ type: DataType.INTEGER })
  section_id: number;

  @BelongsTo(() => Sections)
  section: Sections;

  @HasMany(() => Comments)
  comments: Comments;

  @AllowNull(false)
  @Column(DataType.STRING)
  login: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  userAvatar: string;
}
