import { useLockUnlockQuestionnaire } from "hooks/useSetQuestionnaireLocked";
import { useConfirmationModal } from "components/components-original/modals/ConfirmationModal";
import LockIcon from "assets/icon-locked.svg";
import UnlockIcon from "assets/icon-unlocked.svg";

export const useQuestionnaireLockingModal = ({ id, locked }) => {
  const [lockQuestionnaire, unlockQuestionnaire] = useLockUnlockQuestionnaire();
  const operation = locked ? unlockQuestionnaire : lockQuestionnaire;

  return useConfirmationModal({
    action: () => operation(id),
    icon: locked ? UnlockIcon : LockIcon,
    title: `${locked ? "Unlock" : "Lock"} questionnaire`,
    message: locked
      ? "Changes can be made to the questionnaire if it's unlocked."
      : "When locked any changes made to the questionnaire will not be saved.",
    confirmText: locked ? "Unlock" : "Lock",
  });
};
