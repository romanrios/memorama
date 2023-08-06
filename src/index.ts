import { Application, Assets, Ticker } from "pixi.js";
import { assets } from "./assets";
import { KeyBoard } from "./util/keyboard";
import { MemotestScene } from "./MemotestScene";

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0xFFFFFF,
	width: 640,
	height: 480
});
KeyBoard.initialize();
window.addEventListener("resize",()=>{
	console.log("resized!");
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
	
})
window.dispatchEvent(new Event("resize"));

Assets.addBundle("myAssets", assets); 
Assets.loadBundle(["myAssets"]).then(() => {

 const myScene= new MemotestScene();
  app.stage.addChild(myScene);
  Ticker.shared.add(function(deltaFrame){
	myScene.update(Ticker.shared.deltaMS,deltaFrame);
  
  })
});