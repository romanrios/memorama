import { AnimatedSprite, Container, Texture,Graphics, Text} from "pixi.js";
import { Festejo } from "./Festejo";

export class Scene extends Container{
    catAnimated: any;
    constructor()
    {
        super();
        const festejo: Festejo = new Festejo();
        festejo.scale.set(0.5);
        festejo.x =100;
        festejo.y =300;
        this.addChild(festejo);

        const festejo2: Festejo = new Festejo();
        festejo2.x =150;
        festejo2.y =350;
        this.addChild(festejo2);

        this.catAnimated = new AnimatedSprite(
            [
                Texture.from("cat1"),
                Texture.from("cat2"),
                Texture.from("cat3"),
                Texture.from("cat4"),
                Texture.from("cat5"),
                Texture.from("cat6"),
            ],
            true
            );
            this.catAnimated.scale.set(0.5);
            this.catAnimated.play();
            this.catAnimated.animationSpeed = 0.35;
        this.addChild(this.catAnimated);
       
        const myGraph: Graphics = new Graphics();
        myGraph.lineStyle( 2, 0xFF00FF, 1 );
        myGraph.moveTo(0,0);
        myGraph.lineTo(200,300);
        myGraph.lineTo(200,100);
        myGraph.lineTo(0,0);
        myGraph.beginFill(0x00FF00,1);
        myGraph.drawEllipse(0, 0, 5, 13);
        myGraph.endFill();
        myGraph.drawRect(20, 30,55,125);
        myGraph.position.set(640/2, 480/2);
        this.addChild(myGraph);

        const myText:Text = new Text("Aguante Santa Fe",{fontSize:50, fill:0x00FF00,fontFamily:"Arial"});
        this.addChild(myText);


    }
   
    }
