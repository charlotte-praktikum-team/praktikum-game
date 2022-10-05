import { Model, Table, Column, DataType, PrimaryKey, AutoIncrement, AllowNull, ForeignKey, BelongsTo, HasMany, Default } from 'sequelize-typescript';
import { Replies } from './replies';
import { Topics } from './topics';

interface IComments {
  id: number;
  text: string;
  topic_id: number;
  login: string;
  userAvatar: string;
  likes?: number;
}

@Table({ tableName: 'comments' })
export class Comments extends Model<IComments, Omit<IComments, 'id'>> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  text: string;

  @AllowNull(false)
  @ForeignKey(() => Topics)
  @Column({ type: DataType.INTEGER })
  topic_id: number;

  @BelongsTo(() => Topics)
  topic: Topics;

  @AllowNull(false)
  @Column(DataType.STRING)
  login: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  userAvatar: string;

  @Default(0)
  @Column(DataType.INTEGER)
  likes: number;

  @HasMany(() => Replies)
  replies: Replies;
}
