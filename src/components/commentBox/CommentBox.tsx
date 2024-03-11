import { useComment } from "../../context/CommentContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

type IComment = {
  content: string;
  articleId: number;
  parentCommentId?: number;
};

interface StateType {
  user: {
    profileImage: string;
    id: number;
    userName: string;
  };
}

export const CommentBox = () => {
  const { createComment } = useComment();
  const myUser = useSelector((state: StateType) => state.user);
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IComment>();
  const onSubmit: SubmitHandler<IComment> = (data) => {
    createComment({
      ...data,
      articleId: Number(params.id),
      author: {
        id: myUser.id,
        userName: myUser.userName,
        profileImage: myUser.profileImage,
      },
    });
  };
  return (
    <>
      <div className="mt-5">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <label className="sr-only">Order notes</label>

          <div className="overflow-hidden">
            <textarea
              id="OrderNotes"
              className="w-full resize-none border-x-0 border-t-0 rounded-md border-gray-200 px-0 align-top sm:text-sm"
              rows={4}
              placeholder="Comment..."
              {...register("content", {
                required: true,
              })}
            ></textarea>
            {errors.content && (
              <p className="bg-red-400 mt-2 p-2 text-white-500 rounded-md">
                content is required
              </p>
            )}
            <div className="flex items-center justify-end gap-2 py-3">
              <button
                type="button"
                className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
              >
                Clear
              </button>

              <button
                type="submit"
                className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
