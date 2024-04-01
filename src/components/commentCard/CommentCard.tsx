import { useState } from "react";
import { useComment } from "../../context/CommentContext";
import { store } from "../../redux/store";
import { ProfileCard } from "../profileCard/ProfileCard";

type ICommentCard = {
  comment: {
    id?: number;
    content: string;
    articleId: number;
    parentCommentId?: number;
    author?: {
      id?: number;
      userName?: string;
      profileImage?: string;
      biography?: string;
    };
  };
};

export const CommentCard: React.FC<ICommentCard> = ({ comment }) => {
  const { content, id, author } = comment;
  const { deleteComment } = useComment();
  const [isHovering, setIsHovering] = useState(false);
  // const [myProfile, setMyProfile] = useState<UserType | null>(null);
  const user = store.getState().user;

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="container mx-auto">
      <article className="rounded-xl border-2 border-gray-100 bg-white m-2 container ">
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
          <a href="#" className="block shrink-0">
            <img
              alt=""
              src={author?.profileImage}
              className="size-14 rounded-lg object-cover"
            />
          </a>

          <div className="grow">
            {/* <h3 className="font-medium sm:text-lg">
            <a href="#" className="hover:underline">
              {" "}
              Question about Livewire Rendering and Alpine JS{" "}
            </a>
          </h3> */}
            <p className="line-clamp-2 text-sm text-gray-700">{content}</p>

            <div className="mt-2 sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>

                <p className="text-xs">14 comentarios</p>
              </div>
              <span className="hidden sm:block" aria-hidden="true">
                &middot;
              </span>
              <p
                className="hidden sm:block sm:text-xs sm:text-gray-500"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                Posted by
                <a
                  href="#"
                  className="font-medium underline hover:text-gray-700"
                >
                  {author?.userName}{" "}
                </a>
              </p>
            </div>
            {isHovering && (
              <ProfileCard
                userName={author?.userName}
                profileImage={author?.profileImage}
                //id={author!.id}
                biography={author?.biography}
              />
            )}
          </div>
        </div>

        {author?.userName === user?.userName ? (
          <>
            <div className="flex justify-end">
              <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-red-600 px-3 py-1.5 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <button
                  onClick={() => deleteComment(id as number)}
                  className="rounded-ee-xl rounded-ss-xl bg-red-600 px-3 py-1.5 text-white"
                >
                  Eliminar
                </button>
              </strong>
            </div>
          </>
        ) : (
          <div className="container flex justify-end">
            <button
              //onClick={() => deleteComment(id as number)}
              className="rounded-ee-xl rounded-ss-xl bg-blue-600 px-7 py-3 text-white"
            >
              Responder
            </button>
          </div>
        )}
      </article>
    </div>
  );
};
