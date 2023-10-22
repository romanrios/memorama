
import { loaderScene } from "./game.ts/loaderScene";
import { SceneManager } from "./game.ts/SceneManager";



SceneManager.initialize();
SceneManager.changeScene(new loaderScene );
