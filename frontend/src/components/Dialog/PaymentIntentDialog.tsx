import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { gql } from "../../__generated__/gql";
import PaymentIntentDialogCheckoutForm from "./PaymentIntentDialogCheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51NJq0TIMKbmsdl3YSHKCB5y7asM8blzTefhSF3rTbYlj6TQExOtCxKqOFzv7okyaDWLVvbbCeoMi6SK0Y3ekJkc400Yo1p06oJ"
);

const PAYMENT_INTENT_QUERY = gql(`
    query PaymentIntent($id: String!) {
        paymentIntent(id: $id) 
    }
`);

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& label.Mui-focused": {
    color: "black",
  },
  label: {
    color: "black",
  },
}));

type DialogTitleProps = {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
};

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

// TODO: update project type
type Props = {
  id: string;
  open: boolean;
  onClose: () => void;
};

export default function PaymentIntentDialog({ id, open, onClose }: Props) {
  const [clientSecret, setClientSecret] = useState("");
  const { data } = useQuery(PAYMENT_INTENT_QUERY, {
    variables: { id },
  });

  console.log(data);
  useEffect(() => {
    const secret = data?.paymentIntent;
    if (secret != null) {
      setClientSecret(secret);
    }
  }, [data]);

  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
        Make Payment
      </BootstrapDialogTitle>
      <DialogContent>
        {clientSecret && (
          <Elements
            options={{
              clientSecret,
              appearance: {
                theme: "stripe",
              },
            }}
            stripe={stripePromise}
          >
            <PaymentIntentDialogCheckoutForm />
          </Elements>
        )}
      </DialogContent>
    </BootstrapDialog>
  );
}
