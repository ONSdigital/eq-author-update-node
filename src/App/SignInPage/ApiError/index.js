import React from "react";
import propTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { Field } from "components/components-original/Forms";
import Button from "components/components-themed/buttons";
import Panel from "components/components-themed/panels";

import {
  PageTitle,
  InlineDescription,
  InlineDescriptionBold,
} from "components/components-themed/Toolkit";

const ApiError = ({
  verificationEmail,
  errorMessage,
  setErrorMessage,
  setApiError,
  signOut,
}) => {
  const history = useHistory();

  function handleReturnToSignInPage(e) {
    e.preventDefault();
    setErrorMessage("");
    setApiError(false);
    // clear location variables
    history.replace({
      search: "",
    });
    signOut();
  }

  return (
    <>
      {errorMessage && (
        <Panel
          variant="errorWithHeader"
          headerLabel="This page has an error"
          paragraphLabel={errorMessage}
        />
      )}
      <PageTitle>Invalid link</PageTitle>
      <InlineDescription>
        Your link has expired or may have already been used.&nbsp;
      </InlineDescription>
      <InlineDescriptionBold>{verificationEmail}</InlineDescriptionBold>
      <Field>
        <Button onClick={(e) => handleReturnToSignInPage(e)}>
          Return to sign in page
        </Button>
      </Field>
    </>
  );
};

ApiError.propTypes = {
  verificationEmail: propTypes.string,
  emailNowVerified: propTypes.bool,
  errorMessage: propTypes.string,
  setErrorMessage: propTypes.func,
  setApiError: propTypes.func,
  signOut: propTypes.func,
};

export default ApiError;
