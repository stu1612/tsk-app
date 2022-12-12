import { Toaster } from "react-hot-toast";

export default function Toast() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerStyle={{}}
      toastOptions={{
        className: "",
        duration: 2000,
        style: {
          background: "#fafafa",
          color: "##1d1e26",
        },
      }}
    />
  );
}
