import { CometChat } from "@cometchat-pro/chat";
import { cometChatAppId,cometChatAuthKey, cometChatAgentUid } from "../config.js"

const region = "eu";
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(cometChatAppId, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    // You can now call login function.
  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);



CometChat.login(cometChatAgentUid, cometChatAuthKey).then(
  user => {
    console.log("Login Successful:", { user });
  },
  error => {
    console.log("Login failed with exception:", { error });
  }
);