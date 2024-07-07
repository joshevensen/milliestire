import { ButtonSizes } from "@/enums";
import LibButton from "./Button";

type props = {
  children: any;
  buttonText?: string;
  onSubmit: () => void;
  loading?: boolean;
  error?: any;
  className?: string;
  isOneLine?: boolean;
};

const LibForm: React.FC<props> = ({
  children,
  buttonText = "Save",
  onSubmit,
  loading,
  error,
  className,
  isOneLine = false,
}) => {
  let formClasses = "space-y-4";
  if (isOneLine)
    formClasses = "space-y-4 sm:flex sm:items-end sm:space-y-0 sm:space-x-4";

  return (
    <form className={`${formClasses} ${className}`} onSubmit={onSubmit}>
      {children}

      <div className="pt-4 pb-2">
        <div className="flex justify-end">
          <LibButton
            isSubmit={true}
            isLoading={loading}
            isDisabled={loading}
            size={ButtonSizes.Medium}
            isFullWidth
          >
            {buttonText}
          </LibButton>
        </div>

        {error && (
          <p className="mt-2 font-bold text-danger text-center">{error}</p>
        )}
      </div>
    </form>
  );
};

export default LibForm;
