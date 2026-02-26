export interface PostType {
  id: string;
  username: string;
  handle: string;
  avatarUrl?: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
  likes: number;
  comments: number;
}