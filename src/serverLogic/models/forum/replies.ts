import { Model, Table, Column, DataType, PrimaryKey, AutoIncrement, AllowNull, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Comments } from './comments';

interface IReplies {
  id: number;
  text: string;
  comment_id: number;
  login: string;
  userAvatar: string;
  likes?: number;
}

@Table({ tableName: 'replies' })
export class Replies extends Model<IReplies, Omit<IReplies, 'id'>> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  text: string;

  @AllowNull(false)
  @ForeignKey(() => Comments)
  @Column({ type: DataType.INTEGER })
  comment_id: number;

  @BelongsTo(() => Comments)
  comment: Comments;

  @AllowNull(false)
  @Column(DataType.STRING)
  login: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  userAvatar: string;

  @Column(DataType.INTEGER)
  likes: number;
}
