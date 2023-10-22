import { Container, Graphics, Text } from "pixi.js";

export class Button extends Container {

    constructor(texto: string) {
        super();


        const btnsalir = new Graphics();
        btnsalir.beginFill(0xffffff, 5);
        btnsalir.drawRoundedRect(-75, -25, 150, 50, 20);
        btnsalir.endFill();
        btnsalir.interactive = true;
        btnsalir.cursor = "pointer";
        btnsalir.on("mouseover",(()=>this.scale.set(this.scale.x*1.05)));
        btnsalir.on("mouseout",(()=>this.scale.set(this.scale.x/1.05)));
        this.addChild(btnsalir);

        const text = new Text(texto, { fontFamily: "Arial Black", fontSize: 20 });
        text.anchor.set(0.5);
        btnsalir.addChild(text);

    }
}


