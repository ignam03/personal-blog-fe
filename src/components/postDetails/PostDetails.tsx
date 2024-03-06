import React from "react";

type PostDetailProps = {
  user: any;
};

export const PostDetails: React.FC<PostDetailProps> = ({ user }) => {
  return (
    <p className="inline-flex items-center justify-start gap-2">
      <span className="text-xs leading-none text-slate-400">{user.userName}</span>
      <span className="size-1.5 rounded-full bg-blue-700" />
      <span className="text-xs leading-none text-slate-400">4 min. read</span>
    </p>
  );
};
