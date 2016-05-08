// Type definitions for phonegap.facebook.inappbrowser v 0.9
//https://github.com/caiovaccaro/phonegap.facebook.inappbrowser
// Definitions by: Brian Surowiec <https://github.com/Cyr1l>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface settingsInfo {

    appId: string;
    redirectUrl: string;
    permissions: string;

}

declare class FacebookInAppBrowser {

    static settings: settingsInfo;
    static login(data: any);

}
