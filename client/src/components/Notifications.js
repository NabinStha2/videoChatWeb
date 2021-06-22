import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { SocketContext } from "../SocketContext";

const Notifications = () => {
  const context = useContext(SocketContext);

  return (
    <React.Fragment>
      {context.call.isReceivingCall && !context.callAccepted && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>{context.call.name} is calling:</h1>
          <Button
            variant="contained"
            color="primary"
            onClick={context.answerCall}
          >
            Answer
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Notifications;
