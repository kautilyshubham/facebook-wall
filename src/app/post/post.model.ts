import { Comment } from './comment.model';

export class Post{
    msgId : string;
    name: string;
    msg ?: string;
    img ?: string;
    likeCount ?: number;
    comments ?: Comment[];
}