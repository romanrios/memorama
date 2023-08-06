import { Container, Sprite } from "pixi.js";

export class Festejo extends Container {
    constructor(){
     super();
     const elefante: Sprite = Sprite.from("elefante");
     const gorrito: Sprite = Sprite.from("gorrito");
    
     gorrito.scale.set(0.18);
     gorrito.position.set(115,0);
     this.addChild(elefante);
     this.addChild(gorrito);
    }
}