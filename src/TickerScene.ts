import { AnimatedSprite, Texture, Sprite, Container} from "pixi.js";
import { IUpdateable } from "./IUpdateable";

export class TickerScene extends Container implements IUpdateable{
    catAnimated: any;
    constructor()
    {
        super();
        const background =Sprite.from("selva");
            background.width=640;
            background.height=480;
            this.addChild(background);
        this.catAnimated = new AnimatedSprite(
            [
                Texture.from("cat1"),
                Texture.from("cat2"),
                Texture.from("cat3"),
                Texture.from("cat4"),
                Texture.from("cat5"),
                Texture.from("cat6"),
            ],
            false
            );
            this.catAnimated.scale.set(0.5);
            this.catAnimated.y =340;
            this.catAnimated.play();
            this.catAnimated.animationSpeed = 0.35;
            this.addChild(this.catAnimated);
         
    }
    public update(_deltaTime: number, deltaFrame: number | undefined): void {
        this.catAnimated.update(deltaFrame);
        this.catAnimated.x ++;
        for(let index = 0; index< 15000000;index++)
        1+1;
    }
   
   
}