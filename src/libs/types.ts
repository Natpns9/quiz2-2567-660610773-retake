// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
userImagePath : string ;
username: string ;
likeNum: number ;
replies: string ;
}

interface CommentProps {
userImagePath : string ;
username: string ;
commentText: string ;
likeNum: number ;
replies: string [];
}
export type { ReplyProps,CommentProps};
