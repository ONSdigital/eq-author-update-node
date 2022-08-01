import styled from "styled-components";
import Modal from "components/components-original/modals/Modal";

const PlainModal = styled(Modal).attrs({ hasCloseButton: false })`
  .Overlay {
    background: transparent;
  }

  .Modal {
    width: 23em;
    padding: 0;
  }
`;

export default PlainModal;
