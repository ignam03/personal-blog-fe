type DialogProps = {
  showModal: boolean;
  hiddenModal: () => void;
  msg?: string;
  confirmModal: (id: number) => void;
  type: string;
  id: number;
};

export const DialogConfirm = ({
  showModal,
  hiddenModal,
  msg,
  confirmModal,
  //type,
  id,
}: DialogProps) => {
  return (
    <>
      {showModal && (
        <div className="rounded-lg bg-white p-8 shadow-2xl container mx-auto max-w-lg fixed my-auto">
          <h2 className="text-lg font-bold">{msg}</h2>
          {/* 
          <p className="mt-2 text-sm text-gray-500">
            Doing that could have cause some issues elsewhere, are you 100% sure
            it's OK?
          </p> */}

          <div className="mt-4 flex gap-2">
            <button
              type="button"
              className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
              onClick={() => {
                confirmModal(id);
              }}
            >
              Si estoy seguro
            </button>

            <button
              type="button"
              className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
              onClick={hiddenModal}
            >
              No, regresar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
