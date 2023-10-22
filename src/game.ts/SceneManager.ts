import { Application, Ticker } from "pixi.js";
import { SceneBase } from "../game.ts/SceneBase";


export namespace SceneManager{
    export const WIDTH=1280;
    export const HEIGHT=720;
    let currentScene: SceneBase;
    let app:Application;

    export function initialize()
    {
        if (app != undefined)
        {
            console.error("No se puede llamar otra vez!");
            return;

        }
           app = new Application({
            view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            backgroundColor: 0xB2FFFF,
            width: WIDTH,
            height: HEIGHT
        });
        window.addEventListener("resize",()=>{
            const scaleX = window.innerWidth / app.screen.width;
            const scaleY = window.innerHeight / app.screen.height;
            const scale = Math.min( scaleX , scaleY);
            const gameWidth = Math.round(app.screen.width * scale);
            const gameHeight = Math.round(app.screen.height * scale) ;
        
            const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2) + "px";
            const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2) + "px";
            
            app.view.style!.width = gameWidth+"px";   
            app.view.style!.height = gameHeight+"px";
        
            (app.view.style as any).marginLeft = marginHorizontal ;
            (app.view.style as any).marginRight = marginHorizontal ;
            (app.view.style as any).marginTop = marginVertical ;
            (app.view.style as any).marginBottom = marginVertical ; 
            
        });
        window.dispatchEvent(new Event("resize"));  
        Ticker.shared.add(update);
    
    }
    
    export function changeScene(newScene:SceneBase)
    {
        if (currentScene)
        {
            currentScene.destroy();
        }
        currentScene=newScene;
        app.stage.addChild(currentScene);

    }
    function update(framepassed:number)
    {
       // Group.shared.update();
        currentScene?.update(framepassed,Ticker.shared.elapsedMS);
    }

}