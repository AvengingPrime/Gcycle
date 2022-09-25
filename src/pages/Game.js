import { Unity, useUnityContext } from "react-unity-webgl";

const Game = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "UnityApp/Build/build.loader.js",
        dataUrl: "UnityApp/Build/build.data",
        frameworkUrl: "UnityApp/Build/build.framework.js",
        codeUrl: "UnityApp/Build/build.wasm",
    });

    return <Unity unityProvider={unityProvider} />;
}

export default Game;