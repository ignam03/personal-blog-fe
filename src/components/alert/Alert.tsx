import { AlterColor } from "../../types/AlterColor";

type Props = {
  msg: string;
  onClose: () => void;
  severity: AlterColor | undefined;
};

export const Alert = ({ msg, onClose, severity }: Props) => {
  return severity == "success" ? (
    <>
      <div
        role="alert"
        className="fixed top-16 left-1/2 rounded-xl border border-gray-100 bg-white p-4"
      >
        <div className="flex items-start gap-4">
          <span className="text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>

          <div className="flex-1">
            <strong className="block font-medium text-gray-900">
              {" "}
              Cambios guardados{" "}
            </strong>

            <p className="mt-1 text-sm text-gray-700">{msg}</p>

            <div className="mt-4 flex gap-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
              >
                <span className="text-sm"> Preview </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>

              <button className="block rounded-lg px-4 py-2 text-gray-700 transition hover:bg-gray-50">
                <span className="text-sm">Revert</span>
              </button>
            </div>
          </div>

          <button
            className="text-gray-500 transition hover:text-gray-600"
            onClick={onClose}
          >
            <span className="sr-only">Dismiss popup</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  ) : (
    <>
      <div
        role="alert"
        className="rounded border-s-4 border-red-500 bg-red-50 p-4 max-w-lg fixed top-24 left-1/2"
      >
        <div className="flex items-center gap-2 text-red-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>

          <strong className="block font-medium"> {msg} </strong>
          <button
            className="text-white hover:text-gray-200 text-bold text-2xl font-normal"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <p className="mt-2 text-sm text-red-700">{msg}</p>
      </div>
    </>
  );
};
